"use client";
import NewItem from "./new-item";
import itemsData from "./items";
import ItemList from "./item-list";
import { useState } from "react";
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <main className="bg-slate-950">
      <div className="m-4">
        <h1 className="text-3xl font-bold text-white m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
