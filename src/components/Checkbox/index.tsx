import { ItemMenuProps } from "../ItemMenu";
import * as S from "./styles";

type CheckboxProps = {
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
} & Pick<ItemMenuProps, "typeItem">;

const Checkbox = ({
  value,
  checked,
  onChange,
  disabled,
  typeItem
}: CheckboxProps) => {
  return (
    <div>
      <S.Input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        typeItem={typeItem}
      />
    </div>
  );
};

export default Checkbox;
