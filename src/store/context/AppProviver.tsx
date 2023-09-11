import React, { useReducer } from 'react'
import { ContextState, appReducer } from './appReducer';
import { AppContext } from '.';
import { Product } from '@/components/products/interfaces/product';

interface AppProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

const INITIAL_STATE: ContextState = {
    termSearch: '',
    products: []
}

export const AppProvider = ({ children }: AppProviderProps)  => {

    const [ appState, dispatch ] = useReducer( appReducer, INITIAL_STATE );
    const { termSearch, products } = appState;

    
    const addTermSearch = (term: string) => {
        dispatch({ type: '[Searchs] Add term search', payload: term });
    }

    const loadProducts = (products: Product[]) => {
        dispatch({ type: '[Products] Load products', payload: products });
    }

    return (
        <AppContext.Provider value={{
            termSearch,
            products,

            addTermSearch,
            loadProducts
        }}>
            { children }
        </AppContext.Provider>
    )

}