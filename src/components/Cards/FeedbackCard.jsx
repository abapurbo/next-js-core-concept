import React from "react";

export function FeedbackCard({ feedback }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-200 flex justify-between items-start">
      <div>
        <p className="text-gray-800 text-base mb-2">{feedback.message}</p>
        <p className="text-gray-400 text-sm">
          {new Date(feedback.data).toLocaleString()}
        </p>
      </div>

      <div className="flex flex-col gap-2 ml-4">
        {/* Static Update Button */}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Update
        </button>

        {/* Static Delete Button */}
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
