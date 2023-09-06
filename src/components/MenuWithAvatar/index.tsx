"use client";

import React, { useState } from "react";
import Avatar from "../Avatar";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";
import * as S from "./styles";
import { useSession } from "next-auth/react";

const MenuWithAvatar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { data: session } = useSession();

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
            <S.Text>Olá,</S.Text> {session?.user?.name?.split(" ")[0]}
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
