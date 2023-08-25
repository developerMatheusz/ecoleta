"use client";

import { MessageProps } from "../Message";
import { getTagMessageProperties } from "./utils";
import * as S from "./styles";

const TagMessage = ({ typeMessage }: Pick<MessageProps, "typeMessage">) => {
  const { typeIcon, messageFeedback } = getTagMessageProperties(typeMessage!);

  return (
    <S.Container typeMessage={typeMessage}>
      <S.ContainerIcon>{typeIcon}</S.ContainerIcon>
      <S.TextArea>{messageFeedback}</S.TextArea>
    </S.Container>
  );
};

export default TagMessage;
