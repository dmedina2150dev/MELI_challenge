import { createContext } from 'react';
import { Product } from '@/components/products/interfaces/product';


export interface AppContextProps {
    termSearch: string;
    products: Product[];
    addTermSearch: (term: string) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps );