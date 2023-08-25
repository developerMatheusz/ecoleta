"use client";

import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Search from "../../utils/icons/Search";
import * as S from "./styles";

export type SearchboxProps = {
  onInputChange?: (value: string) => void;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Searchbox = ({
  onInputChange,
  initialValue,
  placeholder
}: SearchboxProps) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const divRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <S.Container>
      <S.GroupItems
        ref={divRef}
        isFocused={isFocused}
        onClick={() => setIsFocused(true)}
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
          <S.ContainerIcon>
            <Search color="blue" />
          </S.ContainerIcon>
        </S.SectionIcon>
      </S.GroupItems>
    </S.Container>
  );
};

export default Searchbox;
