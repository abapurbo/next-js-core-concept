import { FeedbackSkeleton } from "@/components/CardSkeletion/FeedbackSkeletion";
import React from "react";

export default function loading() {
  return <div className="grid grid-cols-3 gap-4 px-14">
      {
        [...Array(5)].map((_,index)=><FeedbackSkeleton key={index}></FeedbackSkeleton>)
      }
  </div>;
}
