import React, { useReducer } from 'react'
import { ContextState, appReducer } from './appReducer';
import { AppContext } from '.';
import { Product, Sort } from '@/components/products/interfaces';



interface AppProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const INITIAL_STATE: ContextState = {
    termSearch: '',
    products: [],
    sortAvailables: [],
    selectedSort: { id: '', name: '' },
}

export const AppProvider = ({ children }: AppProviderProps)  => {

    const [ appState, dispatch ] = useReducer( appReducer, INITIAL_STATE );
    const { termSearch, products, sortAvailables, selectedSort } = appState;

    
    const addTermSearch = (term: string) => {
        dispatch({ type: '[Searchs] Add term search', payload: term });
    }

    const loadProducts = (products: Product[]) => {
        dispatch({ type: '[Products] Load products', payload: products });
    }

    const loadAvailableSort = (sorts: Sort[]) => {
        dispatch({ type: '[Products - Sort] Load sort available for products', payload: sorts });
    }

    const hanldleSelectedSort = ( sort: Sort ) => {
        dispatch({ type: '[Products - Sort] Selected Sort', payload: sort });
    }

    return (
        <AppContext.Provider value={{
            termSearch,
            products,
            sortAvailables,
            selectedSort,
            
            addTermSearch,
            loadProducts,
            loadAvailableSort,
            hanldleSelectedSort
        }}>
            { children }
        </AppContext.Provider>
    )

}