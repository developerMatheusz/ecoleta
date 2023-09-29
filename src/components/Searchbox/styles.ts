import tw from "tailwind-styled-components";
import { SearchboxProps } from ".";

export const Container = tw.div<Pick<SearchboxProps, "searchfieldposition">>`
  p-4 text-base rounded
  ${(props) =>
    props.searchfieldposition !== "right" ? "shadow-lg bg-gray-200/25" : "w-96"}
`;

type GroupItemsProps = {
  isfocused?: string;
} & Pick<SearchboxProps, "searchfieldposition">;

export const GroupItems = tw.div<GroupItemsProps>`
  flex items-center justify-between border border-gray-300 rounded
  ${(props) =>
    props.isfocused === "true" ? "border-amber-500" : "border-gray-400"}
  ${(props) =>
    props.searchfieldposition === "right" ? "bg-gray-300" : "bg-white"}
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
