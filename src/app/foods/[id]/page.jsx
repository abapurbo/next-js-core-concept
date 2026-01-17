// app/foods/[id]/page.jsx  (App Router)
import React from "react";
export function generateStaticParams() {
    return [{ id: '52878' }, { id: '52874' }, { id: '53071' }]
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
    const { details = {} } = await res.json();
    
    return {
        title: details.title
        // aikhane amra bibi noo meta data bosie amra seo firendly korte pari 
    }
}

const getFoodDetails = async (id) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
    const data = await res.json();
    return data.details;
}

export default async function FoodDetails({ params }) {
    const { id } = await params;
    const food = await getFoodDetails(id)
    if (!food.title) return <div>
        <h1>Food not found</h1>
    </div>;

    return (
        <div className="max-w-4xl max-h-xl mx-auto p-6 mt-10 flex flex-row  gap-6 border rounded-xl shadow-md">
            {/* Image */}
            <div className="h-100">
                <img
                    src={food.foodImg}
                    alt={food.title}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-800">{food.title}</h1>
                <p className="text-gray-600">
                    <span className="font-semibold">Category:</span> {food.category}
                </p>
                <p className="text-gray-600">
                    <span className="font-semibold">Area:</span> {food.area}
                </p>
                <p className="text-gray-900 font-bold text-xl">${food.price}</p>

                <div className="flex gap-4 mt-4">
                    <a
                        href={food.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Watch Video
                    </a>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
