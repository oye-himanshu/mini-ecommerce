import { productList } from "@/fake-data/product-list";
import { ProductType } from "@/types/product";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let returnedData: ProductType[] = productList
    const search = searchParams.get("search")
    const sortBy = searchParams.get("sortBy")
    const category = searchParams.get("category")
    if (category) returnedData = returnedData.filter((item: ProductType) => item.category === category)
    if (search) returnedData = returnedData.filter((item: ProductType) => item.title.toLowerCase().includes(search.toLowerCase()))
    return Response.json(returnedData)
}