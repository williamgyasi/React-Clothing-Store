import "./App.css";
import React, {useEffect } from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import { Header } from "./Components";
import Checkout from "./Pages/Checkout/Checkout";
import { connect } from "react-redux";
import { auth } from "./Firebase/firebase.utils";
import { createUserProfileDocument,getUserData,addCollectionAndDocuments } from "./Firebase/firebase.utils";
import { selectCurrenUser } from "./Redux/User/selector";
import {selectCollectionForPreview} from './Redux/Shop/shopSelector'


import { SET_CURRENT_USER } from "./Redux/User/userActions";

// import WithSample from "./HOCs/withSample/withSample";
import withSample from "./HOCs/withSample/withSample";

const testProps=({name})=>{
  return <div>SOMETHING DEY MOVE MY LEG {name}</div>
}

const Sampleddd=withSample(testProps)

function App({SET_CURRENT_USER,currentUser,collectionsArray}) {
 
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
    addCollectionAndDocuments('collections',collectionsArray)

    return ()=>{
      unsubscribe()
      // userSnapshot()
    }
  },[])

  return (
    <div className="App">
     
      <Header />
      {/* <Sampleddd /> */}
      {/* <div className="">{currentUser.displayName}</div> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signin" render={()=>currentUser? (<Redirect to='/' />):(<LoginAndRegister />)} />

      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrenUser,
  collectionsArray:selectCollectionForPreview
})

const mapDispatchToProps=dispatch=>({
  SET_CURRENT_USER:user=>dispatch(SET_CURRENT_USER(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
