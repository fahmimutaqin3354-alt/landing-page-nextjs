import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "CPC — Sistem Manajemen Konstruksi Perumahan Terintegrasi",
  description:
    "Pantau proyek, material, progres pembangunan, dan biaya perumahan dalam satu sistem terintegrasi. Solusi SaaS enterprise untuk developer dan kontraktor perumahan modern.",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  keywords: [
    "Sistem Manajemen Konstruksi Perumahan",
    "CPC Construction System",
    "Software Kontraktor Perumahan",
    "Aplikasi Developer Properti",
    "Monitoring Progres Proyek",
    "Kurva S Konstruksi",
    "Manajemen Material BoQ",
    "Procurement Konstruksi",
  ],
  authors: [{ name: "CPC Systems Indonesia" }],
  openGraph: {
    title: "CPC — Sistem Manajemen Konstruksi Perumahan Terintegrasi",
    description:
      "Kelola Proyek Konstruksi Perumahan Lebih Mudah. Pantau proyek, material, progres pembangunan, dan biaya dalam satu sistem terintegrasi.",
    type: "website",
    locale: "id_ID",
    siteName: "CPC Construction System",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPC — Sistem Manajemen Konstruksi Perumahan",
    description:
      "Satu sistem terpadu untuk mengelola proyek konstruksi perumahan, material, procurement, dan anggaran.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
