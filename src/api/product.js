import { getDatabase, ref, get } from "firebase/database";
import { database } from "@/services/firebase";

export default async function getProduct(id, callback) {
  const db = getDatabase();
  const produtoRef = ref(db, `produto/${id}`);

  try {
    const snapshot = await get(produtoRef);
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      callback(null);
    }
  } catch (error) {
    console.error("Error fetching product details: ", error);
    callback(null);
  }
}
