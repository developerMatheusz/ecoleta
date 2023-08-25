import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Form from "../../components/Form";
import * as S from "./styles";

const LoginTemplate = () => {
  return (
    <S.Container>
      <Header typeHeader="login" />
      <S.GroupItems>
        <S.ContainerBackground>
          <S.AreaBackground>
            <Image
              src="/background.jpg"
              alt="Imagem de fundo sobre trabalho da empresa GeoGIS Geotecnologia LTDA."
              width={1000}
              height={1000}
            />
          </S.AreaBackground>
        </S.ContainerBackground>
        <S.ContainerForm>
          <S.AreaForm>
            <Form />
          </S.AreaForm>
        </S.ContainerForm>
      </S.GroupItems>
    </S.Container>
  );
};

export default LoginTemplate;
