/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useContext, useEffect } from 'react'

import { AppContext } from '@/store/context'

import CardList from './CardList'
import { ResponseMethod } from './interfaces/requests'
import { useProducts, useSort, useFilterAvailable } from '@/hooks'
import Filters from './Filters'
import { redirect } from 'next/navigation'
import Sorting from './Sort'

interface Props {
    response: ResponseMethod
}

export default function ContainerProducts ({ response }: Props) {
  const { products, termSearch, loadProducts, loadAvailableSort, loadAvailableFilter } = useContext(AppContext)
  const newProducts = useProducts({ searchsProducts: response.results })
  const newSort = useSort({ sort: response.sort, availableSorts: response.available_sorts })
  const newFilter = useFilterAvailable(response.available_filters)

  useEffect(() => {
    loadProducts(newProducts)
    loadAvailableSort(newSort)
    loadAvailableFilter(newFilter)
  }, [response])

  if (response.results.length === 0 && termSearch) {
    redirect('/')
  }

  return (
    <section className='min-h-screen min-w-full relative -z-10'>
      <Sorting />
      <div className='flex items-start mx-auto container'>
        <Filters />
        <CardList products={products} />
      </div>
    </section>
  )
}
