import { Tooltip } from "antd";
import copy from "copy-to-clipboard";
import { ellipsisBasicStyle } from "./config";

interface IEllipsis {
  text: string;
  width?: number | string;
  className?: string;
}

export function Ellipsis({ text, width, className }: IEllipsis) {
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
}
