// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxrOCuTyyzlXvLkFCGOGRtrnfk8IPavl4",
  authDomain: "spaceship-ac3a7.firebaseapp.com",
  projectId: "spaceship-ac3a7",
  storageBucket: "spaceship-ac3a7.appspot.com",
  messagingSenderId: "269417891713",
  appId: "1:269417891713:web:c1704948aa653125b38a80",
  measurementId: "G-EZS57JY328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

import { doc, setDoc, addDoc, collection, getDoc, getCountFromServer, getDocs } from "firebase/firestore";

export async function AddNewData(name: string) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: name,
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function ListData() {

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

}

