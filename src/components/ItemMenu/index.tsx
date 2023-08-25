"use client";

import Checkbox from "../Checkbox";
import { Option } from "../SelectItem";
import * as S from "./styles";

export type ItemMenuProps = {
  selectAll?: boolean;
  handleSelectAll?: () => void;
  disabled?: boolean;
  message?: string;
  typeItem: "selectMultiples" | "selectOne";
  option?: Option;
  values?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ItemMenu = ({
  selectAll,
  handleSelectAll,
  disabled,
  message,
  typeItem = "selectOne",
  option,
  values,
  onChange
}: ItemMenuProps) => {
  return (
    <S.Container>
      {typeItem === "selectMultiples" ? (
        <S.SectionInput>
          <Checkbox
            checked={selectAll!}
            onChange={handleSelectAll}
            disabled={disabled}
            typeItem="selectMultiples"
          />
          <S.TextArea>{message}</S.TextArea>
        </S.SectionInput>
      ) : (
        <S.SectionInput>
          <Checkbox
            checked={
              values &&
              option?.value !== undefined &&
              values.includes(option.value)
            }
            value={option?.value}
            onChange={onChange}
            disabled={disabled}
            typeItem="selectOne"
          />
          <S.TextArea>{option!.label}</S.TextArea>
        </S.SectionInput>
      )}
    </S.Container>
  );
};

export default ItemMenu;
