import { MessageProps } from "../Message";

const Tooltip = ({ typeMessage }: MessageProps) => {
  let typeMessageFeedback = "";
  let title = "";
  let subtitle = "";

  switch (typeMessage) {
    case "warning":
      typeMessageFeedback = "bg-amber-400 text-black";
      title = "Título amarelo";
      subtitle = "Subtítulo amarelo";
      break;
    case "error":
      typeMessageFeedback = "bg-red-600 text-white";
      title = "Título vermelho";
      subtitle = "Subtítulo vermelho";
      break;
    case "info":
      typeMessageFeedback = "bg-[#1351B4] text-white";
      title = "Título azul";
      subtitle = "Subtítulo azul";
      break;
    default:
      typeMessageFeedback = "bg-green-600 text-white";
      title = "Título verde";
      subtitle = "Subtítulo verde";
      break;
  }

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
