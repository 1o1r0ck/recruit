"use client";

import { Inter } from "next/font/google";
import { QueryProvider } from "../lib/QueryProvider";
import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en">
        <Head />
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </QueryProvider>
  );
}
