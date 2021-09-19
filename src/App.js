import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Education from "./components/pages/Education";
import Projects from "./components/pages/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import Foot from "./components/pages/Foot";



function App() {
  return (
    <div><Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/education" component={Education} />
      <Route path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
    </div>
    
  </Router>
  <Foot />
  </div>
    
    
  );
}

export default App;
