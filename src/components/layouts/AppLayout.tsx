import { Navbar } from "@/components/NavBar";
import { Fraunces, Inter } from "next/font/google";
import { PropsWithChildren, useEffect } from "react";
import { Toaster, toast } from "sonner";

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
  useEffect(() => {
    toast("Music not playing?", {
      description: "Just press a key on your keyboard, or click the screen. I'm aware of the issue, still working on a fix!",
    });
  }, []);
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl mx-auto w-full px-8 font-sans`}
    >
      <Navbar />
      <Toaster closeButton />
      {children}
    </main>
  );
}
