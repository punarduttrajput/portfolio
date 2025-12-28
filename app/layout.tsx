import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Punar Dutt Rajput | Full Stack .NET Core Developer",
  description:
    "Full Stack .NET Core Developer with 2+ years of experience in ASP.NET Core, Angular, React, and blockchain technologies. Specializing in enterprise web applications.",
  keywords: [
    "Full Stack Developer",
    ".NET Core",
    "ASP.NET Core",
    "Angular",
    "React",
    "Blazor",
    "Web API",
    "Blockchain",
    "SQL Server",
    "PostgreSQL",
  ],
  authors: [{ name: "Punar Dutt Rajput" }],
  creator: "Punar Dutt Rajput",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://punarrajput.vercel.app",
    title: "Punar Dutt Rajput | Full Stack .NET Core Developer",
    description: "Full Stack .NET Core Developer with 2+ years of experience specializing in enterprise applications.",
    siteName: "Punar Dutt Rajput Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punar Dutt Rajput | Full Stack .NET Core Developer",
    description: "Full Stack .NET Core Developer with 2+ years of experience specializing in enterprise applications.",
  },
  icons: {
    icon: [
      {
        url: "/fav-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/fav.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/fav.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="punar-portfolio-theme">
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
