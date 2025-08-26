import "./globals.css";
import { Metadata } from "next";
import { Open_Sans, Poppins, Teachers } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/layout/Footer/Footer";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const teachers = Teachers({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-teachers',
});

export const metadata: Metadata = {
  title: "Serenova",
  description: "Safari Experience with Serenova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable} ${teachers.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Marquee />
        <Footer />
      </body>
    </html>
  );
}
