"use client";

import { TextFieldProps } from "../TextField";
import * as S from "./styles";

export type LabelProps = Pick<TextFieldProps, "name" | "disabled" | "label"> & {
  children?: React.ReactNode;
};

const Label = ({ name, disabled: isDisabled, label, children }: LabelProps) => {
  return (
    <S.Label htmlFor={name} disabled={isDisabled}>
      {label}
      {children}
    </S.Label>
  );
};

export default Label;
