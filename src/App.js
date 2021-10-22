import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import { Header } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={LoginAndRegister}/>
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
