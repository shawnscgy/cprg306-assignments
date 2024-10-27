import ItemList from "./item-list";
export default function Page() {
  return (
    <main className="bg-slate-950">
      <div className="m-4">
        <h1 className="text-3xl font-bold text-white m-2">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
