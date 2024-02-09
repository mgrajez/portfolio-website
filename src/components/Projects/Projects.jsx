import "./Projects.css";
import stokkImage from "./../../assets/stokk-image.png";
import gamedomImage from "./../../assets/gamedom-image.png";
import jumpyImage from "./../../assets/jumpy-image.png";

function Projects() {
  return (
    <>
      {/* <section></section>
      <section className="projects-section" id="projects">
        <div className="projects-title">
          <h1 className="projects-main-title">Projects</h1>
          <span className="projects-subtitle">
            Take a look at my latest projects.
          </span>
        </div>
        <div className="project-details-container">
          <div className="project-1">
            <div className="project-image">
              <a href="https://stokk.netlify.app" target="_blank">
                <img
                  src={stokkImage}
                  alt="Stokk website"
                  className="project-img"
                />
              </a>
            </div>
            <div className="project-text">
              <h2 className="project-sub-title">Stokk</h2>
              <p className="project-description">
                Stokk is a stock image library that allows you to explore and
                download rights-free images, making it a valuable resource for
                various creative projects. Create an account and add your own
                images or add already existing images to your favourites.
                Full-stack web application{" "}
                <span className="text-decoration">built using MERN stack</span>.
              </p>
              <div className="button-container">
                <a href="https://stokk.netlify.app" target="_blank">
                  <button className="button-demo">Demo</button>{" "}
                </a>
                <a
                  href="https://github.com/mgrajez/stokk-client"
                  target="_blank"
                >
                  <button className="button-code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-2">
            <div className="project-image">
              <a href="https://gamedom.netlify.app" target="_blank">
                <img
                  src={gamedomImage}
                  alt="GameDOM website"
                  className="project-img"
                />
              </a>
            </div>
            <div className="project-text">
              <h2 className="project-sub-title">GameDOM</h2>
              <p className="project-description">
                GameDOM is a website using RAWG API that displays data on most
                popular video games. It includes many search functionalities and
                features a local backend to manage user login information and
                comments. <br />
                Single page application{" "}
                <span className="text-decoration">
                  built using JavaScript and React.js
                </span>
                .
              </p>
              <div className="button-container">
                <a href="https://gamedom.netlify.app/" target="_blank">
                  <button className="button-demo">Demo</button>
                </a>
                <a
                  href="https://github.com/maria-lavrinenko/GameDOM"
                  target="_blank"
                >
                  <button className="button-code">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-3">
            <div className="project-image">
              <a href="https://mgrajez.github.io/Project-1" target="_blank">
                <img
                  src={jumpyImage}
                  alt="Jumpy website"
                  className="project-img"
                />
              </a>
            </div>
            <div className="project-text">
              <h2 className="project-sub-title">Jumpy</h2>
              <p className="project-description">
                Jumpy is a simple and engaging 2D game for desktop browsers,
                loosely based on Chrome’s T-rex game. The aim of the game is to
                guide a player (Jumpy) across a side-scrolling landscape,
                avoiding obstacles to achieve a higher level. This game was{" "}
                <span className="text-decoration">
                  built using Vanilla JavaScript, HTML and CSS
                </span>
                .
              </p>
              <div className="button-container">
                <a href="https://mgrajez.github.io/Project-1" target="_blank">
                  <button className="button-demo">Demo</button>
                </a>
                <a href="https://github.com/mgrajez/Project-1" target="_blank">
                  <button className="button-code">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Projects;
