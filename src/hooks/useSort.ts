import { Sort } from "@/components/products/interfaces";


interface Props {
    sort: Sort;
    available_sorts: Sort[];
}

export const useSort = ({ sort, available_sorts }: Props) => {

    let sorts: Sort[] = [];

    sorts.push(sort);
    available_sorts.forEach( s => sorts.push(s))

    return sorts
}