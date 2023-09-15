import { Filter } from '@/components/filters-price/interfaces/filter'

export const useFilterAvailable = (availableFilters: Filter[]) => {
  const filters = availableFilters.filter((exist: Filter) => exist.id === 'price')

  return filters
}
