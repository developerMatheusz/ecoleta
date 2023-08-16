import { TextareaHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import { getTextAreaInfo } from "../../utils/methods/getComponentInfo";
import Label from "../Label";

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

  const { tagMessage, colorMessage, disableTextarea } =
    getTextAreaInfo(typeMessage);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onTextareaChange && onTextareaChange(newValue);
  };

  return (
    <div className="flex flex-col">
      {!!label && (
        <Label name={name} disabled={disabled || disableTextarea}>
          {label}
        </Label>
      )}
      <textarea
        onChange={onChange}
        value={value}
        disabled={disabled || disableTextarea}
        {...(label ? { id: name } : {})}
        className={`italic-placeholder rounded text-base text-black p-2 focus:outline-none resize-none h-32 border border-1 ${colorMessage} ${
          (disabled || disableTextarea) && "opacity-50 cursor-not-allowed"
        }`}
        placeholder={placeholder}
      />
      <div className="py-2 inline-flex">{tagMessage}</div>
    </div>
  );
};

export default TextArea;
