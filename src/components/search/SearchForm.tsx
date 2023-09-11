'use client'

import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { searchSchema } from '../products/schema/search'
import SearchIcon from '../icons/Search'
import { useContext } from 'react'
import { AppContext } from '@/store/context'

type FormData = z.infer<typeof searchSchema>;

export default function SearchForm() {
    const router = useRouter()

    const { termSearch, addTermSearch } = useContext(AppContext)

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm<FormData>({
        resolver: zodResolver<any>(searchSchema),
        defaultValues: {
            search: termSearch
        }
    })

    async function onSubmit(data: FormData) {
        addTermSearch(data.search);
        router.push(`/search/${ data.search }`)
    }


    return (
        <form autoComplete='false' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex'>
                <div className='relative w-full'>
                    <input
                        type='search'
                        { ...register('search', { required: true }) }
                        name='search'
                        id='search'
                        autoComplete='off'
                        placeholder='Buscar productos, marcas y más'
                        className='
                            block p-2.5 w-full text-sm 
                            text-gray-800 bg-gray-50 
                            rounded-l-lg rounded-r-lg
                            border-gray-100 outline-0 outline-offset-0 border-0'/>
                    <button
                        type='submit'
                        className='
                            absolute
                            top-0 right-0 p-2.5 
                            h-full text-sm font-medium 
                            text-gray-600 bg-zinc-300 
                            rounded-r-lg border border-zinc-300 
                            focus:outline-none'>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </form>
    )
}