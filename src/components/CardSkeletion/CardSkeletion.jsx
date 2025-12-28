// components/FoodCardSkeleton.jsx
import React from "react";

export default function CardSkeleton() {
  return (
    <div className="max-w-sm p-4 border rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>

      {/* Content Skeleton */}
      <div className="flex flex-col gap-3">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Category & Price Skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-5 bg-gray-300 rounded w-1/6"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3 mt-2">
          <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
