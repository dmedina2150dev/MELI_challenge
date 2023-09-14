'use client'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/redux/store'
// import { AppProvider } from '@/store/context'
import Navbar from '../ui/Navbar'
import FooterOptions from '../ui/Footer'

interface ProvidersProps { children: React.ReactNode }

export function Providers ({ children }: ProvidersProps) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Provider store={store}>
      <header className='bg-amber-300 fixed w-full'>
        <Navbar />
      </header>
      <main className='mt-24 mb-24'>
        {children}
      </main>
      <div className={`w-full fixed bottom-0 bg-slate-300 rounded text-gray-200 block sm:block md:hidden ${(showMenu) ? 'h-64' : 'h-12'}`}>
        <button onClick={toggleMenu} className='mx-auto text-base text-slate-400 p-4'>
          Ordenar / Filtrar
        </button>
        <div className='flex flex-col justify-center'>
          <FooterOptions />
        </div>
      </div>
    </Provider>
  )
}
