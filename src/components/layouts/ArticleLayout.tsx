import { Fraunces, Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

export default function ArticleLayout({ children }: PropsWithChildren) {
  return (
    <div className="font-reading mt-12 md:mt-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
      {children}
    </div>
  );
}
