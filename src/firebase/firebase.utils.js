import firebase from "firebase/app"; // always required
import "firebase/firestore"; // for the database
import "firebase/auth"; // for auth

const config = {
  apiKey: "AIzaSyB-vf4oZq6Ldy80szbklqdCn8D25Xb_pD8",
  authDomain: "neo-clothing-db.firebaseapp.com",
  databaseURL: "https://neo-clothing-db.firebaseio.com",
  projectId: "neo-clothing-db",
  storageBucket: "neo-clothing-db.appspot.com",
  messagingSenderId: "58306527133",
  appId: "1:58306527133:web:eca301fbe75913adfbb974",
  measurementId: "G-RW87NL9PD7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(firestore.doc("users/128fdashdu"));
  // const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const snapshot = await userRef.get();
  // if (!snapshot.exists) {
  //   const { displayName, email } = userAuth;
  //   const createdAt = new Date();

  //   try {
  //     await userRef.set({
  //       displayName,
  //       email,
  //       createdAt,
  //       ...additionalData
  //     });
  //   } catch (error) {
  //     console.log("error creating user", error.message);
  //   }
  // }
  // return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // exported out for any other component that needs auth
export const firestore = firebase.firestore(); // export database access

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
