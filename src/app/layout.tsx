import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/nav";
import Footer from "@/components/custom/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const primaryFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

const secondaryFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-secondary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
