import { getItemMenuInfo } from "../../utils/methods/getComponentInfo";
import { Option } from "../SelectItem";

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
    <div className={`block min-h-[1.5rem] pl-[1.5rem] cursor-pointer`}>
      {typeItem === "selectMultiples" ? (
        <div>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            disabled={disabled}
            className={getItemMenuInfo({ typeItem, disabled })}
          />
          <span className="text-lg font-light ml-2">{message}</span>
        </div>
      ) : (
        <div>
          <input
            className={getItemMenuInfo({ typeItem, disabled })}
            type="checkbox"
            value={option!.value}
            checked={values && values.includes(option!.value)}
            onChange={onChange}
            disabled={disabled}
          />
          <span className="text-lg font-light ml-2">{option!.label}</span>
        </div>
      )}
    </div>
  );
};

export default ItemMenu;
