"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import TextField from "../TextField";
import { Email } from "@styled-icons/material-outlined/Email";
import { Password } from "@styled-icons/fluentui-system-regular/Password";
import { Error } from "@styled-icons/boxicons-regular/Error";
import { FieldErrors, signInValidate } from "../../utils/validator-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import * as S from "./styles";

const Form = () => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const routes = useRouter();
  const { push } = routes;

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const errors = signInValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const result = await signIn("credentials", {
      ...values,
      redirect: false
    });

    if (result?.error) {
      setFormError("Credenciais inválidas");
      setLoading(false);
    } else if (result?.ok) {
      push("/dashboard");
    }
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
        <S.Title>Identifique-se no ecoletasocial.com.br:</S.Title>
        <S.ContainerInput>
          <TextField
            error={fieldError?.username}
            onInputChange={(v) => handleInput("username", v)}
            label="Nome do usuário"
            icon={<Email />}
            name="username"
            placeholder="jhonsmith"
            type="text"
          />
          <TextField
            error={fieldError?.password}
            onInputChange={(v) => handleInput("password", v)}
            label="Senha de acesso"
            icon={<Password />}
            name="password"
            placeholder="••••••••••••••••"
            type="password"
          />
          <S.ContainerButton>
            <S.SizeButton>
              <Button bg="blue" text="Continuar" fullWidth loading={loading} />
            </S.SizeButton>
          </S.ContainerButton>
        </S.ContainerInput>
      </S.Form>
      <S.AreaLink>
        <Link href="#">
          <S.TextTerm>Termo de uso e aviso de privacidade</S.TextTerm>
        </Link>
      </S.AreaLink>
    </S.Container>
  );
};

export default Form;
