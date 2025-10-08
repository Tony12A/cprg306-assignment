"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-black pt-16">
      <div className="flex items-center bg-white rounded-lg shadow-md p-2 space-x-2">
        <div className="px-4 py-1 border border-gray-300 rounded text-lg font-bold text-black">
          {quantity}
        </div>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-3 py-1 rounded font-bold text-lg ${
            quantity === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          −
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-3 py-1 rounded font-bold text-lg ${
            quantity === 20
              ? "bg-blue-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          ＋
        </button>
      </div>
    </div>
  );
}
