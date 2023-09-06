import tw from "tailwind-styled-components";

export const Container = tw.div``;

export const Form = tw.form`
  px-4 py-8
`;

export const AreaError = tw.div`
  flex items-center text-red-500 mb-4 gap-1
`;

export const TextError = tw.span`
  text-base
`;

export const Title = tw.h1`
  text-lg font-bold
`;

export const ContainerInput = tw.div`
  mt-8
`;

export const ContainerButton = tw.div`
  flex items-center justify-end
`;

export const SizeButton = tw.div`
  w-36
`;

export const AreaLink = tw.div`
  flex items-center justify-center w-full pb-4
`;

export const TextTerm = tw.span`
  text-[#1351B4] font-semibold
`;
