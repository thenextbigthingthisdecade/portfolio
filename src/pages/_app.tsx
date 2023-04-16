import AppLayout from "@/components/layouts/AppLayout";
import {
  CodeEditor,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
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
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  i: ItalicText,
  a: MarkdownLink,
  pre: CodeEditor,
  hr: HorizontalRule,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      {/* TODO: fix the type of the a element */}
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
