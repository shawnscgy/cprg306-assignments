"use client";
import Item from "./item";
import { useState } from "react";
import items from "./items";
export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
  });
  return (
    <div>
      <button onClick={() => setSortBy("name")}>Name</button>
      <button onClick={() => setSortBy("category")}>Category</button>
      <button>Gouped Categorty</button>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
