const ReviewSkeleton = () => {
    return (
        <div className="border h-86 rounded-xl p-5 shadow-sm bg-white flex gap-4 animate-pulse">

            {/* Avatar Skeleton */}
            <div className="w-18 h-18 rounded-full bg-gray-300"></div>

            {/* Content Skeleton */}
            <div className="flex-1 space-y-3">
                <div className="flex justify-between">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                    <div className="h-3 w-20 bg-gray-300 rounded"></div>
                </div>

                {/* Rating Skeleton */}
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-4 bg-gray-300 rounded"
                        ></div>
                    ))}
                </div>

                {/* Review Lines Skeleton */}
                <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-300 rounded"></div>
                    <div className="h-3 w-11/12 bg-gray-300 rounded"></div>
                    <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                </div>

                {/* Likes Skeleton */}
                <div className="h-3 w-40 bg-gray-300 rounded mt-2"></div>
            </div>
        </div>
    );
};

export default ReviewSkeleton;
