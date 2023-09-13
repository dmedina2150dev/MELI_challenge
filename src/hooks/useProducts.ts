import { Product } from '@/components/products/interfaces/product'
import { ProductResponse } from '@/components/products/interfaces/requests'

interface Props {
    searchsProducts: ProductResponse[]
}

export const useProducts = ({ searchsProducts }: Props): Product[] => {

    console.log({searchsProducts})

    const products: Product[] = searchsProducts?.map( product => ({
        id: product.id,
        title: product.title,
        price: {
            currency: product.installments?.currency_id || '$',
            amount: product.price.toString(),
            decimals: product.installments?.rate || 0
        },
        installments: {
            quantity: product.installments?.quantity || 1,
            amount: product.installments?.amount.toString() || product.price.toString()
        },
        address: {
            state_name: product.address.state_name,
            city_name: product.address.city_name
        },
        picture: `https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-V.webp`,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping
    }))

    return products;

}