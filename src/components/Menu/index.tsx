"use client";

import Hamburguer from "../../utils/icons/Hamburguer";
import { ButtonProps } from "../Button";
import * as S from "./styles";

const Menu = ({ text }: Pick<ButtonProps, "text">) => {
  return (
    <S.Container>
      <S.ContainerIcon>
        <Hamburguer />
      </S.ContainerIcon>
      <S.ContainerText>
        <S.Span>{text}</S.Span>
      </S.ContainerText>
    </S.Container>
  );
};

export default Menu;
