'use client'
import { CardContext } from "@/context/CardProvider";
import React, { use } from "react";
export default function CartItems() {
    const {cart}=use(CardContext)
    return <div className="py-6 px-5">
        <h1 className="text-3xl">Total add to cart ({cart.length})</h1>
    </div>;
}
