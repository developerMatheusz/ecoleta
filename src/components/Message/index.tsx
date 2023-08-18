import React, { useState } from "react";
import Close from "../../utils/icons/Close";
import { getMessageProperties } from "./utils";
import * as S from "./styles";

export type MessageProps = {
  typeMessage?: "success" | "warning" | "error" | "info";
};

const Message = ({ typeMessage }: MessageProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  const { typeIcon, messageFeedback } = getMessageProperties(typeMessage!);

  return (
    <>
      {isVisible && (
        <S.Container typeMessage={typeMessage}>
          <S.SectionContent>
            <S.ContainerIcon size="large">{typeIcon}</S.ContainerIcon>
            <S.Span>{messageFeedback}</S.Span>
          </S.SectionContent>
          <S.SectionIcon>
            <S.ContainerIcon size="normal" onClick={handleClick}>
              <Close />
            </S.ContainerIcon>
          </S.SectionIcon>
        </S.Container>
      )}
    </>
  );
};

export default Message;
