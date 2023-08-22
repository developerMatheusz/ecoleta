import { useEffect, useState } from "react";
import Link from "next/link";
import Instagram from "../../utils/icons/Instagram";
import Facebook from "../../utils/icons/Facebook";
import Whatsapp from "../../utils/icons/Whatsapp";
import Information from "../../utils/icons/Information";
import UpArrowLight from "../../utils/icons/UpArrowLight";
import DownArrowLight from "../../utils/icons/DownArrowLight";
import DrawerMenu from "../DrawerMenu";
import sectionData from "./mock";
import * as S from "./styles";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [sectionStates, setSectionStates] = useState<boolean[]>([]);

  const toggleSection = (index: number) => {
    setSectionStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = !newState[index];
      return newState;
    });
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
    <S.Container>
      <S.ContainerImage>
        <S.Image
          src="/logo.png"
          alt="Logomarca da empresa GeoGIS Geotecnologia LTDA"
        />
      </S.ContainerImage>
      {isSmallScreen ? (
        <S.SectionContent isSmallScreen={isSmallScreen}>
          {sectionData.map((section, index) => (
            <S.GroupContent
              isSmallScreen={isSmallScreen}
              key={index}
              onClick={() => toggleSection(index)}
            >
              <S.ContentSmallScreen>
                <S.Span>{section.title}</S.Span>
                <S.GroupSmallScreen>
                  <S.ContainerArrow>
                    {sectionStates[index] ? (
                      <UpArrowLight />
                    ) : (
                      <DownArrowLight />
                    )}
                  </S.ContainerArrow>
                </S.GroupSmallScreen>
              </S.ContentSmallScreen>
              <DrawerMenu isOpen={sectionStates[index]}>
                {section.links.map((link, index) => (
                  <S.Text key={index}>
                    <Link href={link.url}>{link.text}</Link>
                  </S.Text>
                ))}
              </DrawerMenu>
            </S.GroupContent>
          ))}
        </S.SectionContent>
      ) : (
        <S.SectionContent>
          {sectionData.map((section, index) => (
            <S.GroupContent key={index}>
              <S.Span>{section.title}</S.Span>
              {section.links.map((link, index) => (
                <S.Text key={index}>
                  <Link href={link.url}>{link.text}</Link>
                </S.Text>
              ))}
            </S.GroupContent>
          ))}
        </S.SectionContent>
      )}
      <S.SectionFooter>
        <S.GroupItems>
          <S.Span>TÍTULO</S.Span>
          <S.GroupIcons>
            <S.ContainerIcon>
              <Link href="#">
                <Instagram />
              </Link>
            </S.ContainerIcon>
            <S.ContainerIcon>
              <Link href="#">
                <Facebook />
              </Link>
            </S.ContainerIcon>
            <S.ContainerIcon>
              <Link href="#">
                <Whatsapp />
              </Link>
            </S.ContainerIcon>
          </S.GroupIcons>
        </S.GroupItems>
        <Link href="#">
          <Information />
        </Link>
      </S.SectionFooter>
      <S.GroupFooter>
        <S.SectionCopyright>
          Todo o conteúdo deste site está publicado sob a licença{" "}
          <S.Paragraph>
            <Link href="https://creativecommons.org/" target="_blank">
              Creative Commons Atribuição-SemDerivações 3.0 Não Adaptada.
            </Link>
          </S.Paragraph>
        </S.SectionCopyright>
      </S.GroupFooter>
    </S.Container>
  );
};

export default Footer;
