import { Sort } from '@/components/products/interfaces'

export function buildUrl (term: string, sort: Sort, price: string): string {
  let url = `/search/${term}?`
  url += (price !== '') ? `&price=${price}` : ''
  url += (!sort) ? '' : `&sort=${sort.id}`

  return url
}
