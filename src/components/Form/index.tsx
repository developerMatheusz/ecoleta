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

    if (result?.url) {
      return push(result?.url);
    }

    setLoading(false);

    setFormError("Credenciais inválidas");
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit} className="px-4 py-8">
        {!!formError && (
          <div className="flex items-center text-red-500 mb-4 gap-1">
            <Error size={24} />
            <span className="text-base">{formError}</span>
          </div>
        )}
        <h1 className="text-lg font-bold">
          Identifique-se no ecoletasocial.com.br:
        </h1>
        <div className="mt-8">
          <div>
            <TextField
              typeMessage={fieldError?.username ? "error" : "success"}
              onInputChange={(v) => handleInput("username", v)}
              label="Nome do usuário"
              icon={<Email />}
              name="username"
              placeholder="jhonsmith"
              type="text"
            />
          </div>
          <div>
            <TextField
              typeMessage={fieldError?.password ? "error" : "success"}
              onInputChange={(v) => handleInput("password", v)}
              label="Senha de acesso"
              icon={<Password />}
              name="password"
              placeholder="xxxxxxxxxxxxxxx"
              type="password"
            />
          </div>
          <div className="flex items-center justify-end">
            <div className="w-36">
              <Button bg="blue" text="Continuar" fullWidth loading={loading} />
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center w-full pb-4">
        <Link href="#">
          <span className="text-[#1351B4] font-semibold">
            Termo de uso e aviso de privacidade
          </span>
        </Link>
      </div>
    </S.Container>
  );
};

export default Form;
