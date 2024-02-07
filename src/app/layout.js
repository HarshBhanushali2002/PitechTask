"use client";
import { Inter } from "next/font/google";
// import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <AppRouterCacheProvider>{children}</AppRouterCacheProvider> */}
        </body>
    </html>
  );
}
