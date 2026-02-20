import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "HR System",
  description: "HR Management System Dashboard",

  icons: {
    icon: "/images/logocompany.png",
    shortcut: "/images/logocompany.png",
    apple: "/images/logocompany.png",
  },

  openGraph: {
    title: "HR System",
    description: "HR Management System Dashboard",
    images: ["/images/logocompany.png"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/logocompany.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
