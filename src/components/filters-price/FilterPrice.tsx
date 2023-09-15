'use client'
import { useFilter } from '@/hooks'
import { ItemPrice } from './ItemPrice'

export const FilterPrice = () => {
  const { availableFilters } = useFilter()
  return (
    <ul>
      {availableFilters[0]?.values.map(filter => (<ItemPrice key={filter.id} price={filter} />))}
    </ul>
  )
}
