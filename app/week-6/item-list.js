"use client";
import Item from "./item";
import { useState } from "react";
import items from "./items";
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const compare = (a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  };
  // sort here
  items.sort(compare);

  // Horrible stuff here
  const groupedCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <label>Sort by: </label>
      <button
        onClick={() => setSortBy("name")}
        className="bg-orange-700 p-1 m-2 w-28"
      >
        Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        className="bg-orange-700 p-1 m-2 w-28"
      >
        Category
      </button>
      <button
        onClick={() => groupedCategory}
        className="bg-orange-700 p-1 m-2 w-28"
      >
        Gouped Categorty
      </button>

      {/* {Object.entries(groupedCategory).map((array) =>
        (array.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            className="bg-orange-700 p-1 m-2 w-28"
          />
        )))
      )} */}
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
