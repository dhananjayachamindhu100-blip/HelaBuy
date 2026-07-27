import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDl3uFTItmYbC2DYSqyleox_VSyxOLgpVk",
  authDomain: "helabuy-2458b.firebaseapp.com",
  projectId: "helabuy-2458b",
  storageBucket: "helabuy-2458b.firebasestorage.app",
  messagingSenderId: "968570968832",
  appId: "1:968570968832:web:88377ff2989850b81f31e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").onclick = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
