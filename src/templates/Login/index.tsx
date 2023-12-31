import React from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import * as S from "./styles";

const LoginTemplate = () => {
  return (
    <S.Container>
      <Header typeheader="login" />
      <S.GroupItems>
        <S.ContainerBackground>
          <S.Image
            src="/background.jpg"
            alt="Imagem de fundo sobre trabalho da empresa GeoGIS Geotecnologia LTDA."
          />
        </S.ContainerBackground>
        <S.ContainerForm>
          <S.AreaForm>
            <Form type="login" />
          </S.AreaForm>
        </S.ContainerForm>
      </S.GroupItems>
    </S.Container>
  );
};

export default LoginTemplate;
