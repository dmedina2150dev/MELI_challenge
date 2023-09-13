import { Filter } from "@/components/products/interfaces";

export const useFilter = (availableFilters: Filter[]) => {
    
    const filters = availableFilters?.filter( (exist: Filter) => exist.id === 'price' );

    return { filters }
}