import Link from "next/link";
import React from "react";
import AddToCard from "../AddToCard/AddToCard";

export default function FoodCard({ food }) {
  return (
    <div className="max-w-sm h-[400px]  p-4 border  rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={food.foodImg}
        alt={food.title}
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white">{food.title}</h2>

        {/* Category & Price */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-100">{food.category}</span>
          <span className="text-lg font-bold text-gray-200">${food.price}</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-2">
          <AddToCard food={food}></AddToCard>
          <Link href={`/foods/${food.id}`} className=" px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-black transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
