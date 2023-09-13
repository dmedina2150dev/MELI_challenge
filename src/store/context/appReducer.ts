import { Filter, Product, Sort } from '@/components/products/interfaces';


export interface ContextState {
    termSearch: string;
    products: Product[];
    sortAvailables: Sort[];
    availableFilters: Filter[];
    selectedSort: Sort
}

export type AppActions = 
    | { type: '[Searchs] Add term search', payload: string }
    | { type: '[Products] Load products', payload: Product[] }
    | { type: '[Products - Sort] Load sort available for products', payload: Sort[] }
    | { type: '[Products - Sort] Selected Sort', payload: Sort }
    | { type: '[Products - Filter] Load filter available for products', payload: Filter[] }

export const appReducer = (state: ContextState, action: AppActions ): ContextState => {
    // console.log(state)
    switch ( action.type ) {
        case '[Searchs] Add term search':
            return {
                ...state,
                termSearch: action.payload
            }
        case '[Products] Load products':
            return {
                ...state,
                products: [...action.payload]
            }
        case '[Products - Sort] Load sort available for products':
            return {
                ...state,
                sortAvailables: [...action.payload]
            }
        case '[Products - Sort] Selected Sort':
            return {
                ...state,
                selectedSort: action.payload
            }
        case '[Products - Filter] Load filter available for products':
            return {
                ...state,
                availableFilters: [...action.payload]
            }
        default:
            return state;
    }
} 