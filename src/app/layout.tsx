import { Providers } from "@/providers";
import type { Metadata } from "next";
import { Anton } from "next/font/google"

const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-anton" });

import "./globals.css";

export const metadata: Metadata = {
  title: "Valorant Info",
  description: "Personal portfolio that gives you very basic info about valorant",
  icons: ["/favicon.png"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
