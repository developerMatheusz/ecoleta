"use client";

import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Search from "../../utils/icons/Search";
import { HeaderProps } from "../Header";
import * as S from "./styles";

export type SearchboxProps = {
  onInputChange?: (value: string) => void;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<HeaderProps, "searchfieldposition">;

const Searchbox = ({
  onInputChange,
  initialValue,
  placeholder,
  searchfieldposition
}: SearchboxProps) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState("false");
  const divRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  const onBlur = () => {
    setIsFocused("false");
  };

  const focusInput = () => {
    setIsFocused("true");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsFocused("false");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isFocused && inputRef.current && initialValue) {
      inputRef.current.focus();
    }
  }, [isFocused, initialValue]);

  return (
    <S.Container searchfieldposition={searchfieldposition}>
      <S.GroupItems
        ref={divRef}
        isfocused={isFocused}
        searchfieldposition={searchfieldposition}
        onClick={() => setIsFocused("true")}
      >
        <S.Input
          ref={inputRef}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type="text"
        />
        <S.SectionIcon>
          <S.ContainerIcon onClick={focusInput}>
            <Search color="blue" />
          </S.ContainerIcon>
        </S.SectionIcon>
      </S.GroupItems>
    </S.Container>
  );
};

export default Searchbox;
