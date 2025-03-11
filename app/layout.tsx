import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "마음의 연결, 상담의 시작 - 맞춤형 감정 기록 & AI 리포트 서비스",
  description:
    "내담자와 상담사를 잇는 맞춤형 감정 기록 & AI 리포트 서비스. 상담 이전부터 상담 이후까지, 내담자와 상담사를 연결하는 스마트한 심리 케어 솔루션.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'