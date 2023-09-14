import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { buildUrl } from '@/helpers/buildUrl'
// import { AppContext } from '@/store/context'
import { useAppStore } from '.'

const initPrice = {
  maxPrice: 0,
  minPrice: 0
}

export const useFilter = () => {
  const router = useRouter()

  const [price, setPrice] = useState(initPrice)
  // const { termSearch: query, selectedSort: sort, availableFilters, hanldleSelectedPrice } = useContext(AppContext)
  const { termSearch: query, selectedSort: sort, availableFilters, setCurrentPrice } = useAppStore()

  const onSelectFilter = (price: string) => {
    // hanldleSelectedPrice(price)
    setCurrentPrice(price)
    const url = buildUrl(query!, sort!, price)
    router.push(url)
  }

  const onChangePrice = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target
    setPrice({
      ...price,
      [name]: value
    })
  }

  const onSubmitPrice = (): void => {
    if (!price.minPrice || !price.maxPrice) {
      return
    }

    const newFilter = `${price.minPrice}-${price.maxPrice}`
    setCurrentPrice(newFilter)
    const url = buildUrl(query!, sort!, newFilter)

    router.push(url)
  }

  return {
    price,
    availableFilters,

    onChangePrice,
    onSubmitPrice,
    onSelectFilter
  }
}
