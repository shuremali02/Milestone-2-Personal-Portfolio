import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Porfolio",
  description: "Porfolio app for Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng">
      <body>
        <Navbar />
      
          {children}
      

        <Footer />
      </body>
    </html>
  );
}
