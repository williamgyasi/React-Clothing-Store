import "./App.css";
import React, { useState,useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import { Header } from "./Components";
import { connect } from "react-redux";
import { auth } from "./Firebase/firebase.utils";
import { createUserProfileDocument,getUserSnapshot } from "./Firebase/firebase.utils";
import {onSnapshot,onSnapshotsInSync } from "firebase/firestore";


import { SET_CURRENT_USER } from "./Redux/User/userActions";


function App() {
  const [currentUser,setCurrentUser]=useState(null)

  useEffect(()=>{
    
    var unsubscribe=auth.onAuthStateChanged(async googleUserObject=>{
      if(googleUserObject) {
        const userRef = await createUserProfileDocument(googleUserObject);
        const userSnapshot= await getUserSnapshot(userRef)
        
        // console.log("USER RED",await userSnapshot)

      }
    
    })

    return ()=>{
      unsubscribe()
      // userSnapshot()
    }
  },[currentUser])

  return (
    <div className="App">
      <Header />
      {/* <div className="">{currentUser.displayName}</div> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={LoginAndRegister} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

const mapDispatchToProps=dispatch=>({
  SET_CURRENT_USER:user=>dispatch(SET_CURRENT_USER(user))
})

export default connect(null,mapDispatchToProps) (App);
