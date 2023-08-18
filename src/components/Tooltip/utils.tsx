export type TooltipProperties = {
  title: string;
  subtitle: string;
};

export const getTooltipProperties = (typeMessage: string) => {
  const propertiesMapping: Record<string, TooltipProperties> = {
    warning: {
      title: "Título amarelo",
      subtitle: "Subtítulo amarelo"
    },
    error: {
      title: "Título vermelho",
      subtitle: "Subtítulo vermelho"
    },
    info: {
      title: "Título azul",
      subtitle: "Subtítulo azul"
    },
    success: {
      title: "Título verde",
      subtitle: "Subtítulo verde"
    }
  };

  return propertiesMapping[typeMessage] || propertiesMapping.default;
};
