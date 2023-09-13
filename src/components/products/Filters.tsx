'use client'
import { AppContext } from '@/store/context';
import { useContext } from 'react';
import { ArrowRight } from '../icons/Arrows';
import Link from 'next/link';


export default function Filters() {

    const { termSearch ,availableFilters, selectedSort:sort } = useContext(AppContext);
    // console.log(availableFilters)
    return (
        <section className='px-4 hidden sm:hidden md:block lg:block xl:block'>
            <h4 className='font-semibold'>{ availableFilters[0]?.name || 'Precio' }</h4>
            <ul>
                {
                    availableFilters[0]?.values.map( filter => (
                        <li key={filter.id} className='flex gap-2 text-sm text-slate-500 my-1'>
                            <Link href={ `/search/${termSearch}?${ sort.id ? `sort=${sort.id.toUpperCase()}` : '' }&price=${filter.id}` }>
                                {filter.name}
                            </Link>
                            <span className='w-3.5 text-slate-400'>({filter.results})</span>
                        </li>
                    ))
                }
            </ul>
            
            {
                availableFilters.length === 0 ? <h3 className='text-slate-400'>No hay filtros disponibles</h3>
                : <div className='flex flex-1'>
                    <form className='flex items-center gap-1'>
                        <input
                            className='w-24 h-8 rounded-md bg-white text-slate-300 text-xs text-left'
                            type='number'
                            placeholder='Mínimo'
                            name='minPrice'
                            
                        />
                        <hr className='ui_hr' />
                        <input
                            className='w-24 h-8 rounded-md bg-white text-slate-300 text-xs text-left'
                            type='number'
                            placeholder='Máximo'
                            name='maxPrice'
                        />

                        <button className='border-none w-9 h-9 rounded-full mx-auto my-auto p-3 bg-slate-300' type='submit' >
                            <ArrowRight />
                        </button>
                    </form>
                </div>
            }
        </section>
    )
}