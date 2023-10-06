"use client";

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Spinner from "../Spinner";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  size?: ButtonSize;
  bg?: "blue" | "white";
  fullwidth?: string;
  minimal?: string;
  icon?: JSX.Element;
  text?: string;
  disabled?: boolean;
  loading?: string;
  border?: boolean;
  toggleMenu?: () => void;
  type?: string;
} & ButtonTypes;

const Button = ({
  size = "medium",
  bg = "white",
  fullwidth = "false",
  minimal = "false",
  icon,
  text,
  disabled = false,
  loading = "false",
  border,
  toggleMenu,
  type
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      loading={loading}
      border={border}
      fullwidth={fullwidth}
      disabled={disabled}
      size={size}
      bg={bg}
      minimal={minimal}
      onClick={toggleMenu}
    >
      {loading === "true" ? (
        <Spinner bg={bg} />
      ) : (
        <>
          {icon && <S.Icon>{icon}</S.Icon>}
          <S.TextArea icon={icon} minimal={minimal}>
            {text}
          </S.TextArea>
        </>
      )}
    </S.Button>
  );
};

export default Button;
