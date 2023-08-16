import { TextFieldProps } from "../TextField";

const Icon = ({ disabled: isDisabled, icon }: TextFieldProps) => {
  return (
    <div
      className={`w-5 h-5 text-gray-400 ${
        isDisabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      {icon}
    </div>
  );
};

export default Icon;
