import classNames from "classnames";

type StepProps = {
  stepLevel: number;
  totalSteps: number;
};

const Step = ({ stepLevel = 1, totalSteps = 5 }: StepProps) => {
  return (
    <ul className="flex items-center justify-center w-full">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isLastStep = index === totalSteps - 1;

        return (
          <li
            key={index}
            className={`w-16 ${isLastStep ? "flex-none w-auto" : "flex-auto"}`}
          >
            <div
              className={classNames(
                "flex cursor-pointer items-center focus:outline-none",
                {
                  "after:h-px after:w-full after:flex-1 after:bg-[#1351B4] after:content-['']":
                    !isLastStep
                }
              )}
            >
              <span
                className={classNames(
                  "flex w-10 h-10 text-xl items-center justify-center rounded-full",
                  {
                    "bg-[#1351B4] text-white": index < stepLevel,
                    "bg-white text-[#1351B4] border border-[#1351B4]":
                      index >= stepLevel
                  }
                )}
              >
                {index + 1}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Step;
