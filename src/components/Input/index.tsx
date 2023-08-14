import { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import TagMessage from "../TagMessage";

type InputProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<MessageProps, "typeMessage">;

const Input = ({
  onInputChange,
  label,
  initialValue,
  disabled,
  icon,
  name,
  placeholder,
  typeMessage,
  type
}: InputProps) => {
  const [value, setValue] = useState(initialValue);
  let tagMessage = null;
  let colorMessage = "";

  switch (typeMessage) {
    case "warning":
      tagMessage = <TagMessage typeMessage="warning" />;
      colorMessage = "border-amber-400";
      disabled = true;
      break;
    case "error":
      tagMessage = <TagMessage typeMessage="error" />;
      colorMessage = "border-red-600";
      break;
    case "info":
      tagMessage = <TagMessage typeMessage="info" />;
      colorMessage = "border-blue-600";
      break;
    case "success":
      tagMessage = <TagMessage typeMessage="success" />;
      colorMessage = "border-green-600";
      break;
    default:
      tagMessage = "";
      colorMessage = "border-gray-400";
      break;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <div className="flex flex-col">
      {!!label && (
        <label
          htmlFor={name}
          className={`text-lg ${disabled && "opacity-50 cursor-not-allowed"}`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center p-2 border border-1 rounded bg-white ${colorMessage}`}
      >
        {!!icon && (
          <div
            className={`w-5 h-5 text-gray-400 ${
              disabled && "opacity-50 cursor-not-allowed"
            }`}
          >
            {icon}
          </div>
        )}
        <input
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          className={`italic-placeholder bg-transparent text-base text-black focus:outline-none ml-2 resize-none ${
            disabled && "opacity-50 cursor-not-allowed"
          }`}
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className="py-2 inline-flex">{tagMessage}</div>
    </div>
  );
};

export default Input;
