import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MancuCode - Interactive Programming Puzzle Platform",
  description: "MancuCode is an interactive platform designed to help users improve their programming skills through daily code puzzles and multiple-choice questions. Built with Next.js, Tailwind CSS, and TypeScript, it features a sleek and dynamic user interface with a futuristic, engaging color scheme. User work through puzzles of increasing difficulty levels, with real-time feedback on their answers, explanations for correct and incorrect responses, and a seamless navigation experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
