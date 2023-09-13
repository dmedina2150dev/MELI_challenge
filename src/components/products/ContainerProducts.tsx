'use client'

import { useContext, useEffect } from 'react'

import { AppContext } from '@/store/context'
import Sort from './Sort';
import CardList from './CardList'
import { ResponseMethod } from './interfaces/requests'
import { useProducts, useSort, useFilter } from '@/hooks'
import Filters from './Filters';


interface Props {
    response: ResponseMethod
}

export default function ContainerProducts({ response }: Props) {

    const { products ,loadProducts, loadAvailableSort, loadAvailableFilter } = useContext(AppContext);
    const { filters } = useFilter(response.available_filters);

    useEffect(() => {
        loadProducts(useProducts({ searchsProducts: response.results }));
        loadAvailableSort(useSort({ sort: response.sort, available_sorts: response.available_sorts }));
        loadAvailableFilter(filters)
    }, [response]);

    return (
        <section className='min-h-screen min-w-full'>
            <Sort />
            <div className='flex items-start mx-auto container'>
                <Filters />
                <CardList products={products} />
            </div>
        </section>
    )
}