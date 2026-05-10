import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://tiajulian.github.io/TJBuilds";

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
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Tia Julian — Analytics Engineer & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tia Julian — Analytics Engineer & Builder",
    description: "I turn real-world problems into clean, working solutions.",
    images: [`${siteUrl}/og.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tia Julian",
  jobTitle: "Analytics Engineer",
  url: siteUrl,
  email: "tiajulian99@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/tia-julian-861a86182/",
    "https://github.com/tiajulian",
  ],
  knowsAbout: ["SQL", "dbt", "Snowflake", "Data Engineering", "Analytics", "Python"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
