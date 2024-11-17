import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCollectionRef);
    const itemsList = itemsSnapshot.docs.map((doc) => ({
      id: userId,
      ...doc.data(),
    }));
    return itemsList;
  } catch (fetchItemsError) {
    console.error("Error in fetchItemsError: ", fetchItemsError);
  }
}
export function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (addItemError) {
    console.error("Error in addItemError: ", addItemError);
  }
}
