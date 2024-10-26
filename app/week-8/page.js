"use client";

import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((quantity) => quantity + 1);
    setQuantity((quantity) => quantity + 1);
    setQuantity((quantity) => quantity + 1);
  };
  const decrement = () => setQuantity(quantity - 1);
  return (
    <div className="flex justify-between w-36 h-10 p-1 m-4 bg-white">
      <div className="p-1 text-black">{quantity}</div>
      <div>
        <button
          className="bg-blue-500 text-white font-semibold m-1 w-8 h-6 rounded-lg
        shadow-md hover:bg-blue-700  focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-500 focus:ring-opacity-75"
          disabled={quantity === 1}
          onClick={decrement}
        >
          -
        </button>
        <button
          className="bg-blue-500 text-white font-semibold m-1 w-8 h-6 rounded-lg
        shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-500 focus:ring-opacity-75"
          disabled={quantity === 20}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
