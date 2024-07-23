import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "@/services/firebase";

export default function getProducts(callback) {
  const database = getDatabase();
  const produtosRef = ref(database, "produto");

  onValue(produtosRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const produtosArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(produtosArray);
    } else {
      callback([]);
    }
  });
}
