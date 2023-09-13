import ArrowUpIcon from '@/components/icons/ArrowUp'

export default function Home () {
  return (
    <section className='min-h-screen -mt-24 grid place-content-center'>
      <div className='flex flex-col items-center gap-5 text-center text-xl  sm:text-2xl text-slate-300'>
        <span className='animate-bounce'>
          <ArrowUpIcon />
        </span>
        <h2>Consigue las mejores ofertas y productos</h2>
      </div>
    </section>
  )
}
