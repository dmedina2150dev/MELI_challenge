
import SearchForm from '../search/SearchForm'

export default function Navbar() {

    return (
        <nav className="
            w-3/4 sm:w-3/5 md:w-2/4 lg:w-2/3 xl:w-3/5
            flex justify-center items-center gap-1
            transition-all
            m-auto z-20 top-0 p-4">
            <div className="">
                <a href="/" className="flex items-center">
                    <img src="/logo_ml.png" className="h-8 mr-3" alt="Meli Logo" />
                </a>
            </div>
            <div className="w-full">
                <SearchForm />
            </div>
        </nav>
    )
}