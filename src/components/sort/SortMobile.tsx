import { useAppStore } from '@/hooks'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Sort } from './interface/sort'
import { buildUrl } from '@/helpers/buildUrl'

export const SortMobile = () => {
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
    <div className='flex flex-col px-4 gap-3'>
      <h3 className='font-normal text-gray-500'>Ordenar por:</h3>
      {
        sorts.length !== 0
          ? (
            <ul className='flex items-center gap-1'>
              {sorts.map(sort => (
                <li
                  key={sort.id} className={`block px-6 py-1 rounded text-xs bg-blue-700 text-white transition-all ${(sort.id === selectedSort.id) ? 'border-blue-700' : ''}`}
                  role='menuitem'
                  tabIndex={-1} id='menu-item-0'
                >
                  <button onClick={() => changeSelected(sort)}>
                    {sort.name}
                  </button>
                </li>
              ))}
            </ul>
            )
          : <h3 className='text-slate-400'>No hay metodos de ordenar disponibles</h3>
      }
    </div>
  )
}
