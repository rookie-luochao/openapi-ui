import { useTheme } from "@emotion/react";
import { Dictionary } from "react-router-toolkit";
import { ITheme } from "../core/style/defaultStyleConfig";

export const parameterPositionMap = {
  path: "URL Path",
  header: "Header",
  query: "Query",
  body: "Body",
  cookie: "Cookie",
  formData: "Form Data",
};

function getIconStyleByParameterPosition(position: string) {
  const parameterPositionToIconMap: Dictionary<string> = {
    path: "/",
    header: "H",
    query: "?",
    body: "{}",
    cookie: "*",
    formData: "[]",
  };

  return {
    "&:before": {
      content: JSON.stringify(parameterPositionToIconMap[position]),
    },
  };
}

export function ParameterPositionIconComp({ position }: { position: string }) {
  const theme = useTheme() as ITheme;

  return (
    <span
      css={{
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        borderRadius: 2,
        width: "1.2em",
        height: "1.5em",
        lineHeight: "1.3em",
        bottom: "0.1em",
        padding: 1,
        backgroundColor: theme.color.title,
        color: theme.color.bg,
        fontSize: "0.8em",
        marginRight: "0.5em",
        ...getIconStyleByParameterPosition(position),
      }}
    />
  );
}
