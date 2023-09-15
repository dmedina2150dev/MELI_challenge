/* eslint-disable react/jsx-closing-tag-location */
'use client'

import { useFilter } from '@/hooks'
import { FormPrice } from './FormPrice'
import { FilterPrice } from './FilterPrice'

export default function Filters () {
  const { availableFilters } = useFilter()

  return (
    <section className='px-4'>
      <h4 className='font-normal'>{availableFilters[0]?.name || 'Precio'}</h4>
      {
        availableFilters.length === 0
          ? <h3 className='text-slate-400'>No hay filtros disponibles</h3>
          : <>
            <FilterPrice />
            <FormPrice />
          </>
        }
    </section>
  )
}
