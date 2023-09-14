import { Filter, Product, Sort } from '.'

export interface SearchResult {
    products: Product[]
    sortAvailables: Sort[]
    availableFilters: Filter[]
}
