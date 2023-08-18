import tw from "tailwind-styled-components";
import { ItemMenuProps } from "../ItemMenu";

export const Input = tw.input<Pick<ItemMenuProps, "typeItem" | "disabled">>`
  cursor-pointer
  ${(props) => props.disabled && "opacity-50 cursor-not-allowed"}
  ${(props) =>
    props.typeItem === "selectMultiples"
      ? "flex items-center justify-center float-left -ml-[1.5rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-[0.25rem] border border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[1rem] before:w-[1rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-0 checked:bg-[#2670E8] checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[0.18rem] checked:after:w-[1rem] checked:after:rotate-0 checked:after:bg-white checked:after:content-['']"
      : "flex items-center justify-center float-left -ml-[1.5rem] h-[1.5rem] w-[1.5rem] appearance-none rounded-[0.25rem] border border-gray-300 outline-none before:pointer-events-none before:absolute before:h-[1rem] before:w-[1rem] before:scale-0 before:rounded-full before:bg-white before:opacity-0 before:content-[''] checked:border-gray-300 checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:block checked:after:h-[1rem] checked:after:w-[0.575rem] checked:after:rotate-45 checked:pb-[0.3rem] checked:after:border-[0.225rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-[#2670E8]"}
`;
