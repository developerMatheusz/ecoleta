import Warning from "../../utils/icons/Warning";
import Error from "../../utils/icons/Error";
import Info from "../../utils/icons/Info";
import Success from "../../utils/icons/Success";

export type MessageProperties = {
  typeIcon: React.ReactNode;
  messageFeedback: string;
};

export const getMessageProperties = (typeMessage: string) => {
  const propertiesMapping: Record<string, MessageProperties> = {
    warning: {
      typeIcon: <Warning />,
      messageFeedback:
        "Atenção. Em caso de dúvida, não compartilhe sua senha com terceiros. Ligue para central de atendimento."
    },
    error: {
      typeIcon: <Error />,
      messageFeedback:
        "Erro. Desculpe, nenhum resultado encontrado. Veja se houve algum erro de digitação."
    },
    info: {
      typeIcon: <Info />,
      messageFeedback:
        "Informação. Seus dados só serão salvos após o preenchimento do primeiro campo do formulário."
    },
    default: {
      typeIcon: <Success />,
      messageFeedback:
        "Sucesso. Seus dados foram alterados conforme preenchimento do formulário."
    }
  };

  return propertiesMapping[typeMessage] || propertiesMapping.default;
};
