"use client";

import Link from "next/link";
import Menu from "../Menu";
import Navbar from "../Navbar";
import Searchbox from "../Searchbox";
import * as S from "./styles";

export type HeaderProps = {
  typeHeader?: "normal" | "login";
};

const Header = ({ typeHeader = "normal" }: HeaderProps) => {
  return (
    <>
      {typeHeader === "normal" ? (
        <S.Container typeHeader={typeHeader}>
          <S.GroupItems>
            <S.SectionHeader>
              <Link href="/">
                <S.Image
                  src="/logo.png"
                  alt="Logomarca da empresa GeoGIS Geotecnologia LTDA."
                />
              </Link>
            </S.SectionHeader>
            <Navbar typeHeader="normal" />
          </S.GroupItems>
          <S.GroupItems>
            <Menu text="Serviços e informações do Brasil" />
          </S.GroupItems>
          <Searchbox placeholder="O que você procura?" />
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
            <Navbar typeHeader="login" />
          </S.GroupItems>
        </S.Container>
      )}
    </>
  );
};

export default Header;
