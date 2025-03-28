import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/widgets/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "COMP 426 - Spring '25",
  description: "Course website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex-col px-8 pb-16">
          <Header />

          {/* Content */}
          <div className="flex justify-center w-full">
            <div className="flex-col w-11/12 sm:w-10/12 md:w-[708px] mt-16">
              {children}
            </div>
          </div>
          </div>
      </body>
    </html>
  );
}
