import "./App.css";
import React, { useState,useEffect } from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import { Header } from "./Components";
import { connect } from "react-redux";
import { auth } from "./Firebase/firebase.utils";
import { createUserProfileDocument,getUserData,getUserSnapshot } from "./Firebase/firebase.utils";
import {onSnapshot,onSnapshotsInSync } from "firebase/firestore";


import { SET_CURRENT_USER } from "./Redux/User/userActions";


function App({SET_CURRENT_USER,currentUser}) {
 
  useEffect(()=>{
    
    var unsubscribe=auth.onAuthStateChanged(async googleUserObject=>{
      if(googleUserObject) {
        const userRef = await createUserProfileDocument(googleUserObject);
        const userSnapshot= await getUserData(userRef)
        console.log(userSnapshot)
        SET_CURRENT_USER({
          id:userSnapshot.id,
          ...userSnapshot
        })

      }
    
    })

    return ()=>{
      unsubscribe()
      // userSnapshot()
    }
  },[SET_CURRENT_USER])

  return (
    <div className="App">
      <Header />
      {/* <div className="">{currentUser.displayName}</div> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/signin" render={()=>currentUser? (<Redirect to='/' />):(<LoginAndRegister />)} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

const mapStateToProps=({USER_REDUCER})=>({
  currentUser:USER_REDUCER.currentUser
})

const mapDispatchToProps=dispatch=>({
  SET_CURRENT_USER:user=>dispatch(SET_CURRENT_USER(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
