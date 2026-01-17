import FeedbackForm from "@/components/forms/FeedbackFrom";
import React from "react";

export default function AddFeedbackPage() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-white mb-6">
                Add Your Feedback
            </h1>
            <div className=" p-6 rounded-lg shadow-md text-gray-500">
                <FeedbackForm></FeedbackForm>
            </div>
        </div>
    );
}
