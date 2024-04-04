import type { Metadata } from 'next'

import { Navbar } from '@/components/navbar'
import { fontSans } from '@/config/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
