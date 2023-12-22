import { CSSObject } from "@emotion/react";
import { Tooltip } from "antd";
import copy from "copy-to-clipboard";

interface IEllipsis {
  text: string;
  width?: number | string;
  className?: string;
}

export const ellipsisBasicStyle: CSSObject = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  cursor: "pointer",
  display: "inline-block",
};

export const Ellipsis = ({ text, width, className }: IEllipsis) => {
  return (
    <Tooltip
      title={<div css={{ maxHeight: 600 }}>{text}</div>}
      overlayStyle={{
        maxWidth: 600,
        fontSize: 12,
      }}
    >
      <span className={className} css={[ellipsisBasicStyle, { width }]} onClick={() => copy(text)}>
        {text}
      </span>
    </Tooltip>
  );
};
