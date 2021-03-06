import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <h1>{props.match.params.section.toUpperCase()} Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:section" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
