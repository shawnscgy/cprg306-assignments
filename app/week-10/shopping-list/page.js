"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";
export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in");
      console.error(err);
    }
  };
  if (!user)
    return (
      <div className="flex items-center justify-center h-screen">
        <button onClick={handleSignIn} className="flex-1 content-center">
          Sign In with GitHub
        </button>
      </div>
    );

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
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Failed to sign out");
      console.error(err);
    }
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
        <div className="absolute top-2 right-4 flex flex-col items-end mt-2">
          <p className="text-xs ">Account: {user.email}</p>
          <p className="text-xs">User Name: {user.displayName}</p>
          <button
            onClick={handleSignOut}
            className="text-xs bg-slate-800 p-1 m-1"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
}
