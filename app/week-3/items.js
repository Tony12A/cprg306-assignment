export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 border-b border-gray-300 flex justify-between items-center">
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-600">in: {category}</p>
      </div>
      <p className="text-blue-600 font-medium">Buy: {quantity}</p>
    </li>
  );
}
