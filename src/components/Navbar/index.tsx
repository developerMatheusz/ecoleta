"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MenuWithAvatar from "../MenuWithAvatar";
import Button from "../Button";
import Link from "next/link";
import Profile from "../../utils/icons/Profile";
import DottedMenu from "../../utils/icons/DottedMenu";
import { HeaderProps } from "../Header";
import { EarDeaf } from "@styled-icons/fa-solid/EarDeaf";
import { Contrast } from "@styled-icons/foundation/Contrast";
import * as S from "./styles";

const Navbar = ({ typeHeader = "normal" }: HeaderProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const { status } = useSession();

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
      {typeHeader === "normal" ? (
        <S.Navbar>
          <S.GroupItems>
            {isSmallScreen ? (
              <>
                <S.ContainerBtnContrast typeHeader={typeHeader}>
                  <Button
                    bg="white"
                    icon={<DottedMenu />}
                    minimal
                    size="small"
                    toggleMenu={toggleMenu}
                  />
                  {menuVisible && (
                    <S.ContainerMenuSmall>
                      <Link href="#">
                        <S.AreaLink>Órgãos do Governo</S.AreaLink>
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
                <Link href="#">
                  <S.AreaLink>Órgãos do Governo</S.AreaLink>
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
              </>
            )}
            <S.Divider />
            <S.ContainerBtnContrast typeHeader={typeHeader}>
              <Button bg="white" icon={<Contrast />} minimal size="small" />
            </S.ContainerBtnContrast>
            <S.ContainerBtnLogin>
              {status === "unauthenticated" ? (
                <Link href="/auth/login" target="_self">
                  <Button
                    bg="blue"
                    size="medium"
                    icon={<Profile />}
                    text="Entrar"
                  />
                </Link>
              ) : (
                <div>
                  <MenuWithAvatar />
                </div>
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
                minimal
                size="small"
              />
              <S.Span>Alto contraste</S.Span>
            </S.ContainerBtnContrast>
            <S.ContainerBtnContrast>
              <Button
                bg="white"
                icon={<EarDeaf size={16} />}
                minimal
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
