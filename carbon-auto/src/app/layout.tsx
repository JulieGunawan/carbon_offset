import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./theme/ThemeRegistry";
import { Header } from "./component/Header";
import HomePage from "./component/HomePage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbon Offset",
  description: "Plant trees and offset the carbon for your next car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>
          <Header />
          <HomePage />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
