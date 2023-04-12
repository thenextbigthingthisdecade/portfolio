import AppLayout from "@/components/layouts/AppLayout";
import SoundController from "@/components/SoundController";
import "@/styles/globals.css";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <AppLayout>
        <SoundController />
        <Component {...pageProps} />
      </AppLayout>
    </RadixTooltip.Provider>
  );
}
