import "./App.css";
import React, { useState,useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import { Header } from "./Components";

import { auth } from "./Firebase/firebase.utils";
import { signInWithGoogle } from "./Firebase/firebase.utils";


function App() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
    var unsubscribe=auth.onAuthStateChanged(user=>setUser(user))
    
    return ()=>{
      unsubscribe()
    }
  },[user])

  return (
    <div className="App">
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={LoginAndRegister} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
