'use client'

import { useRouter, useSearchParams } from "next/navigation";

function LoadMore(){
    const router = useRouter()
      const searchParams = useSearchParams();
        const page = searchParams.get("page")||1;
const handleLoadMore = () =>{
    router.push(`?page=${Number(page)+1}`,{scroll:false})
}

    return(
        <button type="button" className="py-2 px-4 bg-black rounded-lg text-white max-w-28 m-auto" onClick={handleLoadMore}>Load More</button>
    )
}
export default LoadMore