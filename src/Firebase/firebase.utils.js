import firebase, { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore,doc,getDoc,setDoc,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOeYRqlVxEBQ6caOTL9752fz-yIqxFVIU",
  authDomain: "clothing-store-a2dc9.firebaseapp.com",
  projectId: "clothing-store-a2dc9",
  storageBucket: "clothing-store-a2dc9.appspot.com",
  messagingSenderId: "537356435582",
  appId: "1:537356435582:web:d3ef0babefef90869b182f",
  measurementId: "G-0ZB4QGWVPE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const userRef=collection(firestore,"Users")



//FIREBASE FUNCTIONS
const addUserToDatabase=async(UID,user)=>{
    try {
        if(!UID) return;
        const docRef=await setDoc(doc(userRef,UID),user)
        console.log("AH AH AH ",docRef.id)
    } 
    catch (error) {
        console.log("There was an error",error.message)
    }
}


export const signInWithGoogle = () => {
  try {
    signInWithPopup(auth, provider).then((results) => {
        const UID=results.user.uid;
        const createdAt=new Date()

        const user={
            firstname:results.user.displayName,
            email:results.user.email,
            leg:"Leg",
            createdAt
        }
        addUserToDatabase(UID,user)
    });
  } catch (error) {
      const errorCode =error.code ;
      const errorMsg=error.message;

      console.log(error.message)
    //   console.log(error)
  }
};
