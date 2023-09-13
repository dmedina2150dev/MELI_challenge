
import ContainerProducts from '@/components/products/ContainerProducts';

type PageProps = {
	params: { query: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}

async function fetchSearchsProducts( query: string, params: any) {
	let url = `https://api.mercadolibre.com/sites/MLA/search?q=${ query }&limit=10`;
	const sort = params['sort'];
	const price = params['price'];
	// console.log(params)
	if (sort) {
		url = `https://api.mercadolibre.com/sites/MLA/search?q=${ query }&sort=${ sort }&limit=10`
	} else if (price && sort) { 
		url = `https://api.mercadolibre.com/sites/MLA/search?q=${ query }&sort=${ sort }&price=${price}&limit=10`
	} else if (price) {
		url = `https://api.mercadolibre.com/sites/MLA/search?q=${ query }&price=${price}&limit=10`
	}
	// console.log(url)
	return fetch(url)
		.then(res => res.json());
}

export default async function SearchPage({ params, searchParams }: PageProps) {
	
	const response = await fetchSearchsProducts(params.query, searchParams);

	return  <ContainerProducts response={ response } />

}