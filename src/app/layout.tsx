import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cartContext"
import { AuthProvider } from "@/context/authContext";
import { Header } from "@/components/layout/Header";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "ITTA Learn",
  description: "Making the future bright"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans overflow-x-hidden ">
        <AuthProvider>
          <CartProvider>
          
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}