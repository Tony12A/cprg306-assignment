import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-lg mx-auto mt-10 p-6 bg-gray-50 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
