"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn } = useUserAuth();
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in");
      console.error(err);
    }
  };
  if (!user) return <button onClick={handleSignIn}>Sign In with GitHub</button>;

  const userId = user.uid;

  const handleAddItem = async (item) => {
    await addItem(userId, item);
  };
  const handleItemSelect = (name) => {
    let newName = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    newName = newName.split(",")[0];
    newName = newName.trim();
    setSelectedItemName(newName);
  };
  return (
    <main className="bg-slate-950 m-2 p-2">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <div className="flex">
        <div className="max-w-md m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList onItemSelect={handleItemSelect} />
        </div>
        <div className="max-w-sm m-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
