import { SelectHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import DownArrow from "../../utils/icon/DownArrow";
import Search from "../../utils/icon/Search";
import UpArrow from "../../utils/icon/UpArrow";

type Option = {
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
  let typeMessageFeedback = "";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    if (selectAll) {
      setValues([]);
    } else {
      const allValues = options.map((option) => option.value);
      setValues(allValues);
    }
    setSelectAll(!selectAll);
  };

  switch (typeMessage) {
    case "warning":
      typeMessageFeedback = "border-amber-500";
      break;
    case "error":
      typeMessageFeedback = "border-red-600";
      break;
    case "info":
      typeMessageFeedback = "border-[#1351B4]";
      break;
    case "success":
      typeMessageFeedback = "border-green-600";
      break;
    default:
      typeMessageFeedback = "border-gray-300";
      break;
  }

  return (
    <div className="flex flex-col">
      <div>
        <span className="text-lg">Label</span>
      </div>
      <div className="flex flex-col justify-center bg-white drop-shadow-md rounded">
        <div
          className={`flex justify-between cursor-pointer px-4 py-2 border border-2 rounded ${typeMessageFeedback}`}
          onClick={toggleMenu}
        >
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 text-gray-400">
              <Search />
            </div>
            <div className="text-lg">Texto do item 01 + (1)</div>
          </div>
          {isOpen ? (
            <div className="flex items-center">
              <div className="w-4 h-4 text-[#1351B4]">
                <UpArrow />
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="w-4 h-4 text-[#1351B4]">
                <DownArrow />
              </div>
            </div>
          )}
        </div>
        {isOpen && (
          <div className="flex flex-col items-start justify-start">
            <div className="w-full">
              <label className="flex items-center p-4 cursor-pointer border-b border-gray-300">
                <div className="block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    disabled={disabled}
                    className={`flex items-center justify-center float-left -ml-[1.5rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-[0.25rem] border border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[1rem] before:w-[1rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-0 checked:bg-[#2670E8] checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[0.18rem] checked:after:w-[1rem] checked:after:rotate-0 checked:after:bg-white checked:after:content-[''] ${
                      disabled && "opacity-50 cursor-not-allowed"
                    }`}
                  />
                  <span className="text-lg font-light ml-2">
                    Selecionar todos
                  </span>
                </div>
              </label>
            </div>
            <div className="w-full">
              {options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 cursor-pointer ${
                    index < options.length - 1 ? "border-b border-gray-300" : ""
                  } ${disabled && "opacity-50 cursor-not-allowed"} ${
                    values.includes(option.value)
                      ? "bg-[#2670E8] text-white"
                      : ""
                  }`}
                >
                  <div className="block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className={`flex items-center justify-center float-left -ml-[1.5rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-[0.25rem] border border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[1rem] before:w-[1rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-gray-300 checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[1rem] checked:after:w-[0.575rem] checked:after:rotate-45 checked:pb-[0.3rem] checked:after:border-[0.225rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-[#2670E8] ${
                        disabled && "opacity-50 cursor-not-allowed"
                      }`}
                      type="checkbox"
                      value={option.value}
                      checked={values.includes(option.value)}
                      onChange={onChange}
                      disabled={disabled}
                    />
                  </div>
                  <span className="text-lg font-light ml-2">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectItem;
