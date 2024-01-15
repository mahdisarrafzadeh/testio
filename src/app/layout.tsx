import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const shabnam = localFont({
  src: [
    {
      path: "../fonts/Shabnam-Light-FD.woff2",
      weight: "400",
      style: "light",
    },

    {
      path: "../fonts/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Shabnam-Bold-FD.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={shabnam.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
