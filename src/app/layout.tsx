import type { Metadata } from "next";
import { Kantumruy_Pro, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/navbarcomponent";
import FooterComponent from "@/component/footer/FooterComponent";

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-kantumruy',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Ministry of Magic and Sorcery",
  description: "Don't Thai to Cambodia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${kantumruy.className} antialiased`}
      >
        <Navbar />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
