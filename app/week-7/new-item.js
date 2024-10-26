"use client";

import { useState } from "react";
export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);
  const handleSubmit = () => {
    const id = Math.floor();
    const item = { id, name, quantity, category: category };
    if (name === "") {
      return;
    }
    onAddItem(item);
  };
  return (
    <form className=" bg-slate-900 p-2 m-4 max-w-sm w-full text-black">
      <input
        type="text"
        placeholder="Item name"
        onChange={(e) => setName(e.target.value)}
        required
        className="border-2 border-gray-300 p-2 rounded-lg ml-1 w-full mt-1 mb-2 font-sans text-black"
      />
      <div className="flex justify-between">
        <div className="flex justify-between w-36 h-10 p-1 m-1 bg-white rounded-md">
          <div className="p-1 text-black">{quantity}</div>
          <div id="buttonBlock" className="flex">
            <button
              type="button"
              className="bg-blue-500 text-white font-semibold m-1 w-8 h-6 rounded-lg
            shadow-md hover:bg-blue-700  focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-500 focus:ring-opacity-75"
              disabled={quantity === 1}
              onClick={decrement}
            >
              -
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white font-semibold m-1 w-8 h-6 rounded-lg
            shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-500 focus:ring-opacity-75"
              disabled={quantity === 20}
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
        <select
          className="border-2 border-gray-300 p-2 rounded-lg font-sans ml-1"
          option={(e) => {
            setCategory(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option disabled>Category</option>
          <option value="produce" selected>
            Produce
          </option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="canned goods">Canned Goods</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white font-semibold m-1 h-10 rounded-lg
        shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-500 focus:ring-opacity-75 align-middle w-full mt-4 py-2"
        onClick={handleSubmit}
        type="submit"
      >
        +
      </button>
    </form>
  );
}
