"use client";

import * as S from "./styles";

const SkeletonLoader = () => {
  return (
    <S.Container>
      <S.ColumnLoader size="large" />
      <S.ColumnLoader size="medium" />
      <S.ColumnLoader size="medium" />
      <S.ColumnLoader size="small" />
      <S.ColumnLoader size="small" />
      <S.ColumnLoader size="extraSmall" />
    </S.Container>
  );
};

export default SkeletonLoader;
