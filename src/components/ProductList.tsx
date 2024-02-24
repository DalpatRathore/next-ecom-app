import { Product } from "@/types";
import NoResults from "./NoResults";
import ProductCard from "./ProductCard";

interface ProductListProps {
  title: string;
  products: Product[];
}
const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {products.length === 0 && <NoResults></NoResults>}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
