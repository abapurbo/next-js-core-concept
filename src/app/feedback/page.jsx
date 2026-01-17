import { FeedbackCard } from "@/components/Cards/FeedbackCard";
import React from "react";
// get a user feedback 
const getUserFeedback = async () => {
    const res = await fetch('http://localhost:3000/api/feedback')
    const data = await res.json();
    return data;

}
export default async function FeedbackPage() {
    const feedbacks = await getUserFeedback();
    console.log(feedbacks)
    return <div className="px-14">
        <h1 className="text-3xl font-bold text-center my-5">User Feedback</h1>
        <div>
            <button className="btn">Add a Feedback</button>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 ">
            {
                feedbacks.map((feedback,index)=><FeedbackCard key={index} feedback={feedback}></FeedbackCard>)
            }
        </div>
    </div>;
}
