import AppLayout from "@/components/layouts/AppLayout";
import {
  Code,
  CodeInline,
  H2,
  HorizontalRule,
  ItalicText,
  ListElement,
  MarkdownLink,
  OrderedList,
  Paragraph,
  UnorderedList,
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
  code: CodeInline,
  hr: HorizontalRule,
  pre: Code,
  h2: H2,
  ul: UnorderedList,
  li: ListElement,
  ol: OrderedList,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
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
