import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tanmay Admuthe | Backend Software Engineer",
    template: "%s | Tanmay Admuthe"
  },
  description: "Backend Software Engineer specializing in distributed systems, high-performance APIs, and scalable architectures. Claude Certified Architect.",
  keywords: ["Backend Engineer", "Java", "Spring Boot", "Python", "Distributed Systems", "Software Engineer", "Cognizant"],
  authors: [{ name: "Tanmay Admuthe" }],
  creator: "Tanmay Admuthe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanmayadmuthe.com",
    title: "Tanmay Admuthe | Backend Software Engineer",
    description: "Backend Software Engineer specializing in distributed systems, high-performance APIs, and scalable architectures.",
    siteName: "Tanmay Admuthe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Admuthe | Backend Software Engineer",
    description: "Backend Software Engineer specializing in distributed systems.",
    creator: "@tanmayadmuthe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <TooltipProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
