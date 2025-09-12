import { productList } from "@/fake-data/product-list";
import { ProductType } from "@/types/product";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    let returnedData: ProductType[] = productList
    const search = searchParams.get("search")
    const sortBy = searchParams.get("sortBy")
    const category = searchParams.get("category")
    const page = searchParams.get("page") || 1
    if (page) returnedData = returnedData?.slice(0, Number(page) * 4)
    if (category) returnedData = returnedData.filter((item: ProductType) => item.category === category)
    if (search) returnedData = returnedData.filter((item: ProductType) => item.title.toLowerCase().includes(search.toLowerCase()))
    if (sortBy) handleSortData(returnedData, sortBy)
    return Response.json(returnedData)
}

function handleSortData(productList: ProductType[], sortBy: string) {
    switch (sortBy) {
        case 'low-to-high': {
            const data = productList.sort((a, b) => a.price - b.price)
            return data
        }
        case 'high-to-low': {
            const data = productList.sort((a, b) => b.price - a.price)
            return data
        }
        case 'highest-rated': {
            const data = productList.sort((a, b) => ((b.rating.rate - a.rating.rate)))
            return data
        }
        case 'a-to-z': {
            const data =// Sort by the 'name' property in ascending (A-Z) order
                productList.sort((a, b) => {
                    const nameA = a.title.toUpperCase(); // Convert to uppercase for case-insensitive sorting
                    const nameB = b.title.toUpperCase();

                    if (nameA < nameB) {
                        return -1; // nameA comes before nameB
                    }
                    if (nameA > nameB) {
                        return 1; // nameB comes before nameA
                    }
                    return 0; // names are equal
                });
            return data
        }
        case 'z-to-a': {
            const data =// Sort by the 'name' property in ascending (A-Z) order
                productList.sort((a, b) => {
                    const nameA = a.title.toUpperCase(); // Convert to uppercase for case-insensitive sorting
                    const nameB = b.title.toUpperCase();

                    if (nameA > nameB) {
                        return -1; // nameA comes before nameB
                    }
                    if (nameA < nameB) {
                        return 1; // nameB comes before nameA
                    }
                    return 0; // names are equal
                });
            return data
        }
        default: return productList
    }
}