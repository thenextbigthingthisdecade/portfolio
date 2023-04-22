import AppLayout from "@/components/layouts/AppLayout";
import {
  CodeEditor,
  CodeInline,
  HorizontalRule,
  ItalicText,
  MarkdownLink,
  Paragraph,
} from "@/components/MDXComponents";
import SoundController from "@/components/SoundController";
import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

const components = {
  p: Paragraph,
  i: ItalicText,
  a: MarkdownLink,
  pre: CodeEditor,
  code: CodeInline,
  hr: HorizontalRule,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      {/* TODO: fix the type of the link element */}
      {/* @ts-ignore */}
      <MDXProvider components={components}>
        <AppLayout>
          <SoundController />
          <Component {...pageProps} />
        </AppLayout>
      </MDXProvider>
      <Analytics />
    </RadixTooltip.Provider>
  );
}
