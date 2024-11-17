"use client";
import Item from "./item";
import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems } from "../_services/shopping-list-service";

export default function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState("");
  const [horribleState, setHorribleState] = useState(false);
  const [itemsState, setItemsState] = useState([]);
  const { user } = useUserAuth();
  const userId = user.uid;
  async function loadItems() {
    const newItemsState = await getItems(userId);
    setItemsState(newItemsState);
  }
  // add useEffect, cause if not, the added items will not show up
  useEffect(() => {
    loadItems(userId);
    const newList = [...itemsState];
    // hold the state of the items sorted by name
    if (sortBy === "name") {
      newList.sort((a, b) => a.name.localeCompare(b.name));
      setHorribleState(false);
    }
    // hold the state of the items sorted by category
    if (sortBy === "category") {
      newList.sort((a, b) => a.category.localeCompare(b.category));
      setHorribleState(false);
    }
    setItemsState(newList); // this can make sure horribleState can update
  }, []);

  // handle sortBy to determine compare method
  const handleSortByName = () => {
    // canceled and reset to initial state
    if (sortBy === "name") {
      setSortBy("");
      setItemsState([...itemsState]);
      return;
    }
    setSortBy("name");
    const newList = [...itemsState];
    newList.sort((a, b) => a.name.localeCompare(b.name));
    setItemsState(newList);
    setHorribleState(false);
  };
  const handleSortByCategory = () => {
    // canceled and reset to initial state
    if (sortBy === "category") {
      setSortBy("");
      setItemsState([...itemsState]);
      return;
    }
    setSortBy("category");
    const newList = [...itemsState];
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
    // canceled and reset to initial state
    if (horribleState) {
      setHorribleState(false);
      setItemsState([...itemsState]);
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
                      id={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      onSelect={onItemSelect}
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
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
