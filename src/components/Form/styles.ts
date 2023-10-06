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
  text-xl font-bold
`;

type ContainerInformation = {
  type?: "login" | "password";
};

export const ContainerInformation = tw.div<ContainerInformation>`
  mt-10 mb-4

  ${(props) =>
    props.type === "login" ? "flex items-center gap-4" : "flex flex-col"}
`;

export const CpfArea = tw.span`
  font-semibold text-lg
`;

export const ContainerInput = tw.div`
  mt-4
`;

export const ContainerLogo = tw.div`
  w-6
`;

export const Description = tw.span`
  text-lg
`;

export const ContainerComplementInfo = tw.div``;

export const TitleComplementInfo = tw.span`
  text-sm font-light
`;

export const ContainerButton = tw.div<ContainerInformation>`
  ${(props) =>
    props.type === "login"
      ? "flex items-center justify-end"
      : "flex items-center justify-end gap-4"}
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
