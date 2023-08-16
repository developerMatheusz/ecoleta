import { TextFieldProps } from "../TextField";

type LabelProps = Pick<TextFieldProps, "name" | "disabled" | "label"> & {
  children?: React.ReactNode;
  classNames?: string;
};

const Label = ({
  name,
  disabled: isDisabled,
  label,
  children,
  classNames
}: LabelProps) => {
  const labelClass = `w-full text-lg ${
    isDisabled ? "opacity-50 cursor-not-allowed" : ""
  } ${classNames || ""}`;

  return (
    <label htmlFor={name} className={labelClass}>
      {label}
      {children}
    </label>
  );
};

export default Label;
