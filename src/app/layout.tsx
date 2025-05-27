import { Quicksand, Cherry_Bomb_One } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/Navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const cherryBombOne = Cherry_Bomb_One({
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
      <body className={`${quicksand.className} ${cherryBombOne.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
