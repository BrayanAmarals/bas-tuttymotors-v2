import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARdNxSNenGP2IccPb36xqIbvg6xCz6kXM",
  authDomain: "bas-tuttymotors.firebaseapp.com",
  databaseURL: "https://bas-tuttymotors-default-rtdb.firebaseio.com/",
  projectId: "bas-tuttymotors",
  storageBucket: "bas-tuttymotors.appspot.com",
  messagingSenderId: "956803448537",
  appId: "1:956803448537:web:9fbde0eb3ed5101e78c8c8",
  measurementId: "G-0PC6Y2C9ZK",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { database, app, auth };
