import firebase,{initializeApp} from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig={
    apiKey: "AIzaSyCOeYRqlVxEBQ6caOTL9752fz-yIqxFVIU",
      authDomain: "clothing-store-a2dc9.firebaseapp.com",
      projectId: "clothing-store-a2dc9",
      storageBucket: "clothing-store-a2dc9.appspot.com",
      messagingSenderId: "537356435582",
      appId: "1:537356435582:web:d3ef0babefef90869b182f",
      measurementId: "G-0ZB4QGWVPE"
}

const app =initializeApp(firebaseConfig)
export const auth=getAuth()

const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=>signInWithPopup(auth,provider);

