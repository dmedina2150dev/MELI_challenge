'use client'

import { useProducts } from '@/hooks/useProducts'
import CardList from './CardList'
import { ProductResponse, ResponseMethod } from './interfaces/requests'

interface Props {
    response: ResponseMethod
}

export default function Container({ response }: Props) {

    const products = useProducts({ searchsProducts: response.results});

    return (
        <>
            <CardList products={ products } />
        </>
    )
}