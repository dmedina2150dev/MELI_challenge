import { createContext } from 'react'
import { Filter, Product, Sort } from '@/components/products/interfaces'

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
