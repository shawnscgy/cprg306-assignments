export default function MealDetail({ mealList, id }) {
  return (
    <div className="text-gray-400 text-xs ml-2">
      ingredients needed:
      <ul>
        {mealList.map(([key, value]) => (
          <li key={key + id} className="ml-6">
            {key} {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
