import { InputHTMLAttributes, useState } from "react";
import { MessageProps } from "../Message";
import { getTextFieldInfo } from "../../utils/methods/getComponentInfo";
import Label from "../Label";
import Icon from "../Icon";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<MessageProps, "typeMessage">;

const TextField = ({
  onInputChange,
  label,
  initialValue,
  disabled: isDisabledProp,
  icon,
  name,
  placeholder,
  typeMessage,
  type
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const {
    tagMessage,
    colorMessage,
    disabled: isDisabledMessage
  } = getTextFieldInfo(typeMessage);

  const isDisabled = isDisabledProp || isDisabledMessage;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col ${
          isDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        {!!label && <Label name={name} disabled={isDisabled} label={label} />}
        <div
          className={`flex items-center p-2 border border-1 rounded bg-white ${colorMessage}`}
        >
          {!!icon && <Icon disabled={isDisabled} icon={icon} />}
          <input
            onChange={onChange}
            value={value}
            disabled={isDisabled}
            {...(label ? { id: name } : {})}
            className={`italic-placeholder bg-transparent text-base text-black focus:outline-none ml-2 resize-none ${
              isDisabled && "opacity-50 cursor-not-allowed"
            }`}
            placeholder={placeholder}
            type={type}
          />
        </div>
      </div>
      <div className="py-2 inline-flex">{tagMessage}</div>
    </div>
  );
};

export default TextField;
