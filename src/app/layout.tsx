import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import StoreProvider from "./store-provider";
import { Toaster } from 'react-hot-toast';
import '@smastrom/react-rating/style.css'
import { Suspense } from "react";



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
        className={`antialiased`}
      >
        <div className="min-h-screen flex flex-col container m-auto px-4">
          <StoreProvider>
                <Suspense>
            <Header />
            <div className="flex-1">
              {children}
            </div>
            <Toaster position="top-right" />
            <Footer />
              </Suspense>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
