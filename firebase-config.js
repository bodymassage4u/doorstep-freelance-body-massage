// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYuK19vaKR1u5PlCxw_AkyLdWGiTbvngI",
  authDomain: "bodymassage4u-a4c56.firebaseapp.com",
  databaseURL: "https://bodymassage4u-a4c56-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bodymassage4u-a4c56",
  storageBucket: "bodymassage4u-a4c56.firebasestorage.app",
  messagingSenderId: "324076527394",
  appId: "1:324076527394:web:0df91887a1ce782b818f7b",
  measurementId: "G-RHG7VV94NP"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const auth = getAuth(app);

// Anonymous login
signInAnonymously(auth)
.then(() => {
    console.log("Firebase Connected");
})
.catch((error) => {
    console.log(error);
});

export { database };
