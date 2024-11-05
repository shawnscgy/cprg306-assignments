"use client";
import { useState, useEffect } from "react";
import MealDetail from "./meal-detail";
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [selectedLi, setSelectedLi] = useState("");
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    setMeals(data.meals);
  };
  const loadMealIdeas = (ingredient) => {
    fetchMealIdeas(ingredient);
  };
  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);
  // optional part
  const fetchMealDetails = async (id) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    const mealObject = data.meals[0]; // return an object with a property which is array of size 1, in this array, there is an object, crazy API
    const mealNameList = Object.entries(mealObject).filter(
      ([key, value]) => key.includes("strIngredient") && value !== ""
    );
    const mealMeasureList = Object.entries(mealObject).filter(
      ([key, value]) => key.includes("strMeasure") && value !== " "
    );
    const mealList = mealNameList.reduce((acc, [key, value], index) => {
      acc.push([value, mealMeasureList[index][1]]);
      return acc;
    }, []);
    setMealList(mealList);
    setSelectedLi(id);
  };

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      {ingredient == "" ? (
        <p>Select an item to see meal ideas</p>
      ) : meals == null ? (
        <p>No meal ideas found for {ingredient}</p>
      ) : (
        <div>
          <p>Here are some meal ideas using {ingredient} :</p>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
                onClick={() => fetchMealDetails(meal.idMeal)}
              >
                {meal.strMeal}
                {selectedLi == meal.idMeal ? (
                  <MealDetail mealList={mealList} id={meal.idMeal} />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
