// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import "./globals.css";

// Import fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js + Tailwind v3 App",
  description: "A starter template with Tailwind v3 and custom fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          min-h-screen bg-gray-50 text-gray-900 
          font-sans
        `}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
