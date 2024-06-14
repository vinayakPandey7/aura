import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import GiftLayout from "./GiftLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Love Candles",
  description: "Spread love and light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GiftLayout>{children}</GiftLayout>
      </body>
    </html>
  );
}
