import "./globals.css";
import { Metadata } from "next";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "Serenova",
  description: "Safari Experience with Serenova",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In Next.js App Router, we can't directly access the pathname in layout.tsx
  // We'll use a client component wrapper for the header to handle this
  // For now, we'll set a default header type and let individual pages override it

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&family=Poppins:wght@100..900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
