"use client";
import Item from "./item";
import { useEffect, useState } from "react";
export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("");
  const [horribleState, setHorribleState] = useState(false);
  const [itemsState, setItemsState] = useState([...items]);

  useEffect(() => {
    setItemsState([...items]);
    if (sortBy === "name") {
      const newList = [...items];
      newList.sort((a, b) => a.name.localeCompare(b.name));
      setItemsState(newList);
      setHorribleState(false);
    }
    if (sortBy === "category") {
      const newList = [...items];
      newList.sort((a, b) => a.category.localeCompare(b.category));
      setItemsState(newList);
      setHorribleState(false);
    }
  }, [items]);

  // handle sortBy to determine compare method
  const handleSortByName = () => {
    if (sortBy === "name") {
      setSortBy("");
      setItemsState([...items]);
      return;
    }
    setSortBy("name");
    const newList = [...items];
    newList.sort((a, b) => a.name.localeCompare(b.name));
    setItemsState(newList);
    setHorribleState(false);
  };
  const handleSortByCategory = () => {
    if (sortBy === "category") {
      setSortBy("");
      setItemsState([...items]);
      return;
    }
    setSortBy("category");
    const newList = [...items];
    newList.sort((a, b) => a.category.localeCompare(b.category));
    setItemsState(newList);
    setHorribleState(false);
  };

  // Horrible object here
  const groupedCategory = itemsState.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  // Horrible state turn on here
  const handleGroupedCategory = () => {
    if (horribleState) {
      setHorribleState(false);
      setItemsState([...items]);
      return;
    }
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
        Grouped Category
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
                  .sort((a, b) => {
                    return a.name.localeCompare(b.name);
                  })
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
          {itemsState.map((item) => (
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
