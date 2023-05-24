import Head from "next/head";

import "./globals.css";
import { Inter } from "next/font/google";
import { logo } from "@/assets";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md. Muyeen - Ul - Islam",
  description: "Md. Muyeen - Ul - Islam Portolio",
  icons: {
    icon: "../assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
