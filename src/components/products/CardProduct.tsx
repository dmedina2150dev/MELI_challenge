import { Product } from './interfaces/product'

interface CardProductProps {
	product: Product
}

export default function CardProduct({ product }: CardProductProps) {
	return (
		<>
			<article className="
				w-full h-auto p-1 sm:p-0 transition-all
				flex gap-1 flex-col flex-wrap space-x-4 lg:flex-row xl:flex-row">
				<div className="
					m-auto
					w-40 sm:w-48 md:w-48 xl:w-48
					h-40 sm:h-48 md:h-48 xl:h-48
					rounded flex-shrink-0">
					<img
						src={ product.picture }
						alt={ product.title }
						className="w-full h-full object-contain" />
				</div>
				<div className="flex flex-col gap-2 sm:gap-2  pt-4 flex-1 min-w-0">
					<span className="
						text-gray-800 sm:text-gray-900 
						text-lg sm:text-lg font-extralight sm:font-normal">
						{ product.price.currency } {new Intl.NumberFormat().format(Number(product.price.amount))}
					</span>
					<h2 className="text-xl sm:text-lg text-gray-900 sm:font-semibold">
						{product.title}
					</h2>
					<p className="font-light text-emerald-600">
						En { product.installments.quantity } cuotas de { product.price.currency } {new Intl.NumberFormat().format(Number(product.installments.amount))}
					</p>
				</div>
				<div className="flex pt-4 -mt-6 sm:mt-0">
					<p className="text-gray-400 text-base">
						{product.address.city_name.replace(/^\w/, (c) => c.toUpperCase())}
					</p>
				</div>
			</article>
			<hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
		</>
	)
}