import Home from "./components/Home";
import Signin from "./components/Signin";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}
