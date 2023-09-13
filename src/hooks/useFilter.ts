import { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import { buildUrl } from '@/helpers/buildUrl';
import { AppContext } from '@/store/context';

const init_price = {
    maxPrice: 0,
    minPrice: 0
}

export const useFilter = () => {
    
    const router = useRouter();
    
    const [price, setPrice] = useState(init_price);
    const { termSearch:query, selectedSort:sort, availableFilters, hanldleSelectedPrice } = useContext(AppContext);
    
    const onSelectFilter = (price: string ) => {
        hanldleSelectedPrice(price);
        const url = buildUrl(query!, sort!, price);
        router.push(url);
    }
    
    const onChangePrice = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { value, name } = target
        setPrice({
            ...price,
            [name]: value
        });
    }

    const onSubmitPrice = (): void => {
        if (!price.minPrice || !price.maxPrice) {
            return;
        }
        console.log(price)

        const newFilter = `${price.minPrice}-${price.maxPrice}`;
        hanldleSelectedPrice(newFilter);
        const url = buildUrl(query!, sort!, newFilter);

        router.push(url);
    }

    return {
        price,
        availableFilters,

        onChangePrice,
        onSubmitPrice,
        onSelectFilter
    }
}