import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzuFJauCKJtyicXppx-Izb5O7-ETo-0eo",
  authDomain: "gputrackit.firebaseapp.com",
  projectId: "gputrackit",
  storageBucket: "gputrackit.appspot.com",
  messagingSenderId: "963468499528",
  appId: "1:963468499528:web:8c7480cec13c0f877e967d",
  measurementId: "G-DNKSFJKCE6",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;