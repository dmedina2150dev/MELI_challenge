'use client'

import { useFilter } from '@/hooks'
import { Values } from './interfaces/filter'

interface Props {
    price: Values
}

export const ItemPrice = ({ price }: Props) => {
  const { onSelectFilter } = useFilter()
  return (
    <li className='flex gap-2 text-sm text-slate-500 my-1'>
      <button onClick={() => onSelectFilter(price.id)}>
        {price.name}
      </button>
      <span className='w-3.5 text-slate-400'>({price.results})</span>
    </li>
  )
}
