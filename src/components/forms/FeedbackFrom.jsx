"use client";
import React from "react";
export default function FeedbackForm() {
    const handleAddFeedback = (e) => {
        try {
            e.preventDefault();
            const feedback = e.target.feedback.value;

            fetch('http://localhost:3000/api/feedback', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: feedback })
            })
            feedback.value = '';
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Leave Your Feedback</h2>
            <form onSubmit={handleAddFeedback} className="flex flex-col gap-4">
                {/* Textarea */}
                <textarea
                    placeholder="Write your feedback here..."
                    required
                    name="feedback"
                    className="w-full h-24 p-3 borderrounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Add Feedback
                </button>
            </form>
        </div>
    );
}
