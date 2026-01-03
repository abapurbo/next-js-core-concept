'use client'
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
export default function SearchInputfield() {
    const router = useRouter()
    const params = useSearchParams()
    const handleSearchFood = e => {
        e.preventDefault();
        const from = e.target;
        const value = from.search.value;
        const newParams = new URLSearchParams(params.toString());
        newParams.set('search', value)
        console.log(newParams)

        router.push((`?${newParams}`))
    }
    return <div className="mt-10">
        <form onSubmit={handleSearchFood} >
            <input type="text" name="search" placeholder="Search your food..." className="border py-2 w-100 px-4 rounded-l-xl" />
            <input type="submit" value='Search' className="border ml-2 py-2 px-4 rounded-r-xl" />
        </form>
    </div>;
}
