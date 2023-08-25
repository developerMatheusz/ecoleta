"use client";

import Link from "next/link";
import Button from "../Button";
import SkeletonLoader from "../SkeletonLoader";
import * as S from "./styles";

type CookieBarProps = {
  text: string;
  loading?: boolean;
};

const CookieBar = ({ text, loading = false }: CookieBarProps) => {
  return (
    <S.Container className="w-full bg-white px-6 py-4">
      <S.SectionText>
        {loading ? <SkeletonLoader /> : <>{text}</>}
      </S.SectionText>
      <S.SectionButton>
        <Link href="/cookie-information">
          <Button size="medium" text="Definir cookies" bg="blue" onlyBorder />
        </Link>
        <Button size="medium" text="Aceitar" bg="blue" />
      </S.SectionButton>
    </S.Container>
  );
};

export default CookieBar;
