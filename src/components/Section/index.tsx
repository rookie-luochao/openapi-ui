import { dsc } from "../../core/style/defaultStyleConfig";

interface ISectionProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export const Section = ({ title, children }: ISectionProps): JSX.Element => (
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
        css={{
          position: "relative",
          fontSize: dsc.fontSize.s,
          margin: "0 0 1em",
          color: dsc.color.primary,
          padding: "0.5em 0",
          borderBottom: `1px solid ${dsc.color.border}`,
        }}
      >
        {title}
      </h3>
    )}
    <div>{children}</div>
  </div>
);
