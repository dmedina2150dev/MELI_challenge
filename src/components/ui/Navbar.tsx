import Image from 'next/image'
import SearchForm from '../search/SearchForm'

export default function Navbar () {
  return (
    <nav className='
            container
            flex justify-center items-center gap-1
            transition-all
            m-auto relative z-50 top-0 p-4'
    >
      <div className=''>
        <a href='/' className='flex items-center'>
          <Image
            src='/logo_ml.png'
            width={40}
            height={40}
            className='h-8 mr-3'
            alt='Meli Logo'
            priority
          />
        </a>
      </div>
      <div className='w-full'>
        <SearchForm />
      </div>
    </nav>
  )
}
