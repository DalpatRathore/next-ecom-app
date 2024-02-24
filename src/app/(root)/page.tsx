import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
export const revalidate = 0;
export default async function Home() {
  const billboard = await getBillboard("929f7749-0e8a-431c-81e0-11eab26b6e27");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}></Billboard>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            products={products}
            title="Featured Products"
          ></ProductList>
        </div>
      </div>
    </Container>
  );
}
