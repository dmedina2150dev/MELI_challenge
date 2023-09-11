import React from "react";

import Container from "@/components/products/Container";

type PageProps = {
	params: { query: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}

const fetchSearchsProducts = async ( query: string ) => {
	return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=10`)
		.then( res => res.json() )
}

export default async function SearchPage({ params }: PageProps) {

	const { query } = params;
	const search = await fetchSearchsProducts(query);

	return  <Container response={ search } />
}