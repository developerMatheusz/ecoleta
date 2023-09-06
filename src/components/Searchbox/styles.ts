import tw from "tailwind-styled-components";
import { SearchboxProps } from ".";

export const Container = tw.div<Pick<SearchboxProps, "searchFieldPosition">>`
  p-4 text-base rounded
  ${(props) =>
    props.searchFieldPosition !== "right" ? "shadow-lg bg-gray-200/25" : "w-96"}
`;

type GroupItemsProps = {
  isFocused?: boolean;
} & Pick<SearchboxProps, "searchFieldPosition">;

export const GroupItems = tw.div<GroupItemsProps>`
  flex items-center justify-between border border-gray-300 rounded
  ${(props) => (props.isFocused ? "border-amber-500" : "border-gray-400")}
  ${(props) =>
    props.searchFieldPosition === "right" ? "bg-gray-300" : "bg-white"}
`;

export const Input = tw.input`
  italic-placeholder bg-transparent text-lg text-black pl-8 py-2 w-full focus:outline-none font-light placeholder-black
`;

export const SectionIcon = tw.div`
  p-2
`;

export const ContainerIcon = tw.div`
  hover:bg-[#1351B4]/25 rounded-full p-2 cursor-pointer w-10 h-10
`;
