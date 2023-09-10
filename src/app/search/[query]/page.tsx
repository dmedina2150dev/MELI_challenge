import CardList from "@/components/products/CardList";
import React from "react";

type PageProps = {
	params: { query: string };
	searchParams?: { [key: string]: string | string[] | undefined };
}

const fetchProducts = async ( query: string ) => {

	return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=10`)
		.then( res => res.json() )
}

export default async function SearchPage({ params }: PageProps) {

	const { query } = params;
	const products = await fetchProducts(query);

	console.log({query})
	return  <CardList products={ products.results } />
}