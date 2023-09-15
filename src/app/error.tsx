'use client'

export default function ErrorPage () {
  return (
    <div className='w-full px-16 md:px-0 max-h-screen flex items-center justify-center'>
      <div className='bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg'>
        <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300'>500</p>
        <p className='text-lg md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>Error de sistema</p>
        <p className='text-gray-500 mt-8 py-2 border-y-2 text-center text-sm'>Oupss!! Ocurrio un error inesperado en nuestros servicios</p>
      </div>
    </div>
  )
}
