import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/education"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          Education
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/skills"
          className={location.pathname === "/skills" ? "nav-link active" : "nav-link"}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/experience"
          className={location.pathname === "/experience" ? "nav-link active" : "nav-link"}
        >
          Experience
        </Link>
      </li>
      <li className="nav-item">
  
      </li>
    </ul>
  );
}

export default NavTabs;
