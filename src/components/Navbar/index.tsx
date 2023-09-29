"use client";

import React, { useEffect, useState } from "react";
import MenuWithAvatar from "../MenuWithAvatar";
import Button from "../Button";
import Link from "next/link";
import Profile from "../../utils/icons/Profile";
import DottedMenu from "../../utils/icons/DottedMenu";
import { HeaderProps } from "../Header";
import { EarDeaf } from "@styled-icons/fa-solid/EarDeaf";
import { Contrast } from "@styled-icons/foundation/Contrast";
import * as S from "./styles";

const Navbar = ({ typeheader = "normal", userSession }: HeaderProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {typeheader === "normal" ? (
        <S.Navbar>
          <S.GroupItems>
            {isSmallScreen ? (
              <>
                <S.ContainerBtnContrast typeheader={typeheader}>
                  <Button
                    bg="white"
                    icon={<DottedMenu />}
                    minimal="true"
                    size="small"
                    toggleMenu={toggleMenu}
                  />
                  {menuVisible && (
                    <S.ContainerMenuSmall>
                      <Link href="/dashboard">
                        <S.AreaLink>Painel</S.AreaLink>
                      </Link>
                      <Link href="/map">
                        <S.AreaLink>Mapa</S.AreaLink>
                      </Link>
                      <Link href="#">
                        <S.AreaLink>Legislação</S.AreaLink>
                      </Link>
                      <Link href="#">
                        <S.AreaLink>Acessibilidade</S.AreaLink>
                      </Link>
                    </S.ContainerMenuSmall>
                  )}
                </S.ContainerBtnContrast>
              </>
            ) : (
              <>
                <Link href="/dashboard">
                  <S.AreaLink>Painel</S.AreaLink>
                </Link>
                <Link href="/map">
                  <S.AreaLink>Mapa</S.AreaLink>
                </Link>
                <Link href="/personal-registration">
                  <S.AreaLink>Cadastre-se</S.AreaLink>
                </Link>
                <Link href="#">
                  <S.AreaLink>Acessibilidade</S.AreaLink>
                </Link>
              </>
            )}
            <S.Divider />
            <S.ContainerBtnContrast typeheader={typeheader}>
              <Button
                bg="white"
                icon={<Contrast />}
                minimal="true"
                size="small"
              />
            </S.ContainerBtnContrast>
            <S.ContainerBtnLogin>
              {!!userSession?.user?.name ? (
                <div>
                  <MenuWithAvatar userSession={userSession} />
                </div>
              ) : (
                <Link href="/auth/login" target="_self">
                  <Button
                    bg="blue"
                    size="medium"
                    icon={<Profile />}
                    text="Entrar"
                  />
                </Link>
              )}
            </S.ContainerBtnLogin>
          </S.GroupItems>
        </S.Navbar>
      ) : (
        <S.Navbar>
          <S.GroupItems>
            <S.ContainerBtnContrast>
              <Button
                bg="white"
                icon={<Contrast size={20} />}
                minimal="true"
                size="small"
              />
              <S.Span>Alto contraste</S.Span>
            </S.ContainerBtnContrast>
            <S.ContainerBtnContrast>
              <Button
                bg="white"
                icon={<EarDeaf size={16} />}
                minimal="true"
                size="small"
              />
              <S.Span>VLibras</S.Span>
            </S.ContainerBtnContrast>
          </S.GroupItems>
        </S.Navbar>
      )}
    </>
  );
};

export default Navbar;
