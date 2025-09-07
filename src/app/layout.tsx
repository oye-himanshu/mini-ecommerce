import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import StoreProvider from "./store-provider";
import { Toaster } from 'react-hot-toast';
import '@smastrom/react-rating/style.css'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini E-Commerce",
  description: "Mini e-commerce developed by Himanshu sharma",
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
        <div className="min-h-screen flex flex-col container m-auto px-4">
          <StoreProvider>
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Toaster position="top-right" />
            <Footer />
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
