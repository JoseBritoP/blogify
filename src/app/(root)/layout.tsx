import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-white text-gray-800 mx-auto px-10">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
