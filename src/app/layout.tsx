import type { Metadata } from "next";
import { Syne, Kodchasan, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  subsets: ["latin"],
});

const kodchasan = Kodchasan({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-kodchasan",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infl8 - Balloon Decorations for Life's Sweetest Celebrations",
  description: "We specialize in creating stunning and unique balloon arrangements for all, ensuring your events are filled with joy and color.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${kodchasan.variable} ${dancingScript.variable} antialiased font-kodchasan`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}