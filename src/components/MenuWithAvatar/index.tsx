"use client";

import React, { useState } from "react";
import Avatar from "../Avatar";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import { HeaderProps } from "../Header";
import * as S from "./styles";

const MenuWithAvatar = ({ userSession }: HeaderProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <S.Container onClick={toggleMenu}>
        <S.GroupItems>
          <S.ContainerAvatar>
            <Avatar size="small" />
          </S.ContainerAvatar>
          <S.TextArea>
            <S.Text>Olá,</S.Text> {userSession?.user?.name?.split(" ")[0]}
          </S.TextArea>
          <S.ContainerIcon>
            <ArrowIosDownward size={20} />
          </S.ContainerIcon>
        </S.GroupItems>
      </S.Container>
      {menuVisible && <div>Menu aberto</div>}
    </>
  );
};

export default MenuWithAvatar;
