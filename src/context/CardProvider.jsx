'use client'
import React, { createContext, useState } from "react";
export const CardContext = createContext(null)
export default function CardProvider({ children }) {
    const [cart, setCart] = useState([])
    const addToCard = (item) => {
        setCart([item, ...cart])
    }
    const cardInfo = {
        cart,
        addToCard
    }

    return <CardContext.Provider value={cardInfo}>
        {children}
    </CardContext.Provider>;
}
