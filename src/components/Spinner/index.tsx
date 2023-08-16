import classNames from "classnames";
import { ButtonProps } from "../Button";

const Spinner = ({ bg }: Pick<ButtonProps, "bg">) => {
  return (
    <div
      className={classNames(
        "inline-block w-5 h-5 animate-spin rounded-full border-2 border-solid",
        bg === "white" ? "border-[#1351B4]" : "border-white",
        "border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      )}
      role="status"
    />
  );
};

export default Spinner;
