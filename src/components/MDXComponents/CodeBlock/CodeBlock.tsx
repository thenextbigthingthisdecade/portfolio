import classNames from "classnames";
import { Highlight, themes } from "prism-react-renderer";

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
    <div>
      <Highlight theme={themes.ultramin} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={classNames(
              //   spacing around
              "mb-7 md:mb-11 px-2 py-4",
              //   code base styles
              "text-sm word-spacing-reduced tracking-tight rounded-lg text-left overflow-auto",
              // styling color
              "",
              // classname (language-{name})
              [`${className}`]
            )}
            style={style}
          >
            {tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line })} className="pt-[1px]">
                <span className="pr-4 text-article-grey-6">{index + 1}</span>
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
