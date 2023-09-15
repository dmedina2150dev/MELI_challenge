'use client'
import { useFilter } from '@/hooks'
import { ArrowRight } from '../icons/Arrows'

interface Props {
    bgColorBtn?: string
}

export const FormPrice = (props: Props) => {
  const { price, onSubmitPrice, onChangePrice } = useFilter()

  return (
    <div className='flex flex-1'>
      <form className='flex items-center gap-1' onSubmit={(e) => { e.preventDefault(); onSubmitPrice() }} autoComplete='off'>
        <input
          className='w-24 h-8 rounded-md bg-white text-slate-500 text-xs text-left'
          type='number'
          name='minPrice'
          id='minPrice'
          value={price.minPrice}
          onChange={onChangePrice}
          placeholder='Mínimo'
          autoComplete='off'
        />
        <hr className='w-2 h-px mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700' />
        <input
          className='w-24 h-8 rounded-md bg-white text-slate-500 text-xs text-left'
          type='number'
          placeholder='Máximo'
          autoComplete='off'
          name='maxPrice'
          id='maxPrice'
          value={price.maxPrice}
          onChange={onChangePrice}
        />

        <button
          type='submit'
          className={`border-none w-9 h-9 rounded-full mx-auto my-auto p-3 ${(!props.bgColorBtn) ? 'bg-slate-300' : props.bgColorBtn} hover:bg-slate-500`}
        >
          <ArrowRight />
        </button>
      </form>
    </div>
  )
}
