import Link from 'next/link'

export const SortOptions = () => {
    return (
        <div
            className='absolute
                right-0 z-10 mt-2 w-38
                origin-top-right rounded-md
                bg-white shadow-lg ring-1 
                ring-black ring-opacity-5 
                focus:outline-none'
            role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={1}>
            <div className='py-0 divide-y divide-gray-300' role='none'>
                <Link href={'localhost'} className='
                    text-gray-700 block px-6 py-3 text-sm transition-all
                    border-l-4 border-blue-700 rounded
                    hover:bg-slate-200 hover:border-l-4 hover:border-blue-300' 
                    role='menuitem'     
                    tabIndex={-1} id='menu-item-0'>
                    Account settings
                </Link>
                <Link href={'localhost'} className='
                    text-gray-700 block px-6 py-3 text-sm transition-all
                    active:border-l-4 active:border-blue-700 rounded
                    hover:bg-slate-200 hover:border-l-4 hover:border-blue-300' 
                    role='menuitem'     
                    tabIndex={-1} id='menu-item-0'>
                    Account settings
                </Link>
                <Link href={'localhost'} className='
                    text-gray-700 block px-6 py-3 text-sm transition-all
                    active:border-l-4 active:border-blue-700 rounded
                    hover:bg-slate-200 hover:border-l-4 hover:border-blue-300' 
                    role='menuitem'     
                    tabIndex={-1} id='menu-item-0'>
                    Account settings
                </Link>
            
            </div>
        </div>
    )
} 