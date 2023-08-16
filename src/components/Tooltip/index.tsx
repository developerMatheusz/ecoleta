import { getTooltipInfo } from "../../utils/methods/getComponentInfo";
import { MessageProps } from "../Message";

const Tooltip = ({ typeMessage }: MessageProps) => {
  const { typeMessageFeedback, title, subtitle } = getTooltipInfo(typeMessage);

  return (
    <div className="relative inline-block">
      <div className={`${typeMessageFeedback} p-2 rounded`}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg">{title}</div>
          <div className="font-light text-base">{subtitle}</div>
        </div>
      </div>
      <div
        className={`absolute w-4 h-4 ${typeMessageFeedback} transform rotate-45 -translate-y-2/3 left-1/2`}
      />
    </div>
  );
};

export default Tooltip;
