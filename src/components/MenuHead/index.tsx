"use client";

import DownArrow from "../../utils/icons/DownArrow";
import Search from "../../utils/icons/Search";
import UpArrow from "../../utils/icons/UpArrow";
import * as S from "./styles";

export type MenuHeadProps = {
  typeMessageFeedback: string;
  toggleMenu: () => void;
  isOpen: boolean;
  disabled?: boolean;
};

const MenuHead = ({
  typeMessageFeedback,
  toggleMenu,
  isOpen,
  disabled
}: MenuHeadProps) => {
  return (
    <S.Container
      typeMessageFeedback={typeMessageFeedback}
      disabled={disabled}
      onClick={toggleMenu}
    >
      <S.SectionHead
        typeMessageFeedback={typeMessageFeedback}
        disabled={disabled}
      >
        <S.ContainerIcon size="large">
          <Search />
        </S.ContainerIcon>
        <S.Span>Texto do item 01 + (1)</S.Span>
      </S.SectionHead>
      {isOpen ? (
        <S.SectionHead
          typeMessageFeedback={typeMessageFeedback}
          disabled={disabled}
        >
          <S.ContainerIcon isBlue size="normal">
            <UpArrow />
          </S.ContainerIcon>
        </S.SectionHead>
      ) : (
        <S.SectionHead
          typeMessageFeedback={typeMessageFeedback}
          disabled={disabled}
        >
          <S.ContainerIcon isBlue size="normal">
            <DownArrow />
          </S.ContainerIcon>
        </S.SectionHead>
      )}
    </S.Container>
  );
};

export default MenuHead;
