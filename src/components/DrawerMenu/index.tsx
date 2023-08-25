"use client";

import * as S from "./styles";

type DrawerMenuProps = {
  isOpen?: boolean;
  children: React.ReactNode;
};

const DrawerMenu = ({ isOpen, children }: DrawerMenuProps) => {
  return <S.Container isOpen={isOpen}>{children}</S.Container>;
};

export default DrawerMenu;
