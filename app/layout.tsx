import { Navbar } from "@/components/Navbar";
import FooterComp from "@/components/common/FooterComp";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "EMICRAFT - Tech Solutions",
  description: "Scale Your Business With Innovative Tech Solutions"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
