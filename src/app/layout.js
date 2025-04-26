import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



// app/layout.js
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Rachit Gupta - Software Developer',
  description: 'Portfolio website of Rachit Gupta, a software developer specializing in web and app development.',
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
    //   >
    //     {children}
    //   </body>
    // </html>

    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
