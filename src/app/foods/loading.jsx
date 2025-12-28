import CardSkeleton from "@/components/CardSkeletion/CardSkeletion";
import React from "react";

export default function loading() {
    return <div>
        <div className="grid grid-cols-3 gap-5 mt-10 px-20">
           {
            [...Array(12)].map((_,index)=><CardSkeleton key={index}></CardSkeleton>)
           }
        </div>
    </div>;
}
