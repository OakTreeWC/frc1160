import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titanium Robotics | 1160",
  description: "The Official Titanium Robotics FRC Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
