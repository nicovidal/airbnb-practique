import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NavBar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'

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
        <ClientOnly>
          <RegisterModal/>
        <NavBar/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
