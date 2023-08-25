"use client";

import Link from "next/link";
import Button from "../Button";
import TextField from "../TextField";
import { Email } from "@styled-icons/material-outlined/Email";
import { Password } from "@styled-icons/fluentui-system-regular/Password";

const Form = () => {
  return (
    <div>
      <form className="px-4 py-8">
        <h1 className="text-lg font-bold">
          Identifique-se no ecoletasocial.com.br:
        </h1>
        <div className="mt-8">
          <div>
            <TextField
              label="Email do usuário"
              icon={<Email />}
              name="email"
              placeholder="example@geogis.com.br"
              type="text"
            />
          </div>
          <div>
            <TextField
              label="Senha de acesso"
              icon={<Password />}
              name="password"
              placeholder="xxxxxxxxxxxxxxx"
              type="password"
            />
          </div>
          <div className="flex items-center justify-end">
            <div className="w-36">
              <Button bg="blue" text="Continuar" fullWidth />
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
    </div>
  );
};

export default Form;
