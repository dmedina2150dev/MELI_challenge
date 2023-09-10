'use client'

import Navbar from '../ui/Navbar'

interface ProvidersProps { children: React.ReactNode }

export function Providers({ children }: ProvidersProps) {
    return (
        <>
            <header className="bg-amber-300 fixed w-full">
                <Navbar />
            </header>
            <main className=" min-h-screen min-w-full mt-24">
                <aside className="hidden md:hidden">
                    <h4>Precio</h4>
                    <p>
                        $ 40.000 <span>a</span> $50.000 <span>(56)</span>
                    </p>
                    <p>
                        $ 50.000 <span>a</span> $60.000 <span>(6)</span>
                    </p>
                    <p>
                        $ 60.000 <span>a</span> $70.000 <span>(20)</span>
                    </p>
                </aside>
                {children}
                {/* <CardList /> */}
            </main>
            <div className="w-full h-12 fixed bottom-0 bg-white rounded text-gray-200 sm:flex md:hidden">
                <p>Filtros</p>
            </div>
        </>
    )
}