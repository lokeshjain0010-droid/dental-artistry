import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dental Artistry | Advanced Aesthetic & Restorative Dentistry · Chandigarh",
  description:
    "Experience precision aesthetic, restorative, and advanced general dentistry at Dental Artistry, Sector 27D, Chandigarh. Book your consultation today.",
  keywords: [
    "dentist chandigarh",
    "cosmetic dentistry chandigarh",
    "dental implants sector 27",
    "braces chandigarh",
    "invisible aligners",
    "Dr Piyush dentist",
    "dental artistry",
  ],
  openGraph: {
    title: "Dental Artistry | Advanced Aesthetic & Restorative Dentistry",
    description:
      "Where Science Meets the Art of Your Smile. Chandigarh's premier dental practice in Sector 27D.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-sans text-[15px] leading-[24px] antialiased selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
