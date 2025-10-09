"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2">
          <span className="w-10 text-center border border-gray-300 rounded-md p-1 font-medium">
            {quantity}
          </span>
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-2 py-1 rounded-md ${
              quantity === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            −
          </button>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-2 py-1 rounded-md ${
              quantity === 20
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            +
          </button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-40 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 "
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Meat</option>
          <option>Frozen Foods</option>
          <option>Canned Goods</option>
          <option>Dry Goods</option>
          <option>Beverages</option>
          <option>Snacks</option>
          <option>Household</option>
          <option>Others</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Item
      </button>
    </form>
  );
}
