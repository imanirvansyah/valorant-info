import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google"
import "./globals.css";
import { Providers } from "@/providers";
import { Navbar } from "@/components/fragments/navbar";
import { BackgroundImage } from "@/components/atoms/background-image";

export const metadata: Metadata = {
  title: "Valorant Info",
  description: "Personal portfolio that gives you very basic info about valorant",
  icons: ["/favicon.png"]
};
const work_sans = Work_Sans({ weight: ['200', "300", "400", "700"], subsets: ["latin"], style: ["normal", "italic"], display: "swap", variable: "--font-worksans" });
const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-anton" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work_sans.variable} ${anton.variable}`}>
        <BackgroundImage />
        <div className="container mx-auto p-8">
          <Navbar />
        </div>
        <div className="relative">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
