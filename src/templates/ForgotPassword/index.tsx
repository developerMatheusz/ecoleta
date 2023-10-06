import React from "react";
import Header from "../../components/Header";
import FormForgotPassword from "../../components/FormForgotPassword";
import * as S from "../Password/styles";

const ForgotPasswordTemplate = () => {
  return (
    <S.Container>
      <Header typeheader="login" />
      <S.GroupItems>
        <S.ContainerBackground>
          <S.Image
            src="/new_password.svg"
            alt="Imagem de fundo para cadastro de senha."
          />
          <S.TextArea>
            Cadastre sua senha para acessar o login único do ecoleta.
          </S.TextArea>
        </S.ContainerBackground>
        <S.ContainerForm>
          <S.AreaForm>
            <FormForgotPassword />
          </S.AreaForm>
        </S.ContainerForm>
      </S.GroupItems>
    </S.Container>
  );
};

export default ForgotPasswordTemplate;
