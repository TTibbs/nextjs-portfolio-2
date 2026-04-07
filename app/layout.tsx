import type { Metadata } from "next";
import { Geist_Mono, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceMono = Space_Mono({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Terry Ward - Full Stack Developer",
  description: "Portfolio site for Terry Ward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        spaceMono.variable,
        geistMono.variable,
        syne.variable,
        "font-mono",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
