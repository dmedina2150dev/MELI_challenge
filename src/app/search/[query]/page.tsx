
import ContainerProducts from '@/components/products/ContainerProducts';

type PageProps = {
	params: { query: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}

async function fetchSearchsProducts( query: string, params: any) {
	let url = `https://api.mercadolibre.com/sites/MLA/search?q=${ query }&limit=10`;
	const sort = params['sort'];

	if (sort) {
		url = `https://api.mercadolibre.com/sites/MLA/search?q=${ query }&sort=${ sort }&limit=10`
	}
		
	return fetch(url)
		.then(res => res.json());
}

export default async function SearchPage({ params, searchParams }: PageProps) {
	
	const response = await fetchSearchsProducts(params.query, searchParams);

	return  <ContainerProducts response={ response } />

}