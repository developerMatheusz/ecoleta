import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full h-screen flex flex-col
`;

export const GroupItems = tw.div`
  w-full h-full flex  justify-center gap-8 my-10
`;

export const ContainerBackground = tw.div`
  w-1/2 h-full
`;

export const Image = tw.img`
  w-full h-full bg-cover
`;

export const ContainerForm = tw.div`
  w-96 h-full
`;

export const AreaForm = tw.div`
  shadow-md border border-gray-300/25
`;
