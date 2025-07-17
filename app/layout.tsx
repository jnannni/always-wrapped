import "./globals.css";
import "./test.css";
import { SessionProvider } from "next-auth/react";
import { Providers } from "@/app/providers/Providers";
import {
  Quicksand,
  Cherry_Bomb_One,
  Noto_Sans,
  Nunito,
} from "next/font/google";
import Navbar from "../src/shared/ui/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: "400",
  variable: "--font-noto-sans",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: "400",
  variable: "--font-nunito-sans",
});

const cherryBombOne = Cherry_Bomb_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-cherry-bomb-one",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${cherryBombOne.variable}`}>
        <SessionProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
