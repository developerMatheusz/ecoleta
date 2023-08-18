import Link from "next/link";
import * as S from "./styles";

const SkipLink = () => {
  return (
    <S.Container>
      <S.Section>
        <Link href="#main">Ir para o conteúdo</Link>
        <S.Span>1</S.Span>
      </S.Section>
      <S.Section>
        <Link href="#navigation">Ir para navegação</Link>
        <S.Span>2</S.Span>
      </S.Section>
      <S.Section>
        <Link href="#search">Ir para busca</Link>
        <S.Span>3</S.Span>
      </S.Section>
      <S.Section>
        <Link href="#map">Ir para o mapa do site</Link>
        <S.Span>4</S.Span>
      </S.Section>
    </S.Container>
  );
};

export default SkipLink;
