"use client";
import Item from "../week-6/item";
import { useState } from "react";
import items from "./items";
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [horribleState, setHorribleState] = useState(false);

  // parameter here for sort()
  const compare = (a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  };
  // handle sortBy to determine compare method
  const handleSortByName = () => {
    setSortBy("name");
    setHorribleState(false);
  };
  const handleSortByCategory = () => {
    setSortBy("category");
    setHorribleState(false);
  };
  // based on above, you have got the compare method sort here
  items.sort(compare);

  // Horrible object here
  const groupedCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  // Horrible state turn on here
  const handleGroupedCategory = () => {
    setHorribleState(true);
    setSortBy(""); // change color of name and category button
  };

  return (
    <div>
      <label>Sort by: </label>
      <button
        onClick={() => handleSortByName()}
        className={`${
          sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
        } p-1 m-2 w-28`}
      >
        Name
      </button>
      <button
        onClick={() => handleSortByCategory()}
        className={`${
          sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
        } p-1 m-2 w-28`}
      >
        Category
      </button>
      <button
        onClick={() => handleGroupedCategory()}
        className={`${
          horribleState ? "bg-orange-500" : "bg-orange-700"
        } p-1 m-2 w-28`}
      >
        Gouped Categorty
      </button>
      {/* Horrible state here */}
      {horribleState &&
        Object.entries(groupedCategory)
          .sort((array1, array2) => array1[0].localeCompare(array2[0]))
          .map(([key, array]) => (
            <div key={key}>
              <h3 className="text-xl capitalize">{key}</h3>
              <ul>
                {array
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))}
      {/* normal state here */}
      {!horribleState && (
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
      )}
    </div>
  );
}
