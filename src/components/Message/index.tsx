import { useState } from "react";
import Warning from "../../utils/icon/Warning";
import Success from "../../utils/icon/Success";
import Error from "../../utils/icon/Error";
import Info from "../../utils/icon/Info";
import Close from "../../utils/icon/Close";

export type MessageProps = {
  typeMessage?: "success" | "warning" | "error" | "info";
};

const Message = ({ typeMessage = "success" }: MessageProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };

  let typeMessageFeedback = "";
  let typeIcon;
  let messageFeedback = "";

  switch (typeMessage) {
    case "warning":
      typeMessageFeedback = "bg-amber-300/25";
      typeIcon = <Warning />;
      messageFeedback =
        "Atenção. Em caso de dúvida, não compartilhe sua senha com terceiros. Ligue para central de atendimento.";
      break;
    case "error":
      typeMessageFeedback = "bg-red-300/25 text-red-700";
      typeIcon = <Error />;
      messageFeedback =
        "Erro. Desculpe, nenhum resultado encontrado. Veja se houve algum erro de digitação.";
      break;
    case "info":
      typeMessageFeedback = "bg-blue-300/25 text-[#1351B4]";
      typeIcon = <Info />;
      messageFeedback =
        "Informação. Seus dados só serão salvos após o preenchimento do primeiro campo do formulário.";
      break;
    default:
      typeMessageFeedback = "bg-green-300/25 text-green-700";
      typeIcon = <Success />;
      messageFeedback =
        "Sucesso. Seus dados foram alterados conforme preenchimento do formulário.";
      break;
  }

  return (
    <>
      {isVisible && (
        <>
          <div
            className={`relative flex items-center justify-between w-full py-6 px-4 ${typeMessageFeedback}`}
          >
            <div className="flex items-center">
              <div className="w-6 h-6">{typeIcon}</div>
              <div className="text-lg mx-4 text-black">{messageFeedback}</div>
            </div>
            <div className="absolute top-0 right-0 m-3">
              <div className="w-4 h-4 cursor-pointer" onClick={handleClick}>
                <Close />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
