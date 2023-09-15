import { loadFilterCurrent, loadSortCurrent, loadStore, searchTerm } from '@/store/redux/appSlice'
import { useAppSelector, useAppDispatch } from './useStore'
import { SearchResult } from '@/components/products/interfaces'
import { Sort } from '@/components/sort/interface/sort'

export const useAppStore = () => {
  const { products, availableFilters, sortAvailables, selectedSort, selectedPrice, termSearch } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const loadStoreFull = (searchs: SearchResult) => {
    dispatch(loadStore(searchs))
  }

  const loadTerm = (term: string) => {
    dispatch(searchTerm(term))
  }

  const setCurrentSort = (sort: Sort) => {
    dispatch(loadSortCurrent(sort))
  }

  const setCurrentPrice = (price: string) => {
    dispatch(loadFilterCurrent(price))
  }

  return {
    products,
    availableFilters,
    sortAvailables,
    selectedSort,
    selectedPrice,
    termSearch,

    loadStoreFull,
    loadTerm,
    setCurrentSort,
    setCurrentPrice
  }
}
