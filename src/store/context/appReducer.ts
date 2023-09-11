import { Product } from "@/components/products/interfaces/product";

export interface ContextState {
    termSearch: string;
    products: Product[]
}

export type AppActions = 
    | { type: '[Searchs] Add term search', payload: string }
    | { type: '[Products] Load products', payload: Product[] }

export const appReducer = (state: ContextState, action: AppActions ): ContextState => {
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
        default:
            return state;
    }
} 