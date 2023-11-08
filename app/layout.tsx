"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { FiArrowRight } from "react-icons/fi";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { withRouter } from "next/router";
import { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
// const showNavbar = window.location.href === "/login" ? false : true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  const noNav = ["/", "/"];
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <html lang="en">
      <body className="h-screen scroll-smooth">
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
