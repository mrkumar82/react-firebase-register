import Home from "./components/Home";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProctedRoute from "./ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin" component={Signin} />
          <ProctedRoute exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="*" component={() => "404 page"} />
        </Switch>
      </Router>
    </div>
  );
}
