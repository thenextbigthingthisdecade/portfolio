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

export default function ArticleLayout({
  title,
  children,
}: PropsWithChildren & { title: string }) {
  return (
    <div className="font-reading mt-12 md:mt-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-3xl text-article-primary leading-[1.7]">
      <div className="mb-10">
        <h1 className="font-sans text-base font-medium mb-1">{title}</h1>
        <h3 className="text-article-note text-sm">14 April, 2023</h3>
      </div>
      {children}
    </div>
  );
}
