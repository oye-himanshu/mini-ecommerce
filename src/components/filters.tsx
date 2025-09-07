'use client'
import { productCategory } from "@/fake-data/product-category";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Filters: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    const sortBy = searchParams.get("sortBy");
    const search = searchParams.get("search");
    const [selectedCategory, setSelectedCategory] = useState<string>(category || '')
    const [selectedSortBy, setSelectedSortBy] = useState<string>(sortBy || '')

    const handleSortByFilter = (val: string) => {
        setSelectedSortBy(val);
        const params = new URLSearchParams();
        if (selectedCategory) params.set("category", selectedCategory);
        if (search) params.set("search", search);
        params.set("sortBy", val);
        router.push(`?${params.toString()}`);
    };

    const handleCategoryFilter = (val: string) => {
        setSelectedCategory(val)
        const params = new URLSearchParams();
        if (selectedSortBy) params.set("sortBy", selectedSortBy);
        if (search) params.set("search", search);
        params.set("category", val);
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="flex items-center sm:flex-row flex-col justify-between w-full gap-2">
            <div className="flex items-center gap-2 text-sm w-full">
                <p>Filter:</p>
                <select className="w-full border border-gray-200 px-2 py-1 rounded-md max-w-48" value={selectedCategory} onChange={(e) => handleCategoryFilter(e.target.value)}>
                    <option value='' className="text-sm">Filter by Category</option>
                    {
                        productCategory.map((category) => <option value={category} className="text-sm" key={category}>{category}</option>)
                    }
                </select>
            </div>
            <div className="flex items-center gap-2 text-sm w-full sm:justify-end">
                <p>Sort by:</p>
                <select className="w-full border border-gray-200 px-2 py-1 rounded-md max-w-48" value={selectedSortBy} onChange={(e) => handleSortByFilter(e.target.value)}>
                    <option value='' className="text-sm">Sort by</option>
                    <option value='low-to-high' className="text-sm">Price - Low to High</option>
                    <option value='high-to-low' className="text-sm">Price - High to Low</option>
                    <option value='highest-rated' className="text-sm">Highest Rated</option>
                    <option value='a-to-z' className="text-sm">Name - A to Z</option>
                    <option value='z-to-a' className="text-sm">Name - Z to A</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;