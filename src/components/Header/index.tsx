import Menu from "../Menu";
import Navbar from "../Navbar";
import Searchbox from "../Searchbox";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.GroupItems>
        <S.SectionHeader>
          <S.Image
            src="/logo.png"
            alt="Logomarca da empresa GeoGIS Geotecnologia LTDA."
          />
        </S.SectionHeader>
        <Navbar />
      </S.GroupItems>
      <S.GroupItems>
        <Menu text="Serviços e informações do Brasil" />
      </S.GroupItems>
      <Searchbox placeholder="O que você procura?" />
    </S.Container>
  );
};

export default Header;
