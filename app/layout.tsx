import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "haymatlos",
  description: "haymatlos forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-background dark:bg-darkBackground text-text dark:text-darkText pt-14"
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
