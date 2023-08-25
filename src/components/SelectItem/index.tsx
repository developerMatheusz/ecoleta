"use client";

import { SelectHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import Label from "../Label";
import MenuHead from "../MenuHead";
import ItemMenu from "../ItemMenu";
import * as S from "./styles";

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  onInputChange?: (value: string | string[]) => void;
  disabled?: boolean;
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement> &
  Pick<MessageProps, "typeMessage">;

const SelectItem = ({
  onInputChange,
  disabled,
  options,
  typeMessage
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const typeMessageFeedback =
    {
      warning: "border-amber-500",
      error: "border-red-600",
      info: "border-[#1351B4]",
      success: "border-green-600"
    }[typeMessage!] || "border-gray-300";

  const toggleMenu = () => {
    if (disabled || typeMessageFeedback === "border-amber-500") {
      return;
    } else {
      setIsOpen(!isOpen);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const updatedValues = values.includes(selectedValue)
      ? values.filter((value) => value !== selectedValue)
      : [...values, selectedValue];

    setValues(updatedValues);

    !!onInputChange && onInputChange(updatedValues);
  };

  const handleSelectAll = () => {
    const allValues = options.map((option) => option.value);
    setValues(!selectAll ? allValues : []);
    setSelectAll(!selectAll);

    !!onInputChange && onInputChange(!selectAll ? allValues : []);
  };

  return (
    <S.Container>
      <Label
        label="Label"
        disabled={
          disabled || typeMessageFeedback === "border-amber-500" ? true : false
        }
      />
      <S.GroupItems>
        <MenuHead
          typeMessageFeedback={typeMessageFeedback}
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          disabled={
            disabled || typeMessageFeedback === "border-amber-500"
              ? true
              : false
          }
        />
        {isOpen && (
          <S.SectionBody>
            <S.SelectAll>
              <Label>
                <ItemMenu
                  selectAll={selectAll}
                  handleSelectAll={handleSelectAll}
                  disabled={
                    disabled || typeMessageFeedback === "border-amber-500"
                      ? true
                      : false
                  }
                  message="Selecionar todos"
                  typeItem="selectMultiples"
                />
              </Label>
            </S.SelectAll>
            <S.Divider />
            {options.map((option, index) => (
              <S.SelectAll
                key={index}
                borderBottom={index < options.length - 1}
                value={values.includes(option.value)}
              >
                <Label>
                  <ItemMenu
                    option={option}
                    onChange={onChange}
                    disabled={
                      disabled || typeMessageFeedback === "border-amber-500"
                        ? true
                        : false
                    }
                    typeItem="selectOne"
                    values={values}
                  />
                </Label>
              </S.SelectAll>
            ))}
          </S.SectionBody>
        )}
      </S.GroupItems>
    </S.Container>
  );
};

export default SelectItem;
