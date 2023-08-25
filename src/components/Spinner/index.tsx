"use client";

import { ButtonProps } from "../Button";
import * as S from "./styles";

const Spinner = ({ bg }: Pick<ButtonProps, "bg">) => {
  return <S.Container bg={bg} role="status" />;
};

export default Spinner;
