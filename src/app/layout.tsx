'use client';
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const geistSans = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navHeight, setNavHeight] = useState(5); // in rem

  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <div>
          <Navbar onHeightChange={setNavHeight} />
        </div>
        <main style={{ paddingTop: `${navHeight}rem` }}>
          {children}
        </main>
      </body>
    </html>
  );
}
