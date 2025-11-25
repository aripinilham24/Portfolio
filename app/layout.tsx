import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})

export const metadata = {
  title: "Ilham Dev | Freelance Full-Stack Web Developer",
  description:
    "Hi, I'm Ilham, a freelance full-stack web developer dedicated to helping businesses and individuals build fast, secure, and user-friendly websites.",

  // Google Verification
  verification: {
    google: "gqBdIFK5-kMcWfwTIkeyCjXtQTzVg4EjyeOZsOxS2NE",
  },

  // Open Graph (Facebook, WhatsApp)
  openGraph: {
    title: "Ilham Dev | Freelance Full-Stack Web Developer",
    description:
      "Helping businesses build fast, secure, and user-friendly websites.",
    url: "https://portfolioaripinilham.vercel.app",
    type: "website",
    images: [
      {
        url: "https://portfolioaripinilham.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview Ilham Dev Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ilham Dev | Freelance Full-Stack Web Developer",
    description:
      "Helping businesses build fast, secure, and user-friendly websites.",
    images: ["https://portfolioaripinilham.vercel.app/preview.png"],
  },

  // Favicon / Icon
  icons: {
    icon: [
    { url: "/ilham-dev.png", type: "image/png" },
  ],
  shortcut: "/ilham-dev.png",
  apple: "/ilham-dev.png",
  },

  // Viewport
  viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
