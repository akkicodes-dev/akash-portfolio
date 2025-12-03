import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const poppinsSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppi-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akash Satao - Software Developer Android Developer",
    template: "%s | Akash Satao",
  },
  description:
    "Software Engineer Android Developer specialized in Vue, React, TypeScript, Tailwind, Node.js and Firebase. I transform ideas into modern, accessible, and high-performance digital experiences.",
  authors: [{ name: "Akash Satao", url: "https://akashsatao.vercel.app" }],
  creator: "Akash Satao",
  publisher: "Akash Satao",
  metadataBase: new URL("https://akashsatao.vercel.app"),
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Akash Satao",
    "Frontend",
    "Software Engineer",
    "Desenvolvedor Frontend",
    "Frontend Developer",
    "Vue",
    "React",
    "Tailwind",
    "JavaScript",
    "Next.js",
    "HTML",
    "CSS",
    "Express",
    "MongoBD",
    "Firebase",
    "Programador Frontend",
    "Engenheiro de Software",
    "Web Developer",
    "Micro-SaaS",
    "UI Developer",
    "Developer Portfolio",
  ],
  openGraph: {
    title:
      "Akash Satao - Software Engineer Android Developer",
    description:
      "Software Engineer Android Developer specialized in Vue, React, TypeScript, Tailwind, Node.js and Firebase. I transform ideas into modern, accessible, and high-performance digital experiences.",
    url: "https://akashsatao.vercel.app",
    siteName: "Akash Satao",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "technology",
  classification: "Software Engineer",
  applicationName: "Akash Satao Portfolio",
  verification: {
    google: "zLhULd-U4o_BOSFwid6TZQZacqB-hte1fgytIbGqVMY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>
        <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
        {children}
      </body>
    </html>
  );
}
