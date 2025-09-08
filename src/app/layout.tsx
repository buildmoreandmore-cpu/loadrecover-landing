import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LoadRecover - 24/7 Freight Recovery & Driver Marketplace",
  description: "Connect with verified drivers for emergency freight recovery. 24/7 load recovery service when drivers hit HOS limits or abandon loads. Instant dispatch nationwide.",
  keywords: "freight recovery, trucking marketplace, HOS recovery, abandoned loads, truck drivers, logistics",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "LoadRecover - 24/7 Freight Recovery",
    description: "Emergency freight recovery with verified drivers nationwide",
    type: "website",
  },
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
