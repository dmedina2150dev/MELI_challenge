import { Filter, Sort } from '@/components/products/interfaces';

export function buildUrl(term: string, sort: Sort, price: string): string {

    let url = `/search/${term}`;
	
	if (term && price && sort) {
		console.log("los 3")
		url = `/search/${term}?sort=${sort.id.toUpperCase()}&price=${price}`
	} else if (term && sort.id !== '') { 
		console.log("term y sort")
		url = `/search/${term}?sort=${sort.id.toUpperCase()}`
	} else if (term && price ) {
		console.log("term y price")
		url = `/search/${term}?price=${price}`
	}

    return url;
}