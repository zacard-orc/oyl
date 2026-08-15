import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "OYL(On Your Left) Notes - AI-Powered Workspace for Every Asset",
  description: "The ultimate hub for your LLM workflows, images, videos, attachments, and 3D assets. Reimagined for clarity and focus. Multi-platform sync and AI-enhanced note-taking.",
  keywords: [
    "OYL Notes",
    "AI 笔记应用",
    "多端同步",
    "LLM 集成",
    "3D 资产",
    "笔记工具",
    "生产力应用",
    "跨平台同步",
    "AI 助手",
    "note-taking",
    "AI workspace",
    "LLM workflow",
    "3D assets",
  ],
  authors: [{ name: "OYL Team" }],
  creator: "OYL Team",
  publisher: "OYL Team",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://oyl.app"),
  alternates: {
    canonical: "https://oyl.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oyl.app",
    siteName: "OYL Notes",
    title: "OYL Notes - AI-Powered Workspace for Every Asset",
    description: "The ultimate hub for your LLM workflows, images, videos, attachments, and 3D assets. Reimagined for clarity and focus.",
    images: [
      {
        url: "https://oyl.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OYL Notes - AI-Powered Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OYL Notes - AI-Powered Workspace for Every Asset",
    description: "The ultimate hub for your LLM workflows, images, videos, attachments, and 3D assets. Reimagined for clarity and focus.",
    images: ["https://oyl.app/twitter-image.jpg"],
    creator: "@oyl_notes",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9f9f9",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OYL Notes",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS, Windows, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "The ultimate hub for your LLM workflows, images, videos, attachments, and 3D assets. Reimagined for clarity and focus.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
    featureList: [
      "AI-powered note-taking",
      "Multi-platform sync",
      "LLM workflow integration",
      "Support for images, videos, 3D assets",
      "Material Design interface",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} font-body-md antialiased bg-background text-on-background overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
