import CardProduct from './CardProduct';
import { Product } from "./interfaces/product";

interface CardListProps {
  products: Product[]
}

export default function CardList({ products }: CardListProps) {

  return (
    <section className="
      bg-white shadow rounded
        p-4 mx-auto container
        w-3/4 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4">
      {
        products.map(product => (
          <CardProduct
            key={`${product.id}-${product.title}-${product.address.state_name}`}
            product={product} 
          />
        ))
      }
    </section>
  )
}