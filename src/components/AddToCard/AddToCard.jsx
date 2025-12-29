'use client' 
import { CardContext } from "@/context/CardProvider";
import React, { use, useState } from "react";

export default function AddToCard({ food }) {
    const { addToCard } = use(CardContext)
    const [addCard,setAddCard]=useState(false)
    const handleAdd2Card = () => {
        addToCard(food)
        setAddCard(true)
    }
    return <div>
        <button disabled={addCard} onClick={handleAdd2Card} className=" px-3 py-2 bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700 text-white rounded-md hover:bg-blue-600 transition-colors">
            Add to Cart
        </button>
    </div>;
}
