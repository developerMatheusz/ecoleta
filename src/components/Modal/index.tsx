"use client";

import Button from "../Button";
import * as S from "./styles";

type ModalProps = {
  title: string;
  text: string;
};

const Modal = ({ title, text }: ModalProps) => {
  return (
    <S.Container>
      <S.SectionHead>
        <S.Title>{title}</S.Title>
      </S.SectionHead>
      <S.SectionContent>
        <S.Text>{text}</S.Text>
      </S.SectionContent>
      <S.GroupButtons>
        <S.ContainerButton>
          <Button bg="blue" text="Label" fullwidth="true" border />
        </S.ContainerButton>
        <S.ContainerButton>
          <Button bg="blue" text="Label" fullwidth="true" />
        </S.ContainerButton>
      </S.GroupButtons>
    </S.Container>
  );
};

export default Modal;
