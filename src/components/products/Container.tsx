'use client'

import { useProducts } from '@/hooks/useProducts'
import CardList from './CardList'
import { ResponseMethod } from './interfaces/requests'
import { useContext, useEffect } from 'react'
import { AppContext } from '@/store/context'

interface Props {
    response: ResponseMethod
}

export default function Container({ response }: Props) {

    const { products, loadProducts } = useContext(AppContext);

    useEffect(() => {
        loadProducts( useProducts({ searchsProducts: response.results}) );
    }, [response])
    
    return (
        <>
            <CardList products={ products } />
        </>
    )
}