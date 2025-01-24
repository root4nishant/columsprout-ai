import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/nav";
import Footer from "@/components/custom/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["latin"], // Choose your subset
  weight: ["400", "700"], // Choose the weights you need
  style: ["normal", "italic"], // Optional styles
  variable: "--font-montserrat", // Optional CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased mx-auto `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
