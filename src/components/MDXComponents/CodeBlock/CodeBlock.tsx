import classNames from "classnames";
import Highlight, { Language, defaultProps } from "prism-react-renderer";

export function CodeBlock({
  codeString,
  language,
  highlightLine,
}: {
  codeString: string;
  language: Language;
  highlightLine: string | null;
}) {
  return (
    <Highlight
      {...defaultProps}
      theme={{
        styles: [],
        plain: {},
      }}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            //   spacing around
            "mb-7 md:mb-11 px-2 py-4",
            //   code base styles
            "text-sm word-spacing-reduced tracking-tight rounded-lg text-left",
            // styling color
            "",
            [`${className}`]
          )}
          style={style}
        >
          {/* {tokens.map((line, index) => (
            <div
              key={index}
              {...getLineProps({ line })}
              className="group group-hover:bg-article-blue/80 transition-all duration-200 ease-in pt-[1px]"
            >
              <span className="pr-4 text-article-primary/50 group-hover:bg-article-blue/80 transition-all duration-200 ease-in">
                {index + 1}
              </span>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token })}
                  className="group-hover:bg-article-blue/80 transition-all duration-200 ease-in w-full"
                />
              ))}
            </div>
          ))} */}
        </pre>
      )}
    </Highlight>
  );
}
