export default function MealDetail({ mealList, id }) {
  console.log("mealList", mealList);

  return (
    <div className="text-gray-400 text-xs ml-2">
      ingredients needed:
      <ul>
        {mealList.map(([key, value], index) => (
          <li key={index} className="ml-6">
            {key} {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
