import { createContext } from 'react'
import { Filter, Product } from '@/components/products/interfaces'
import { Sort } from '@/components/sort/interface/sort'

export interface AppContextProps {
    termSearch: string;
    products: Product[];
    sortAvailables: Sort[];
    selectedSort: Sort;
    availableFilters: Filter[];
    selectedPrice: string;
    addTermSearch: (term: string) => void;
    loadProducts: (products: Product[]) => void;
    loadAvailableSort: (sorts: Sort[]) => void;
    hanldleSelectedSort: (sorts: Sort) => void;
    loadAvailableFilter: (filters: Filter[]) => void;
    hanldleSelectedPrice: (price: string) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)
