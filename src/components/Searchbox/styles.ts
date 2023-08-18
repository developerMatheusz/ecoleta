import tw from "tailwind-styled-components";

export const Container = tw.div`
  p-4 bg-gray-200/25 text-base rounded shadow-lg
`;

type GroupItemsProps = {
  isFocused?: boolean;
};

export const GroupItems = tw.div<GroupItemsProps>`
  flex items-center justify-between bg-white border rounded
  ${(props) => (props.isFocused ? "border-amber-500" : "border-gray-400")}
`;

export const Input = tw.input`
  italic-placeholder bg-transparent text-lg text-black pl-8 py-2 w-full focus:outline-none font-light
`;

export const SectionIcon = tw.div`
  p-2
`;

export const ContainerIcon = tw.div`
  hover:bg-[#1351B4]/25 rounded-full p-2 cursor-pointer
`;
