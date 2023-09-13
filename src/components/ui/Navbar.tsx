/* eslint-disable @next/next/no-img-element */
import SearchForm from '../search/SearchForm'

export default function Navbar () {
  return (
    <nav className='
            container
            flex justify-center items-center gap-1
            transition-all
            m-auto z-20 top-0 p-4'
    >
      <div className=''>
        <a href='/' className='flex items-center'>
          <img src='/logo_ml.png' className='h-8 mr-3' alt='Meli Logo' />
        </a>
      </div>
      <div className='w-full'>
        <SearchForm />
      </div>
    </nav>
  )
}
