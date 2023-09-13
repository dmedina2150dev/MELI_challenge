import { createContext } from 'react';
import { Filter, Product, Sort } from '@/components/products/interfaces';



export interface AppContextProps {
    termSearch: string;
    products: Product[];
    sortAvailables: Sort[];
    selectedSort: Sort;
    availableFilters: Filter[];
    addTermSearch: (term: string) => void;
    loadProducts: (products: Product[]) => void;
    loadAvailableSort: (sorts: Sort[]) => void;
    hanldleSelectedSort: (sorts: Sort) => void;
    loadAvailableFilter: (filters: Filter[]) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps );