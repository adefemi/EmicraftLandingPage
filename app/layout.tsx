import FooterComp from "@/components/common/FooterComp";
import { HeaderComponents } from "@/components/common/HeaderComponents";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "EMICRAFT - Tech Solutions",
  description: "Scale Your Business With Innovative Tech Solutions",
  icons: {
    icon: '/emicraftLogo.svg',
    shortcut: '/emicraftLogo.svg',
    apple: '/emicraftLogo.svg',
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        <HeaderComponents />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
