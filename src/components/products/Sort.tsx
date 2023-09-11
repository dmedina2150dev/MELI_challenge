'use client'

import { useState } from 'react';
import { ArrorLowShort, ArrowUpShort } from '../icons/Arrows';
import { SortOptions } from './SortOptions';

export default function Sort() {
    const [show, setShow] = useState(false);

    const toogleOption = () => {
        setShow( !show )
    }

    return (
        <div className='mx-auto w-3/4 sm:w-3/5 md:w-2/4 lg:w-2/3 xl:w-3/5 flex justify-end'>
            <div className='relative inline-block'>
                <div className='flex items-center justify-between'>
                    <button
                        type='button'
                        onClick={ toogleOption }
                        className='inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm text-gray-900 transition-all' 
                        id='menu-button'
                        aria-expanded='true'
                        aria-haspopup='true'>
                        Ordenar por <span>Más relevantes</span>
                        {
                            (show)
                            ? <ArrorLowShort />
                            : <ArrowUpShort />
                        }
                        
                        
                    </button>
                </div>
                
                { show && ( <SortOptions /> ) }
            </div>
        </div>
    )
}