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
      <div className={`w-full fixed bottom-0 shadow-md shadow-black border-t-2 rounded-t-xl bg-white text-gray-200 block sm:block md:hidden transition-all ease-in-out ${(showMenu) ? 'h-64' : 'h-14'}`}>
        <div className='flex flex-col justify-center'>
          <span onClick={toggleMenu} className='mx-auto text-base text-slate-400 py-4 px-2 active:bg-white target:bg-white focus:bg-white'>
            Ordenar / Filtrar
          </span>
        </div>
        <div className='flex flex-col justify-center'>
          <FooterOptions />
        </div>
      </div>
    </Provider>
  )
}
