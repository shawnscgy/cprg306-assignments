import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  query,
} from "firebase/firestore";

export const getItems = async (userId) => {
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
};
export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollectionRef, item);
    return docRef.id;
  } catch (addItemError) {
    console.error("Error in addItemError: ", addItemError);
  }
}
export async function deleteItem(userId, itemId) {
  try {
    console.log(userId, itemId);
    const itemDocRef = doc(db, "users", userId, "items", itemId);
    console.log("itemDocRef: ", await getDoc(itemDocRef));
    await deleteDoc(itemDocRef);
    console.log("Document successfully deleted!");
  } catch (deleteItemError) {
    console.error("Error in deleteItemError: ", deleteItemError);
  }
}
