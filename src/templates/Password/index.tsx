import React from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import * as S from "./styles";

const PasswordTemplate = () => {
  return (
    <S.Container>
      <Header typeheader="login" />
      <S.GroupItems>
        <S.ContainerBackground>
          <S.Image
            src="/password.png"
            alt="Imagem de fundo para cadastro de senha."
          />
          <S.TextArea>
            Digite sua senha para acessar o login único do ecoleta.
          </S.TextArea>
        </S.ContainerBackground>
        <S.ContainerForm>
          <S.AreaForm>
            <Form type="password" />
          </S.AreaForm>
        </S.ContainerForm>
      </S.GroupItems>
    </S.Container>
  );
};

export default PasswordTemplate;
