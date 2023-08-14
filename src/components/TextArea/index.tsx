import { TextareaHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import TagMessage from "../TagMessage";

type TextAreaProps = {
  onTextareaChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  Pick<MessageProps, "typeMessage">;

const TextArea = ({
  onTextareaChange,
  label,
  initialValue,
  disabled,
  name,
  placeholder,
  typeMessage
}: TextAreaProps) => {
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

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onTextareaChange && onTextareaChange(newValue);
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
      <textarea
        onChange={onChange}
        value={value}
        disabled={disabled}
        {...(label ? { id: name } : {})}
        className={`italic-placeholder rounded text-base text-black p-2 focus:outline-none resize-none h-32 border border-1 ${colorMessage} ${
          disabled && "opacity-50 cursor-not-allowed"
        }`}
        placeholder={placeholder}
      />
      <div className="py-2 inline-flex">{tagMessage}</div>
    </div>
  );
};

export default TextArea;
