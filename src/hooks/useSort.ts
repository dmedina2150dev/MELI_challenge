import { Sort } from '@/components/products/interfaces'

interface Props {
    sort: Sort;
    availableSorts: Sort[];
}

export const useSort = ({ sort, availableSorts }: Props) => {
  const sorts: Sort[] = []

  sorts.push(sort)
  availableSorts.forEach((s: Sort) => sorts.push(s))

  return sorts
}
