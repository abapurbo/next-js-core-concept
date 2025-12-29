
import FoodCard from "@/components/Cards/FoodCards";
import CartItems from "./CartItems";
const getFoods = async () => {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random');
    const data = await res.json()
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data.foods || []
}
const Foods = async () => {
    const foods = await getFoods()
    return <div className="mt-10 px-10">
        <h1 className="text-3xl font-bold">Total <span className="text-amber-600">{foods.length}</span> Foods Found</h1>
        <div className="flex gap-5 ">
            <div className="flex-4 grid grid-cols-2 gap-5 mt-10">
                {
                    foods.map((food) => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
            <div className="border-2 flex-2 rounded-xl ">
                <CartItems></CartItems>
            </div>
        </div>
    </div>;
}
export default Foods
