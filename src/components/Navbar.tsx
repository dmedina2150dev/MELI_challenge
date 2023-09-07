import SearchIcon from "./icons/Search";

export default function Navbar() {

    return (
        <nav
            className="flex justify-center items-center transition-all 
                        w-4/5 sm:w-3/5 md:w-2/4 xl:w-2/4
                        m-auto z-20 top-0 left-0 p-3">
            <div className="">
                <a href="/" className="flex items-center">
                    <img src="/logo_ml.png" className="h-8 mr-3" alt="Meli Logo" />
                </a>
            </div>
            <div className="w-full">
                <form autoComplete="false">
                    <div className="flex">
                        <div className="relative w-full">
                            <input
                                type="search"
                                className="
                                    block p-2.5 w-full 
                                    z-20 text-sm 
                                    text-gray-900 bg-gray-50 
                                    rounded-l-lg rounded-r-lg
                                    border-gray-100 outline-0 outline-transparent
                                    active:border-0 focus:border-0"
                                placeholder="Buscar productos, marcas y más"
                                required />
                            <button
                                type="submit"
                                className="absolute
                                    top-0 right-0 p-2.5 
                                    h-full text-sm font-medium 
                                    text-gray-600 bg-zinc-300 
                                    rounded-r-lg border border-zinc-300 
                                    focus:outline-none">
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </nav>
    )
}