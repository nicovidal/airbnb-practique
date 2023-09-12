import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NavBar from './components/navbar/Navbar'

const font=Nunito({
  subsets:['latin']
})

export const metadata: Metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar/>
        {children}</body>
    </html>
  )
}
