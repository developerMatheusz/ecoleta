import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-col
`;
export const GroupItems = tw.div`
  flex flex-col justify-center bg-white drop-shadow-md rounded
`;

export const SectionBody = tw.div`
  w-full cursor-pointer flex flex-col items-start justify-start
`;

type SelectAllProps = {
  borderBottom?: boolean;
  value?: boolean;
};

export const SelectAll = tw.div<SelectAllProps>`
  w-full p-4
  ${(props) => props.borderBottom && "border-b border-gray-300"}
  ${(props) => props.value && "bg-[#2670E8] text-white"}
`;

export const Divider = tw.div`
  w-full border-b border-gray-300
`;
