import { Sort } from '@/components/sort/interface/sort'

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
