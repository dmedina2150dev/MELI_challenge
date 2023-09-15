import { Product } from '.'
import { Sort } from '@/components/sort/interface/sort'
import { Filter } from '@/components/filters-price/interfaces/filter'

export interface SearchResult {
    products: Product[]
    sortAvailables: Sort[]
    availableFilters: Filter[]
}
