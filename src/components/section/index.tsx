import { useTheme } from "@emotion/react";

import { ITheme, dsc } from "@/core/style/defaultStyleConfig";

interface ISectionProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export const Section = ({ title, children }: ISectionProps): JSX.Element => {
  const theme = useTheme() as ITheme;

  return (
    <div
      css={{
        position: "relative",
        fontSize: dsc.fontSize.xs,
        "& + &": {
          marginTop: "1em",
        },
      }}
    >
      {title && (
        <h3
          style={{
            position: "relative",
            margin: "0 0 1em",
            color: theme.color.primary,
            padding: "0.5em 0",
            borderBottom: `1px solid ${theme.color.border}`,
          }}
        >
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
};
