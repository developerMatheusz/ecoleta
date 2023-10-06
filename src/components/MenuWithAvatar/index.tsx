"use client";

import React, { useState } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { HeaderProps } from "../Header";
import Link from "next/link";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import * as S from "./styles";

const MenuWithAvatar = ({ userSession }: HeaderProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <S.Container>
        <S.GroupItems onClick={toggleMenu}>
          <S.ContainerAvatar>
            <Avatar size="small" />
          </S.ContainerAvatar>
          <S.TextArea>
            <S.Text>Olá,</S.Text> {userSession?.user?.name?.split(" ")[0]}
          </S.TextArea>
          <S.ContainerIcon>
            <ArrowIosDownward size={20} />
          </S.ContainerIcon>
        </S.GroupItems>
        {menuVisible && (
          <S.ContainerMenu>
            <S.WelcomeUser>
              Olá, <strong>{userSession?.user.name?.toUpperCase()}</strong>
            </S.WelcomeUser>
            <S.ContainerSection>
              <S.GroupSection>
                <S.TextAreaSection>Minha conta</S.TextAreaSection>
                <S.Border />
              </S.GroupSection>
            </S.ContainerSection>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Dados pessoais</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Segurança da conta</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Privacidade</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <S.ContainerSection>
              <S.GroupSection>
                <S.TextAreaSection>Serviços</S.TextAreaSection>
                <S.Border />
              </S.GroupSection>
            </S.ContainerSection>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Carteira de documentos</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Baixar certidões</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Assinar documentos digitalmente</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Notificações</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <Link href="#">
              <S.GroupItemBody>
                <S.TextAreaBody>Perguntas frequentes</S.TextAreaBody>
              </S.GroupItemBody>
            </Link>
            <S.SectionButton>
              <S.GroupButton
                onClick={async () => {
                  await toast.promise(
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const success = true;
                        if (success) {
                          resolve("Sua sessão foi encerrada com sucesso");
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
                  signOut({ callbackUrl: "/auth/login" });
                }}
              >
                <Button bg="blue" size="small" border text="Sair da conta" />
              </S.GroupButton>
            </S.SectionButton>
          </S.ContainerMenu>
        )}
      </S.Container>
    </>
  );
};

export default MenuWithAvatar;
