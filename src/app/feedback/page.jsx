import { FeedbackCard } from "@/components/Cards/FeedbackCard";
import Link from "next/link";
import React from "react";
// get a user feedback 
const getUserFeedback = async () => {
    const res = await fetch('http://localhost:3000/api/feedback',{
        cache:'force-cache',
        next:{revalidate:60}
    })
    const data = await res.json();
    return data;

}
export default async function FeedbackPage() {
    const feedbacks = await getUserFeedback();
    console.log(feedbacks)
    return <div className="px-14">
        <h1 className="text-3xl font-bold text-center my-5">User Feedback</h1>
        <div>
            <Link href="/feedback/add" className="btn ">Add a Feedback</Link>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 ">
            {
                feedbacks.map((feedback,index)=><FeedbackCard key={index} feedback={feedback}></FeedbackCard>)
            }
        </div>
    </div>;
}
