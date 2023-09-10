import { DATA_MOCK } from "@/components/products/database/base";
import CardProduct from "./CardProduct";
import { Product } from "./interfaces/product";

interface CardListProps {
  products: Product[]
}

export default function CardList({ products }: CardListProps) {

  return (
    <section className="
         bg-white shadow rounded
          mx-auto p-4
         w-3/4 sm:w-3/5 md:w-2/4 lg:w-2/3 xl:w-3/5">
      {
        products.map(product => (
          <CardProduct key={product.catalog_product_id} product={product} />
        ))
      }
    </section>
  )
}