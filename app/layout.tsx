import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chúc mừng sinh nhật Tưoi',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        {children}
      </body>
    </html>
  )
}
