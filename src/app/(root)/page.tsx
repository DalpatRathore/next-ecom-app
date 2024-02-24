import { getBillboard } from "@/actions/getBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
export const revalidate = 0;
export default async function Home() {
  const billboard = await getBillboard("929f7749-0e8a-431c-81e0-11eab26b6e27");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}></Billboard>
      </div>
    </Container>
  );
}
