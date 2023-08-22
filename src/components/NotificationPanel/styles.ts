import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-col items-center bg-white shadow-xl w-full
`;

export const SectionEmail = tw.div`
  flex items-center justify-start font-light w-full text-sm text-[#1351B4] hover:underline
`;

export const GroupHead = tw.div`
  flex items-start justify-between w-full p-4
`;

export const ContainerIcon = tw.div`
  w-4 h-4 text-[#1351B4] cursor-pointer
`;

export const GroupBody = tw.div`
  flex flex-col w-full
`;

export const ContainerHead = tw.div`
  cursor-pointer
`;

export const Divider = tw.div`
  border border-gray-300 bg-gray-300
`;
