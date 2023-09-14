'use client'
export default function ErrorPage () {
  return (
    <section className='min-h-screen -mt-24 grid place-content-center'>
      <div className='flex flex-col items-center gap-5 text-center text-xl  sm:text-2xl text-slate-300'>
        <h3 className='text-6xl'>Ups! Error</h3>
        <h2>Ocurrio un error en nuestro sistema</h2>
      </div>
    </section>
  )
}
