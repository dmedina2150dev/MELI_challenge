/* eslint-disable react/jsx-closing-tag-location */
'use client'

import { ArrowRight } from '../icons/Arrows'
import { useFilter } from '@/hooks'

export default function Filters () {
  const { price, availableFilters, onSubmitPrice, onChangePrice, onSelectFilter } = useFilter()

  return (
    <section className='px-4 hidden sm:hidden md:block lg:block xl:block'>
      <h4 className='font-semibold'>{availableFilters[0]?.name || 'Precio'}</h4>
      {
                availableFilters.length === 0
                  ? <h3 className='text-slate-400'>No hay filtros disponibles</h3>
                  : <>
                    <ul>
                      {
                              availableFilters[0]?.values.map(filter => (
                                <li key={filter.id} className='flex gap-2 text-sm text-slate-500 my-1'>
                                  {/* <Link href={ `/search/${termSearch}?${ sort.id ? `sort=${sort.id.toUpperCase()}` : '' }&price=${filter.id}` }> */}
                                  <button onClick={() => onSelectFilter(filter.id)}>
                                    {filter.name}
                                  </button>
                                  {/* </Link> */}
                                  <span className='w-3.5 text-slate-400'>({filter.results})</span>
                                </li>
                              ))
                        }
                    </ul>

                    <div className='flex flex-1'>
                      <form className='flex items-center gap-1' onSubmit={(e) => { e.preventDefault(); onSubmitPrice() }} autoComplete='off'>
                        <input
                          className='w-24 h-8 rounded-md bg-white text-slate-500 text-xs text-left'
                          type='number'
                          name='minPrice'
                          id='minPrice'
                          value={price.minPrice}
                          onChange={onChangePrice}
                          placeholder='Mínimo'
                          autoComplete='off'
                        />
                        <hr className='ui_hr' />
                        <input
                          className='w-24 h-8 rounded-md bg-white text-slate-500 text-xs text-left'
                          type='number'
                          placeholder='Máximo'
                          autoComplete='off'
                          name='maxPrice'
                          id='maxPrice'
                          value={price.maxPrice}
                          onChange={onChangePrice}
                        />

                        <button
                          type='submit'
                          className='border-none w-9 h-9 rounded-full mx-auto my-auto p-3 bg-slate-300 hover:bg-slate-500'
                        >
                          <ArrowRight />
                        </button>
                      </form>
                    </div>
                  </>
        }
    </section>
  )
}
