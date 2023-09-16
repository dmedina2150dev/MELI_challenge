import Filters from '../filters-price/Filters'
import { SortMobile } from '../sort/SortMobile'

export default function FooterOptions () {
  return (
    <>
      <div className='w-full flex flex-col gap-4'>
        <div className='px-4 flex justify-start gap-3' role='none'>
          <SortMobile />
        </div>
        <div className='px-4 pb-16 flex justify-start gap-3 text-gray-500' role='none'>
          <Filters />
        </div>
      </div>
    </>
  )
}
