import { SelectHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import Label from "../Label";
import MenuHead from "../MenuHead";
import ItemMenu from "../ItemMenu";

export type Option = {
  value: string;
  label: string;
};

type SelectProps = {
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
    <div className="flex flex-col">
      <div>
        <Label
          label="Label"
          disabled={
            disabled || typeMessageFeedback === "border-amber-500"
              ? true
              : false
          }
        />
      </div>
      <div
        className={`flex flex-col justify-center bg-white drop-shadow-md rounded ${
          disabled && "opacity-50 cursor-not-allowed"
        }`}
      >
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
          <div className="flex flex-col items-start justify-start">
            <div className="w-full flex items-center p-4 cursor-pointer border-b border-gray-300">
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
            </div>
            {options.map((option, index) => (
              <Label
                key={index}
                classNames={`flex items-center p-4 cursor-pointer ${
                  index < options.length - 1 ? "border-b border-gray-300" : ""
                } ${
                  values.includes(option.value) ? "bg-[#2670E8] text-white" : ""
                }`}
              >
                <ItemMenu
                  option={option}
                  onChange={onChange}
                  disabled={disabled}
                  typeItem="selectOne"
                  values={values}
                />
              </Label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectItem;
