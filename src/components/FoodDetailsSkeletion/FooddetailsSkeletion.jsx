const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 flex flex-col md:flex-row gap-6 border rounded-xl shadow-md animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full md:w-1/2 h-100 bg-gray-300 rounded-xl"></div>

      {/* Content Skeleton */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-300 rounded"></div>

        <div className="h-6 w-1/4 bg-gray-300 rounded mt-2"></div>

        {/* Buttons Skeleton */}
        <div className="flex gap-4 mt-4">
          <div className="h-10 w-32 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-32 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
