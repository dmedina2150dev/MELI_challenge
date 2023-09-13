'use client'
import React from 'react'
import { AppProvider } from '@/store/context'
import Navbar from '../ui/Navbar'

interface ProvidersProps { children: React.ReactNode }

export function Providers ({ children }: ProvidersProps) {
  return (
    <AppProvider>
      <header className='bg-amber-300 fixed w-full'>
        <Navbar />
      </header>
      <main className='mt-24'>
        {children}
      </main>
      <div className='w-full h-12 fixed bottom-0 bg-white rounded text-gray-200 sm:flex md:hidden'>
        <p>Filtros</p>
      </div>
    </AppProvider>
  )
}
