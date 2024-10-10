import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { DotBackgroundDemo } from "@/components/DotBackground";


// Import Google Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Renovated SNS-Groups",
  description: "Sincerity, Nobility, Service",
};


export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
        <DotBackgroundDemo>
          <Navbar/>
          {children}
        </DotBackgroundDemo>
        </ThemeProvider>
      </body>
    </html>
  );
}
