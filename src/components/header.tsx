'use client'
import { useState } from "react"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hooks";

const Header: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const sortBy = searchParams.get("sortBy");
    const search = searchParams.get("search")||'';
    const [searchValue, setSearchValue] = useState(search)
    const carts = useAppSelector((state: RootState) => state.cart.carts)
    const handleSearchFilter = () => {
        const params = new URLSearchParams();
        if (category) params.set("category", category);
        if (sortBy) params.set("sortBy", sortBy);
        if(searchValue)params.set("search", searchValue);
        router.push(`/products?${params.toString()}`);
    };

    const handleSearch = (val: string) => {
        setSearchValue(val)
        if (!val) {
            const params = new URLSearchParams();
            if (category) params.set("category", category);
            if (sortBy) params.set("sortBy", sortBy);
            params.delete("search");
            router.push(`/products?${params.toString()}`);
        }
    }

    return (
        <div className="flex items-center justify-between w-full py-4">
            <Link href='/' className="text-xl font-semibold">Ecommerce Store</Link>
            <div className="flex items-center gap-4">
                <input placeholder="search" defaultValue={searchValue} onChange={(e) => handleSearch(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearchFilter()
                }} className="border border-gray-200 px-2 py-1 text-sm rounded-md sm:block hidden" />
                <Link href='/cart' className="relative">
                    <Image src='/images/cart.svg' alt="cart" height={20} width={20} className="h-10 object-contain w-6" /> {carts.length > 0 && <span className="absolute top-1 -right-1 h-4 w-4 bg-red-600 rounded-full flex items-center justify-center p-1 text-white text-xs">{carts.length}</span>}</Link>
            </div>
        </div>
    )
}

export default Header