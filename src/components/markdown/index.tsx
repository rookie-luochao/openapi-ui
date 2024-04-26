import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodeMarkDown({ dataSource }: { dataSource: string }) {
  return (
    <Markdown
      children={dataSource}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");

          return match ? (
            <SyntaxHighlighter
              {...(rest as any)}
              children={String(children).replace(/\n$/, "")}
              style={darcula}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}
