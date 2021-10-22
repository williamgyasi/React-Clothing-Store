import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
