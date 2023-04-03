import { NavBar } from "@/components/NavBar";
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

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto w-full`}
    >
      <NavBar />
      {children}
    </main>
  );
}
