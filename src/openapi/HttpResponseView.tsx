import { AxiosResponse } from "axios";
import { includes, isObject, map } from "lodash-es";
import { ReactNode } from "react";
import { dsc } from "../core/style/defaultStyleConfig";
import { HeadRow, httpCardWrapStyle } from "./HttpRequestView";
import { HttpCode } from "./OpenapiViewComp";

type IHeader = AxiosResponse["headers"];

function isJSON(headers = {} as IHeader) {
  return isObject(headers) && includes(headers["content-type"], "json");
}

export function transformResponse(buffer: any, headers?: any) {
  if (isJSON(headers)) {
    return JSON.parse(abToString(buffer));
  }

  return buffer;
}

function abToString(buffer: any) {
  return new TextDecoder("utf-8").decode(new TextEncoder().encode(buffer));
  // return Buffer.from(buffer).toString("utf8");
}

function toDataURI(buffer: any, contentType: string) {
  const bytes = new Uint8Array(buffer);
  let binary = "";

  for (let len = bytes.byteLength, i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  return `data:${contentType};base64,${btoa(binary)}`;
}

function CodeView({ children }: { children: ReactNode }) {
  return (
    <pre
      css={[
        httpCardWrapStyle,
        {
          wordBreak: "keep-all",
          maxHeight: 500,
        },
      ]}
    >
      {children}
    </pre>
  );
}

export function HttpResponseView({ data, status, headers = {} }: AxiosResponse) {
  const isHTML = isObject(headers) && includes(headers["content-type"], "text/html");
  if (isHTML) {
    const ref = ($el: HTMLIFrameElement) => {
      if ($el) {
        const doc = $el.contentWindow!.document;
        doc.open();
        doc.write(abToString(data));
      }
    };

    return <iframe src="about:blank" style={{ width: "100%", minHeight: 400 }} ref={ref} />;
  }

  const isImage = isObject(headers) && includes(headers["content-type"], "image/");
  if (isImage) {
    return (
      <div>
        <img src={toDataURI(data, headers["content-type"])} />
      </div>
    );
  }

  return (
    <span css={{ fontSize: dsc.fontSize.xxs, position: "relative" }}>
      <div>
        <HttpCode code={status} />
      </div>
      {headers && (
        <CodeView>
          {map(headers, (value: string, key: string) => (
            <HeadRow key={key} field={key} value={value} />
          ))}
        </CodeView>
      )}
      {data && (
        <CodeView>
          <code>{isJSON(headers) ? JSON.stringify(data, null, 2) : abToString(data)}</code>
        </CodeView>
      )}
    </span>
  );
}
