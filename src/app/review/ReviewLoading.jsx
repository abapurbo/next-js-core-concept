import ReviewSkeleton from "@/components/ReviewSkeletion/ReviewSkeletion";
import React from "react";

export default function ReviewLoading() {
    return <div className="p-20">
        <div className="grid grid-cols-3 gap-5">
            {
                [...Array(12)].map((_, index) => <ReviewSkeleton key={index}></ReviewSkeleton>)
            }
        </div>
    </div>;
}
