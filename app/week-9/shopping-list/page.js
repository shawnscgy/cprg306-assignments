"use client";
import NewItem from "./new-item";
import itemsData from "./items";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  const handleItemSelect = (name) => {
    let newName = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    newName = newName.split(",")[0];
    newName = newName.trim();
    setSelectedItemName(newName);
  };
  return (
    <main className="bg-slate-950 m-2 p-2">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <div className="flex">
        <div className="max-w-md m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
