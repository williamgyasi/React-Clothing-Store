import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    onSnapshot,
    writeBatch,
    query,
    getDocs
 } from "firebase/firestore";
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

const userCollectionRef=collection(firestore,"Users")
const collectionRef=collection(firestore,"collections")
export const collectionQueries=query(collectionRef)



//FIREBASE HELPER FUNCTIONS
// export const pullCollectionInstance=async()=>{
//     const queries=query(collectionRef)
//     const unsubscribe=onSnapshot(queries,querySnapshot=>{
//     //    console.log(querySnapshot)
//        queryArray.push(querySnapshot.docs)
//     })

//     return convertCollectionSnapshotMap(queryArray)
// }

export const convertCollectionSnapshotMap=(collection)=>{
    const transformedCollection=collection.docs.map((doc)=>{
        const {routeName,title,items}=doc.data()

        return{
            id:doc.id,
            routeName:routeName,
            title,
            items           
        }
    })
    console.log(transformedCollection)
    return transformedCollection.reduce((accumalator,currentCollection)=>{
        accumalator[currentCollection.title.toLowerCase()]=currentCollection
        return accumalator;
    },{})
    
}
export const addCollectionAndDocuments=async (collectionKey,ObjectToAdd)=>{
    const collectionRef=collection(firestore,collectionKey)
    const batch=writeBatch(firestore)
    ObjectToAdd.forEach((item)=>{
        const newDocRef=doc(collectionRef,item.title)
        batch.set(newDocRef,item)
        // console.log(newDocRef)
    })
    return await batch.commit()  
}


export const logOutUser=async()=>{
    try {
        await auth.signOut();
    } catch (error) {
        console.log("Error logging out user",error.message)
    }
}

export const getUserData=async userRef=>{
    // const [userData,setUserData]=useState(null)
    try {
        const docSnap=await getDoc(userRef)
        return {
            id:docSnap.id,
            ...docSnap.data()}
    } catch (error) {
        console.log("Error Retrieving User",error.message)
    }

}

export const getUserSnapshot =async(userRef)=>{
    try {
        return onSnapshot(doc(userCollectionRef,userRef.id))
    } catch (error) {
        console.log("Error Getting Snapshot",error.message)
    }
}

export const signInUser=async(email,password)=>{
    try {
        const loggedIn=await signInWithEmailAndPassword(auth,email,password)
        console.log(loggedIn)

    } catch (error) {
        console.log("ISSUE SIGNING IN USER",error.message)
    }
}

export const createUser=async(email,password,displayName)=>{
    try {
        const logged=await createUserWithEmailAndPassword(auth,email,password)
        const createdAt=new Date()

        const user={
            firstname:displayName,
            email:logged.user.email,
            leg:"legolas",
            createdAt
        }
        // addUserToDatabase(logged.user.uid,user)
    } catch (error) {
        console.log("Issue with creating user",error.message)
    }
  
}

export const createUserProfileDocument=async (userAuth,additonalData)=>{
    if(!userAuth) return;
    
    const userRef=doc(userCollectionRef,userAuth.uid)

        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try {
            await setDoc(userRef,{
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch (error) {
            console.log('Error creating user',error.message)
        }
    
    return userRef;

}

 
export const signInWithGoogle = () => {
  try {
    signInWithPopup(auth, provider).then((results) => {
        // const UID=results.user.uid;
        const createdAt=new Date()

        const user={
            firstname:results.user.displayName,
            email:results.user.email,
            leg:"Leg",
            createdAt
        }
        // addUserToDatabase(UID,user)
    });
  } catch (error) {
    //   const errorCode =error.code ;
      const errorMsg=error.message;

      console.log(error.message)
    //   console.log(error)
  }
};
