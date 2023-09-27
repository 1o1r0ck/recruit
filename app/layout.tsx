"use client";

import { Inter } from "next/font/google";
import { QueryProvider } from "./QueryProvider";
import Header from "./header";
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
