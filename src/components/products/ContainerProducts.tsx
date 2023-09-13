'use client'

import { useContext, useEffect } from 'react'

import { AppContext } from '@/store/context'
import Sort from './Sort';
import CardList from './CardList'
import { ResponseMethod } from './interfaces/requests'
import { useProducts, useSort, useFilter, useFilterAvailable } from '@/hooks'
import Filters from './Filters';
import { redirect } from 'next/navigation';


interface Props {
    response: ResponseMethod
}

export default function ContainerProducts({ response }: Props) {

    const { products, termSearch, loadProducts, loadAvailableSort, loadAvailableFilter } = useContext(AppContext);


    useEffect(() => {
        loadProducts(useProducts({ searchsProducts: response.results }));
        loadAvailableSort(useSort({ sort: response.sort, available_sorts: response.available_sorts }));
        loadAvailableFilter(useFilterAvailable(response.available_filters));
    }, [response]);
    
    if( response.results.length === 0 && termSearch) {
        redirect('/');
    }

    return (
        <section className='min-h-screen min-w-full relative -z-10'>
            <Sort />
            <div className='flex items-start mx-auto container'>
                <Filters />
                <CardList products={products} />
            </div>
        </section>
    )
}