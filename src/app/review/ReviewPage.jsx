'use client'
import ReviewCard from "@/components/Cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";
export default function ReviewPage() {
  const [reviews, setReview] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews');
        const data = await res.json();
        setReview(data.reviews || []);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
      } finally {
        setLoading(false);
      }
    }
    
    getReviews();
  }, []);


  if (loading) {
    return <ReviewLoading></ReviewLoading>
  }
  return <div className="p-20">
    <div className="mb-10">
      <h1 className="text-4xl font-bold">Total <span className="text-amber-600">{reviews.length}</span> reviews found</h1>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {
        reviews.map((review) => <ReviewCard key={review.id} review={review}></ReviewCard>)
      }
    </div>
  </div>;
}
