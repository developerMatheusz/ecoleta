/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import TextField from "../TextField";
import { Error } from "@styled-icons/boxicons-regular/Error";
import { FieldErrors, passwordValidate } from "../../utils/validator-form";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "../../lib/axios";
import * as S from "../Form/styles";

const Form = () => {
  const [formError, setFormError] = useState("");
  const [fieldError, setFieldError] = useState<FieldErrors>({});
  const [values, setValues] = useState<any>();
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

    const errorsPassword = passwordValidate(values);

    if (Object.keys(errorsPassword).length) {
      setFieldError(errorsPassword);
      setLoading("false");
      return;
    }

    await api
      .put(`/register-password/${cpf}`, { values })
      .then(() => {
        setLoading("false");
        push(`/auth/login`);
      })
      .catch((error) => {
        setLoading("false");
        setFormError("Um erro inesperado ocorreu no servidor!");
        console.error(error);
      });

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
        <S.Title>Cadastre sua senha</S.Title>
        <S.ContainerInput>
          <TextField
            error={fieldError?.password}
            onInputChange={(v) => handleInput("password", v)}
            label="Senha"
            name="password"
            placeholder="Digite sua nova senha"
            type="password"
          />
          <S.ContainerButton>
            <S.SizeButton>
              <Link href="/api/auth/signin">
                <Button
                  bg="blue"
                  border
                  text="Cancelar"
                  fullwidth="true"
                  type="button"
                />
              </Link>
            </S.SizeButton>
            <S.SizeButton>
              <Button
                bg="blue"
                text="Cadastrar"
                fullwidth="true"
                loading={loading}
                type="submit"
              />
            </S.SizeButton>
          </S.ContainerButton>
        </S.ContainerInput>
      </S.Form>
    </S.Container>
  );
};

export default Form;
