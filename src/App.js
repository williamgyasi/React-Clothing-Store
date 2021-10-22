import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./Pages/Homepage/Homepage";

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
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
