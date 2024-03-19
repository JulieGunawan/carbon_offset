import type { Metadata } from "next";
import { inter } from "@/app/theme/fonts";

import ThemeRegistry from "./theme/ThemeRegistry";
import { Header } from "./ui/Header";
import HomePage from "./ui/HomePage";


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
    // <html lang="en">
    //   <ThemeRegistry>
    //     <body className={inter.className}>
    //       <Header />
    //       <HomePage />
    //       {children}
    //     </body>
    //   </ThemeRegistry>
    // </html>
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
