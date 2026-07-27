import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDl3uFTItmYbC2DYSqyleox_VSyxOLgpVk",
  authDomain: "helabuy-2458b.firebaseapp.com",
  projectId: "helabuy-2458b",
  storageBucket: "helabuy-2458b.firebasestorage.app",
  messagingSenderId: "968570968832",
  appId: "1:968570968832:web:88377ff2989850b81f31e5",
  measurementId: "G-GELCK9Q0DM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}

loadProducts();
