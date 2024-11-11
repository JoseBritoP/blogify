import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-[100vh] bg-white text-gray-800">
      <div className="max-w-[1536px] mx-auto px-[80px]">{children}</div>
    </div>
  );
}
