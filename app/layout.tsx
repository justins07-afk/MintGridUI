import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a modern fintech look
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MintGrid UI - Fintech Design System",
  description: "Accelerate your fintech product development with MintGrid UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
