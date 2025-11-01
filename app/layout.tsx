import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Susan Paul Music - Professional Piano Education | ABRSM & Trinity",
  description: "Expert piano instruction for ABRSM and Trinity exams. Join Susan Paul's music academy in Bangalore for personalized piano lessons, progress tracking, and musical excellence.",
  keywords: "piano lessons, ABRSM, Trinity, music education, Bangalore, Susan Paul, piano teacher",
  authors: [{ name: "Susan Paul" }],
  openGraph: {
    title: "Susan Paul Music Academy",
    description: "Professional Piano Education & Musical Excellence",
    type: "website",
    locale: "en_IN",
    url: "https://susanpaulmusic.com",
    siteName: "Susan Paul Music",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#333',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '16px',
                },
                success: {
                  iconTheme: {
                    primary: '#a855f7',
                    secondary: '#fff',
                  },
                },
              }}
            />
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
