import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car hub",
  description: "We've the best cars in the world",
};

import { Navbar, Footer } from "../components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relactive">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
