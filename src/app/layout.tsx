import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://velikoyosbmtal-tubitak4006.vercel.app'),
  title: "Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı",
  description: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi'nde düzenlenen TÜBİTAK 4006 Bilim Fuarı'na davetlisiniz! 14 Mayıs 2025, 14.00'te okulumuzda gerçekleşecek bu özel etkinliğe katılımınızdan mutluluk duyarız.",
  openGraph: {
    title: "Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı",
    description: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi'nde düzenlenen TÜBİTAK 4006 Bilim Fuarı'na davetlisiniz! 14 Mayıs 2025, 14.00'te okulumuzda gerçekleşecek bu özel etkinliğe katılımınızdan mutluluk duyarız.",
    url: "https://velikoyosbmtal-tubitak4006.vercel.app/",
    siteName: "Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı",
    images: [
      {
        url: "/1.png",
        width: 1200,
        height: 630,
        alt: "Veliköy OSB MTAL TÜBİTAK 4006 Okul Fuarı Davetiyesi"
      }
    ],
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Veliköy OSB MTAL - TÜBİTAK 4006 Okul Fuarı",
    description: "Veliköy OSB Mesleki ve Teknik Anadolu Lisesi'nde düzenlenen TÜBİTAK 4006 Bilim Fuarı'na davetlisiniz! 14 Mayıs 2025, 14.00'te okulumuzda gerçekleşecek bu özel etkinliğe katılımınızdan mutluluk duyarız.",
    images: ["/1.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
