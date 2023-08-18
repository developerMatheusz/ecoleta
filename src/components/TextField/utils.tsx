import TagMessage from "../TagMessage";

export type TextFieldProperties = {
  tagMessage: React.ReactNode;
  disabled: boolean;
};

export const getTextFieldProperties = (typeMessage: string) => {
  const propertiesMapping: Record<string, TextFieldProperties> = {
    warning: {
      tagMessage: <TagMessage typeMessage="warning" />,
      disabled: true
    },
    error: {
      tagMessage: <TagMessage typeMessage="error" />,
      disabled: false
    },
    info: {
      tagMessage: <TagMessage typeMessage="info" />,
      disabled: false
    },
    success: {
      tagMessage: <TagMessage typeMessage="success" />,
      disabled: false
    },
    default: {
      tagMessage: null,
      disabled: false
    }
  };

  return propertiesMapping[typeMessage] || propertiesMapping.default;
};
