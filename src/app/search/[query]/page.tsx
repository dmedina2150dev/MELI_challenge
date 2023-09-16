import type { Metadata } from 'next'
import ContainerProducts from '@/components/products/ContainerProducts'
import { formatAndCapitalize } from '@/helpers/formatAndCapitalize'

type PageProps = {
 params: { query: string }
 searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata ({ params, searchParams }:PageProps): Promise<Metadata> {
  const { query } = params
  const title = formatAndCapitalize(query)
  return {
    title: `${title} | MELI Chile`
  }
}

async function fetchSearchsProducts (query: string, params: any) {
  let url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
  const sort = params.sort
  const price = params.price

  url += (price) ? `&price=${price}` : ''
  url += (sort) ? `&sort=${sort}` : ''
  url += '&limit=10'

  return fetch(url, { cache: 'no-cache' })
    .then(res => res.json())
}

export default async function SearchPage ({ params, searchParams }: PageProps) {
  const response = await fetchSearchsProducts(params.query, searchParams)

  return <ContainerProducts response={response} />
}
