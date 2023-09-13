import React from 'react'
import { Providers } from '@/components/providers/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MELI Chile',
  description: 'Compre productos con Envío Gratis en el día en Mercado Libre Chile. Encuentre miles de marcas y productos a precios increíbles.',
  icons: {
    icon: '/favicon.svg'
  }
}

interface RootLayoutProps { children: React.ReactNode }

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <html lang='es'>
      <body className={`${inter.className} p-[0.1px] `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
