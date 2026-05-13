import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Happy Birthday Celebration! 🎉',
  description: 'A fun and animated birthday celebration website',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎂</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
