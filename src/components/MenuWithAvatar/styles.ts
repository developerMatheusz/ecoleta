import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex items-center flex-col
`;

export const GroupItems = tw.div`
  flex items-center justify-center gap-1 px-2 hover:bg-[#1351B4]/25 rounded-full cursor-pointer w-full
`;

export const ContainerAvatar = tw.div`
  pt-2
`;

export const TextArea = tw.div`
  font-bold text-sm text-black/75 text-left
`;

export const Text = tw.div`
  font-light text-black/75
`;

export const ContainerIcon = tw.div`
  text-[#1351B4]
`;

export const ContainerMenu = tw.div`
  absolute w-96 rounded-2xl flex flex-col mt-14 shadow-lg border bg-white mr-60
`;

export const WelcomeUser = tw.div`
  w-60 text-[#636363] text-lg px-4 pt-4
`;

export const ContainerSection = tw.div`
  flex flex-col gap-4 px-4 mt-4
`;

export const GroupSection = tw.div`
  flex flex-col gap-4
`;

export const TextAreaSection = tw.span`
  text-sm font-semibold text-[#636363]
`;

export const Border = tw.div`
  border-b border-[#636363]/50
`;

export const GroupItemBody = tw.div`
  hover:bg-[#636363]/25 cursor-pointer pr-2 py-3
`;

export const TextAreaBody = tw.span`
  text-sm p-4
`;

export const SectionButton = tw.div`
  flex items-end justify-end p-2
`;

export const GroupButton = tw.div`
  GroupButton
`;
