import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tia Julian — Analytics Engineer & Builder",
  description:
    "Analytics Engineer with 4+ years of experience across fintech, AI, and data. I build real tools that solve real problems — using SQL, dbt, Python, and AI.",
  keywords: [
    "Analytics Engineer",
    "Data Analyst",
    "dbt",
    "Snowflake",
    "SQL",
    "Portfolio",
    "Australia",
  ],
  authors: [{ name: "Tia Julian" }],
  openGraph: {
    title: "Tia Julian — Analytics Engineer & Builder",
    description: "I turn real-world problems into clean, working solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
