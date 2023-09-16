/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useContext, useEffect } from 'react'
import { redirect } from 'next/navigation'

import { AppContext } from '@/store/context'

import CardList from './CardList'
import { ResponseMethod } from './interfaces/requests'
import { useProducts, useSort, useFilterAvailable } from '@/hooks'
import Filters from '../filters-price/Filters'
import Sorting from '../sort/Sort'

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
    <section className='min-h-screen min-w-full'>
      <div className='container mx-auto flex justify-end'>
        <Sorting />
      </div>
      <div className='flex items-start mx-auto container'>
        <div className='hidden sm:hidden md:block lg:block xl:block'>
          <Filters />
        </div>
        <CardList products={products} />
      </div>
    </section>
  )
}
