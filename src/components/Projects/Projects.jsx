import "./Projects.css";
import stokkLogo from "./../../assets/stokk-logo.png";
import gamedomLogo from "./../../assets/gamedom-logo.png";
import jumpyLogo from "./../../assets/jumpy-logo.png";

function Projects() {
  return (
    <>
      <section className="projects-section" id="projects">
        <div className="projects-title">
          <h1 className="projects-text">Projects</h1>
          <span className="projects-subtitle">
            Take a look at my latest projects.
          </span>
        </div>
        <div className="projects-content">
          <div className="project">
            <img className="stokk-logo" src={stokkLogo} alt="Stokk Logo" />
            <p>
              Stokk - Stock Image Library <br /> Stokk allows you to explore and
              download rights-free images, making it a valuable resource for
              various creative projects. Create an account and add your own
              images or add already existing images to your favourites. <br />
              Full-stack web application built using MERN stack (MongoDB,
              Express, React, Node). <br /> Demo | Source code
            </p>
          </div>
          <div className="project">
            <img
              className="gamedom-logo"
              src={gamedomLogo}
              alt="GameDOM Logo"
            />
            <p>
              GameDOM - Video Game database <br /> GameDOM is a website using
              RAWG API that displays data on most popular video games. It also
              features a local backend to manage user login information and
              comments. <br />
              Single page application built using JavaScript and React.js <br />{" "}
              Demo | Source code
            </p>
          </div>
          <div className="project">
            <img className="jumpy-logo" src={jumpyLogo} alt="Jumpy Logo" />
            <p>
              Jumpy - 2D game for desktop browsers <br /> Jumpy is a simple and
              engaging game loosely based on Chrome’s T-rex game. The aim of the
              game is to guide a player (Jumpy) across a side-scrolling
              landscape, avoiding obstacles to achieve a higher level. <br />{" "}
              This game was built using Vanilla JavaScript, HTML and CSS. <br />{" "}
              Demo | Source code
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
