"use client";

import Link from "next/link";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Searchbox from "../Searchbox";
import React from "react";
import * as S from "./styles";

type User = {
  user: {
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
  };
};

export type HeaderProps = {
  typeheader?: "normal" | "login";
  searchfieldposition?: "center" | "right";
  userSession?: User;
};

const Header = ({
  typeheader = "normal",
  searchfieldposition = "center",
  userSession
}: HeaderProps) => {
  return (
    <>
      {typeheader === "normal" ? (
        <S.Container typeheader={typeheader}>
          <S.GroupItems>
            <S.SectionHeader>
              <Link href="/">
                <S.Image
                  src="/logo.png"
                  alt="Logomarca da empresa GeoGIS Geotecnologia LTDA."
                />
              </Link>
            </S.SectionHeader>
            <Navbar typeheader="normal" userSession={userSession} />
          </S.GroupItems>
          {searchfieldposition === "center" ? (
            <>
              <S.GroupItems>
                <Menu text="Serviços e informações do Brasil" />
              </S.GroupItems>
              <Searchbox placeholder="O que você procura?" />
            </>
          ) : (
            <S.GroupItems>
              <Menu text="Serviços e informações do Brasil" />
              <Searchbox
                placeholder="O que você procura?"
                searchfieldposition={searchfieldposition}
              />
            </S.GroupItems>
          )}
        </S.Container>
      ) : (
        <S.Container>
          <S.GroupItems>
            <S.SectionHeader>
              <Link href="/">
                <S.Image
                  src="/logo.png"
                  alt="Logomarca da empresa GeoGIS Geotecnologia LTDA."
                />
              </Link>
            </S.SectionHeader>
            <Navbar typeheader="login" userSession={userSession} />
          </S.GroupItems>
        </S.Container>
      )}
    </>
  );
};

export default Header;
