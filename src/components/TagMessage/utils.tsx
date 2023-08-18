import { MessageProperties } from "../Message/utils";
import Warning from "../../utils/icons/Warning";
import Info from "../../utils/icons/Info";
import Success from "../../utils/icons/Success";
import Error from "../../utils/icons/Error";

export const getTagMessageProperties = (typeMessage: string) => {
  const propertiesMapping: Record<string, MessageProperties> = {
    warning: {
      typeIcon: <Warning />,
      messageFeedback: "Campo desabilitado"
    },
    error: {
      typeIcon: <Error />,
      messageFeedback: "Campo inválido"
    },
    info: {
      typeIcon: <Info />,
      messageFeedback: "Campo informacional"
    },
    default: {
      typeIcon: <Success />,
      messageFeedback: "Campo correto"
    }
  };

  return propertiesMapping[typeMessage] || propertiesMapping.default;
};
