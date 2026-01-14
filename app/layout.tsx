import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gajapriyan Portfolio',
  description: 'Personal developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
