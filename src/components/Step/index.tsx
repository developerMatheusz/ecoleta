import * as S from "./styles";

type StepProps = {
  stepLevel: number;
  totalSteps: number;
};

const Step = ({ stepLevel = 1, totalSteps = 5 }: StepProps) => {
  return (
    <S.Container>
      <S.ListStep>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isLastStep = index === totalSteps - 1;

          return (
            <S.SectionItemStep key={index} isLastStep={isLastStep}>
              <S.ItemStep isLastStep={isLastStep}>
                <S.Span currentLevel={index >= stepLevel}>{index + 1}</S.Span>
              </S.ItemStep>
            </S.SectionItemStep>
          );
        })}
      </S.ListStep>
    </S.Container>
  );
};

export default Step;
