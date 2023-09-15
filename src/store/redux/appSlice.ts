import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, SearchResult } from '@/components/products/interfaces'
import { Sort } from '@/components/sort/interface/sort'
import { Filter } from '@/components/filters-price/interfaces/filter'

export interface AppState {
    termSearch: string;
    products: Product[];
    sortAvailables: Sort[];
    availableFilters: Filter[];
    selectedSort: Sort;
    selectedPrice: string;

}

const initialState: AppState = {
  termSearch: '',
  products: [],
  sortAvailables: [],
  availableFilters: [],
  selectedSort: '',
  selectedPrice: ''
} as unknown as AppState

export const appSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadStore: (state, action: PayloadAction<SearchResult>) => {
      state.products = action.payload.products
      state.availableFilters = action.payload.availableFilters
      state.sortAvailables = action.payload.sortAvailables
    },
    loadSortCurrent: (state, action: PayloadAction<Sort>) => {
      state.selectedSort = action.payload
    },
    loadFilterCurrent: (state, action: PayloadAction<string>) => {
      state.selectedPrice = action.payload
    },
    searchTerm: (state, action: PayloadAction<string>) => {
      state.termSearch = action.payload
    }
  }
})

export const { loadStore, loadSortCurrent, loadFilterCurrent, searchTerm } = appSlice.actions

export default appSlice.reducer
