import { productList } from "@/fake-data/product-list";

export async function GET(
    request: Request,
    { params }: { params: { productId: string } }
) {
    const { productId } = await params;
    const returnedData = productList.find((product) => product.id === Number(productId))
    return Response.json(returnedData)
}
