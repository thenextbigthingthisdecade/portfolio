import theme from "@/lib/prismCodeBlockTheme";
import classNames from "classnames";
import { Highlight } from "prism-react-renderer";

export default function CodeBlock({
  codeString,
  language,
  highlightLine,
}: {
  codeString: string;
  language: string;
  highlightLine: string | null;
}) {
  return (
    <div className="mb-7 md:mb-11 px-6 py-4">
      <Highlight theme={theme} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={classNames(
              //   code base styles
              "text-sm word-spacing-reduced tracking-tight text-left overflow-auto",
              // styling color
              "",
              // classname (language-{name})
              [`${className}`]
            )}
            style={style}
          >
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line })} className="">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} className="" />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
