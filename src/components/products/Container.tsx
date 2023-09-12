'use client'

import { useContext, useEffect } from 'react'

import { AppContext } from '@/store/context'
import Sort from './Sort';
import CardList from './CardList'
import { ResponseMethod } from './interfaces/requests'
import { useProducts, useSort } from '@/hooks'

interface Props {
    response: ResponseMethod
}

export default function Container({ response }: Props) {

    const { products, loadProducts, loadAvailableSort, hanldleSelectedSort } = useContext(AppContext);

    useEffect(() => {
        loadProducts(useProducts({ searchsProducts: response.results }));
        hanldleSelectedSort( response.sort );
        loadAvailableSort(useSort({ sort: response.sort, available_sorts: response.available_sorts }));
    }, [response]);

    return (
        <section className='min-h-screen min-w-full'>
            <Sort />
            <CardList products={products} />
        </section>
    )
}