import { useEffect, useState } from "react";
import Button from "../Button";
import Link from "next/link";
import Contrast from "../../utils/icons/Contrast";
import Profile from "../../utils/icons/Profile";
import DottedMenu from "../../utils/icons/DottedMenu";
import * as S from "./styles";

const Navbar = () => {
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
    <S.Navbar>
      <S.GroupItems>
        {isSmallScreen ? (
          <>
            <S.ContainerBtnContrast>
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
                    <S.AreaLink>Link de acesso 1</S.AreaLink>
                  </Link>
                  <Link href="#">
                    <S.AreaLink>Link de acesso 2</S.AreaLink>
                  </Link>
                  <Link href="#">
                    <S.AreaLink>Link de acesso 3</S.AreaLink>
                  </Link>
                  <Link href="#">
                    <S.AreaLink>Link de acesso 4</S.AreaLink>
                  </Link>
                </S.ContainerMenuSmall>
              )}
            </S.ContainerBtnContrast>
          </>
        ) : (
          <>
            <Link href="#">
              <S.AreaLink>Link de acesso 1</S.AreaLink>
            </Link>
            <Link href="#">
              <S.AreaLink>Link de acesso 2</S.AreaLink>
            </Link>
            <Link href="#">
              <S.AreaLink>Link de acesso 3</S.AreaLink>
            </Link>
            <Link href="#">
              <S.AreaLink>Link de acesso 4</S.AreaLink>
            </Link>
          </>
        )}
        <S.Divider />
        <S.ContainerBtnContrast>
          <Button bg="white" icon={<Contrast />} minimal size="small" />
        </S.ContainerBtnContrast>
        <S.ContainerBtnLogin>
          <Button bg="blue" size="medium" icon={<Profile />} text="Entrar" />
        </S.ContainerBtnLogin>
      </S.GroupItems>
    </S.Navbar>
  );
};

export default Navbar;
