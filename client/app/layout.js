// "use client";
import AuthContextProvider from "@/context/authContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <AuthContextProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </AuthContextProvider>
    </>
  );
}
