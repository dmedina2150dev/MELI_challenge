'use client'

// import { useContext } from 'react'
// import { AppContext } from '@/store/context'
import { buildUrl } from '@/helpers/buildUrl'
import { useRouter } from 'next/navigation'
import Filters from '../products/Filters'
import { useAppStore } from '@/hooks'
import { Sort } from '../sort/interface/sort'

export default function FooterOptions () {
  const router = useRouter()
  // const { termSearch, selectedSort, sortAvailables: sorts, selectedPrice, hanldleSelectedSort } = useContext(AppContext)
  const { termSearch, selectedSort, sortAvailables: sorts, selectedPrice, setCurrentSort } = useAppStore()

  const changeSelected = (sort: Sort) => {
    setCurrentSort(sort)

    if (termSearch) {
      const url = buildUrl(termSearch, sort, selectedPrice)

      router.push(url)
    } else {
      router.push('/error')
    }
  }

  return (
    <>
      <div className='w-full flex flex-col gap-4'>
        <div className='px-4 flex justify-start gap-3' role='none'>
          <h3 className='text-gray-500'>Ordenar por:</h3>
          <ul className='flex items-center gap-1'>
            {
              sorts.map(sort => (
                <li
                  key={sort.id} className={`block px-6 py-1 rounded text-xs bg-blue-700 text-white transition-all
                        ${(sort.id === selectedSort.id) ? 'border-blue-700' : ''}`}
                  role='menuitem'
                  tabIndex={-1} id='menu-item-0'
                >
                  <button onClick={() => changeSelected(sort)}>
                    {sort.name}
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='px-4 pb-12 flex justify-start gap-3 text-gray-500' role='none'>
          <Filters />
        </div>
      </div>
    </>
  )
}
