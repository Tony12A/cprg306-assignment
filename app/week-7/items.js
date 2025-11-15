export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-[#3b5980] text-white p-4 rounded-md shadow-md mb-3">
      <p className="font-bold text-lg mb-1">{name}</p>
      <p className="text-gray-300 text-sm">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
