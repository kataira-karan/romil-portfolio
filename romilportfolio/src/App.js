import logo from "./logo.svg";
import "./App.css";
import Projects from "./Components/Projects/Projects";
import Internship from "./Components/Internship/Internship";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";

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
          <Route exact path="/projects/:id">
            <CaseStudy></CaseStudy>
          </Route>
          <Route exact path="/education">
            <Education></Education>
          </Route>
          <Route exact path="/experience">
            <Experience></Experience>
          </Route>
          <Route exact path="/education/internship/:id">
            <Internship></Internship>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
