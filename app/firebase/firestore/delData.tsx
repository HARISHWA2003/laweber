import firebase_app from "../config";
import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function delData(collection, id) {
  let result = null;
  let error = null;

  try {
    result = await deleteDoc(doc(db, collection, id));
  } catch (e) {
    error = e;
  }

  return { result, error };
}
