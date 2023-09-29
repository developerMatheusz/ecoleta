import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full h-screen flex flex-col
`;

export const GroupItems = tw.div`
  w-full h-full flex  justify-center gap-8 my-10
`;

export const ContainerBackground = tw.div`
  w-1/2 h-full flex flex-col items-center
`;

export const Image = tw.img`
  w-1/2 h-1/2 bg-cover
`;

export const TextArea = tw.span`
  text-xl w-96 pt-1 font-light
`;

export const ContainerForm = tw.div`
  w-96 h-full
`;

export const AreaForm = tw.div`
  shadow-md border border-gray-300/25
`;
