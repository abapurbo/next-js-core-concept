import React from "react";

export function FeedbackSkeleton() {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-200 flex justify-between items-start animate-pulse">
      <div className="flex-1 space-y-2">
        {/* Message Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        {/* Date Placeholder */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>

      {/* Buttons Placeholder */}
      <div className="flex flex-col gap-2 ml-4">
        <div className="h-8 w-20 bg-gray-300 rounded"></div> {/* Update button */}
        <div className="h-8 w-20 bg-gray-300 rounded"></div> {/* Delete button */}
      </div>
    </div>
  );
}
