import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/navbar'
import ScrollToTopButton from "@/components/scrolltotop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="__className_d65c78" suppressHydrationWarning={true} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <Navbar />
            <main>
              {children}
            </main>
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}