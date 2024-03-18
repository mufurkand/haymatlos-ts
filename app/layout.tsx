import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          "bg-background dark:bg-darkBackground text-text dark:text-darkText"
        }
      >
        {children}
      </body>
    </html>
  );
}
