'use client'

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ArrorLowShort, ArrowUpShort } from '../icons/Arrows';
import { AppContext } from '@/store/context';
import { Sort } from './interfaces';

export default function Sort() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const { termSearch, selectedSort, sortAvailables:sorts, hanldleSelectedSort } = useContext(AppContext);

    const toogleOption = () => {
        setShow(!show)
    }

    const changeSelected = ( sort: Sort ) => {
        hanldleSelectedSort( sort );
        setShow( false );

        if( termSearch ) {
            console.log("PAso")
            router.push(`/search/${termSearch}?sort=${sort.id.toUpperCase()}`);
        } else {
            router.push('/error');
        }
        
    }

    return (
        <div className='mx-auto hidden sm:hidden md:flex lg:flex xl:flex justify-end container'>
            <div className='relative inline-block'>
                    <div className='flex items-center justify-between'>
                        <button
                            type='button'
                            onClick={toogleOption}
                            className='inline-flex w-full items-center justify-center
                                gap-x-1.5 px-3 py-2 text-sm text-gray-900 
                                font-semibold transition-all
                                '
                            id='menu-button'
                            aria-expanded='true'
                            aria-haspopup='true'>
                            Ordenar por <span className='font-normal'>{selectedSort.name}</span>
                            <span className='transition-all'>
                                {
                                    (show)
                                        ? <ArrorLowShort />
                                        : <ArrowUpShort />
                                }
                            </span>
                        </button>
                    </div>

                {show && (

                    <div className='absolute 
                            right-0 mt-2 w-38
                            origin-top-right rounded-md
                            bg-white shadow-lg ring-1 
                            ring-black ring-opacity-5 
                            focus:outline-none'
                        role='menu' aria-orientation='vertical' aria-labelledby='menu-button' tabIndex={1}>
                        <div className='py-0 divide-y divide-gray-300' role='none'>
                            <ul className='rounded
                                    [&>*:nth-child(3)]:rounded-b-md
                                    [&>*:nth-child(1)]:rounded-t-md'>
                                {
                                    sorts.map(sort => (
                                        <li key={sort.id} className={`
                                                text-gray-700 block px-6 py-3 text-sm transition-all
                                                ${(sort.id === selectedSort.id) ? 'border-l-4 border-blue-700' : ''}
                                                hover:bg-slate-200 hover:border-l-4 hover:border-blue-300`}
                                            role='menuitem'
                                            tabIndex={-1} id='menu-item-0'>
                                            <button onClick={() => changeSelected(sort)}>
                                                {sort.name}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}