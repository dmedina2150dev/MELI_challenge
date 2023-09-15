import { Sort } from '@/components/sort/interface/sort'

export function buildUrl (term: string, sort: Sort, price: string): string {
  let url = `/search/${term}?`
  url += (price !== '') ? `&price=${price}` : ''
  url += (!sort) ? '' : `&sort=${sort.id}`

  return url
}
