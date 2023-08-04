import { ProductItem } from './ProductItem'

export function ProductList() {
  return (
    <div className="mt-12 grid-cols-1 grid md:grid-cols-2 gap-4">
      <ProductItem />
      <ProductItem />
    </div>
  )
}
