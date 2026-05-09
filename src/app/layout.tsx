import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GIBangladesh SaaS Platform",
  description: "Empowering GI Products of Bangladesh with AI and Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${inter.variable} antialiased bg-surface dark:bg-on-surface text-on-surface dark:text-inverse-on-surface transition-colors duration-300 selection:bg-primary/20`}>
        {children}
      </body>
    </html>
  );
}
