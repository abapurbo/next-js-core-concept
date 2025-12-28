import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="border rounded-xl p-5 shadow-sm  flex gap-4">
      
      {/* User Photo */}
      <img
        src={review.photo}
        alt={review.user}
        className="w-14 h-14 rounded-full object-cover"
      />

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800">{review.user}</h3>
          <span className="text-sm text-gray-400">
            {new Date(review.date).toLocaleDateString()}
          </span>
        </div>

        {/* Rating */}
        <div className="flex gap-1 my-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Review Text */}
        <p className="text-gray-600 text-sm leading-relaxed mt-2">
          {review.review}
        </p>

        {/* Likes */}
        <p className="text-xs text-gray-400 mt-3">
          👍 {review.likes.length} people found this helpful
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
