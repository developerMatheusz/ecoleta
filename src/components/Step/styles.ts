import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full
`;

export const ListStep = tw.ul`
  flex items-center justify-center w-full
`;

type SectionItemStepProps = {
  isLastStep?: boolean;
};

export const SectionItemStep = tw.li<SectionItemStepProps>`
  w-16
  ${(props) => (props.isLastStep ? "flex-none w-auto" : "flex-auto")}
`;

export const ItemStep = tw.div<SectionItemStepProps>`
  flex cursor-pointer items-center focus:outline-none
  ${(props) =>
    !props.isLastStep &&
    "after:h-px after:w-full after:flex-1 after:bg-[#1351B4] after:content-['']"}
`;

type SpanProps = {
  currentLevel?: boolean;
};

export const Span = tw.span<SpanProps>`
  flex w-10 h-10 text-xl items-center justify-center rounded-full
  ${(props) =>
    props.currentLevel
      ? "bg-white text-[#1351B4] border border-[#1351B4]"
      : "bg-[#1351B4] text-white"}
`;
