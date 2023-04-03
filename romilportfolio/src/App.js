import logo from "./logo.svg";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CaseStudy from "./Components/CaseStudy/CaseStudy";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/projects">
            <Projects></Projects>
          </Route>
          <Route exact path="/projects/:projectName">
            <CaseStudy></CaseStudy>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
