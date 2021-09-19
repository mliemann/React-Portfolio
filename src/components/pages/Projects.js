import React from "react";

function Projects() {
  return (
    <section class="resume-section" id="projects">
    <div className="resume-section-content">
      <h2 className="mb-5">Projects</h2>
      {/* <!-- Project 1  --> */}
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Recipe Search/Repository/E-Commerce</h3>
          <div className="subheading mb-3"></div>
          <ul>
            <p>
              <ul>
                {/* <li style={{list-style-type: 'none'}}></li> */}
              </ul>
              GITHUB:
              <ul>
                <li>
                  <a href="https://github.com/mliemann/Recipe-Gram">
                    https://github.com/mliemann/Recipe-Gram
                  </a>
                </li>
              </ul>
              DEPLOYED LINK:
              <ul>
                <li>
                  <a href="https://recipe-gram-best-team.herokuapp.com/">
                    https://recipe-gram-best-team.herokuapp.com/
                  </a>
                </li>
              </ul>
              SUMMARY:
              <ul>
                <li>A way to upload & share recipes easily. </li>
              </ul>
              ROLE:
              <ul>
                <li>Front End & Back End Designer Co-Author</li>
              </ul>
              TOOLS:
              <ul>
                <li>
                  HTML, CSS, Bootstrap, Vanilla Javascript, jQuery, Font
                  Awesome, Node.js, Express.js, Sequelize, AWS S3, MySQL,
                  Heroku, GitHub
                </li>
              </ul>
            </p>
          </ul>
        </div>
      </div>
      {/* <!-- Project 2 --> */}
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Bar Search/Geolocation Search</h3>
          <div className="subheading mb-3"></div>
          <ul>
            <p>
              <ul>
                {/* <li style="list-style-type: none"></li> */}
              </ul>
              GITHUB:
              <ul>
                <li>
                  <a href="https://github.com/nchao98/Food-GeoLocation-Search-">
                    https://github.com/nchao98/Food-GeoLocation-Search-
                  </a>
                </li>
              </ul>
              DEPLOYED LINK:
              <ul>
                <li>
                  <a href="https://nchao98.github.io/Food-GeoLocation-Search-/">
                    https://nchao98.github.io/Food-GeoLocation-Search-/
                  </a>
                </li>
              </ul>
              SUMMARY:
              <ul>
                <li>
                  A way to locate breweries around you based on your location.
                  Allows additional filtering to find results you want{" "}
                </li>
              </ul>
              ROLE:
              <ul>
                <li>Front End & Back End Designer Co-Author</li>
              </ul>
              TOOLS:
              <ul>
                <li>
                  HTML, CSS, Foundation CSS, Vanilla Javascript, jQuery, Font
                  Awesome, GitHub
                </li>
              </ul>
            </p>
          </ul>
        </div>
      </div>
      {/* <!-- Project 3 --> */}
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Code Quiz</h3>
          <div className="subheading mb-3"></div>
          <ul>
            <p>
              <ul>
                {/* <li style="list-style-type: none"></li> */}
              </ul>
              GITHUB:
              <ul>
                <li>
                  <a href="https://github.com/mliemann/Code-Quiz-">
                    https://github.com/mliemann/Code-Quiz-
                  </a>
                </li>
              </ul>
              DEPLOYED LINK:
              <ul>
                <li>
                  <a href="https://github.com/mliemann/Code-Quiz-">
                    https://github.com/mliemann/Code-Quiz-
                  </a>
                </li>
              </ul>
              SUMMARY:
              <ul>
                <li>
                  Code quiz utilizing JavaScript generated questions with score
                  at the end.{" "}
                </li>
              </ul>
              ROLE:
              <ul>
                <li>Sole Author & Designer</li>
              </ul>
              TOOLS:
              <ul>
                <li>HTML, CSS, Vanilla Javascript, GitHub</li>
              </ul>
            </p>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Projects;
