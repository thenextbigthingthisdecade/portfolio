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
      theme={{ styles: [], plain: {} }}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames(
            //   spacing around
            "mb-7 md:mb-11 px-6 py-4",
            //   code base styles
            "text-sm word-spacing-reduced tracking-tight rounded-lg"
          )}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="mr-4 text-article-primary/60">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
