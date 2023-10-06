/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import TextField from "../TextField";
import { Error } from "@styled-icons/boxicons-regular/Error";
import { Identification } from "@styled-icons/heroicons-solid/Identification";
import {
  FieldErrors,
  cpfValidate,
  passwordValidate
} from "../../utils/validator-form";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { api } from "../../lib/axios";
import toast from "react-hot-toast";
import * as S from "./styles";

type FormProps = {
  type?: "login" | "password";
};

const Form = ({ type }: FormProps) => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState<any>({});
  const [loading, setLoading] = useState("false");
  const routes = useRouter();
  const searchParams = useSearchParams();
  const { push } = routes;
  const cpf = searchParams.get("cpf");

  const handleInput = (field: string, value: string) => {
    setValues((s: any) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading("true");

    if (type === "password") {
      const errorsPassword = passwordValidate(values);

      if (Object.keys(errorsPassword).length) {
        setFieldError(errorsPassword);
        setLoading("false");
        return;
      }

      const password = values.password;

      const result = await signIn("credentials", {
        cpf,
        password,
        redirect: false
      });

      if (result?.error) {
        setFormError("Senha incorreta.");
        setLoading("false");
      } else if (result?.ok) {
        toast.promise(
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const success = true;
              if (success) {
                resolve("Sua sessão foi iniciada com sucesso");
              } else {
                reject("Houve um erro no processo de autenticação");
              }
            }, 2000);
          }),
          {
            loading: "Carregando...",
            success: (result) => `${result}`,
            error: (error) => `${error}`
          }
        );
        push("/dashboard");
      }
    } else {
      const errorsCpf = cpfValidate(values);

      if (Object.keys(errorsCpf).length) {
        setFieldError(errorsCpf);
        setLoading("false");
        return;
      }

      await api
        .post("/verification-cpf", { values })
        .then((response) => {
          if (response.data.status === 400) {
            setLoading("false");
            push(`/register-password?cpf=${values.cpf}`);
          } else if (response.data.status === 404) {
            setLoading("false");
            setFormError("Este CPF não existe.");
          } else {
            setLoading("false");
            push(`/auth/password?cpf=${values.cpf}`);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    setFieldError({});
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        {!!formError && (
          <S.AreaError>
            <Error size={24} />
            <S.TextError>{formError}</S.TextError>
          </S.AreaError>
        )}
        <S.Title>
          {type === "login"
            ? "Identifique-se no ecoleta.com.br"
            : "Digite sua senha"}
        </S.Title>
        {type === "login" && (
          <>
            <S.ContainerInformation type={type}>
              <S.ContainerLogo>
                <Identification color="#1351B4" />
              </S.ContainerLogo>
              <S.Description>Número do CPF</S.Description>
            </S.ContainerInformation>
            <S.ContainerComplementInfo>
              <S.TitleComplementInfo>
                Digite seu CPF para <strong className="font-bold">criar</strong>{" "}
                ou <strong className="font-bold">acessar</strong> sua conta
                ecoletasocial.com.br
              </S.TitleComplementInfo>
            </S.ContainerComplementInfo>
          </>
        )}
        {type === "password" && (
          <S.ContainerInformation type={type}>
            <S.Description>CPF</S.Description>
            <S.CpfArea>{cpf}</S.CpfArea>
          </S.ContainerInformation>
        )}
        {type === "login" ? (
          <S.ContainerInput>
            <TextField
              error={fieldError?.cpf}
              onInputChange={(v: string) => handleInput("cpf", v)}
              label="CPF"
              name="cpf"
              placeholder="Digite seu CPF"
              type="text"
              focus="true"
            />
            <S.ContainerButton type={type}>
              <S.SizeButton>
                <Button
                  bg="blue"
                  text="Continuar"
                  fullwidth="true"
                  loading={loading}
                />
              </S.SizeButton>
            </S.ContainerButton>
          </S.ContainerInput>
        ) : (
          <S.ContainerInput>
            <TextField
              error={fieldError?.password}
              onInputChange={(v: string) => handleInput("password", v)}
              label="Senha"
              name="password"
              placeholder="Digite sua senha atual"
              type="password"
              focus="true"
            />
            <div className="mb-8 underline text-normal text-sky-700">
              <Link href="#">Esqueci minha senha</Link>
            </div>
            <S.ContainerButton type={type}>
              {type === "password" && (
                <S.SizeButton>
                  <Link href="/auth/login">
                    <Button
                      bg="blue"
                      border
                      text="Cancelar"
                      fullwidth="true"
                      type="button"
                    />
                  </Link>
                </S.SizeButton>
              )}
              <S.SizeButton>
                <Button
                  bg="blue"
                  text="Entrar"
                  fullwidth="true"
                  loading={loading}
                  type="submit"
                />
              </S.SizeButton>
            </S.ContainerButton>
          </S.ContainerInput>
        )}
      </S.Form>
      {type === "login" && (
        <S.AreaLink>
          <Link href="#">
            <S.TextTerm>Termo de uso e aviso de privacidade</S.TextTerm>
          </Link>
        </S.AreaLink>
      )}
    </S.Container>
  );
};

export default Form;
