import "./Projects.css";
import stokkImage from "./../../assets/stokk-image.png";
import gamedomImage from "./../../assets/gamedom-image.png";
import jumpyImage from "./../../assets/jumpy-image.png";

function Projects() {
  return (
    <>
      <section className="projects-section" id="projects">
        <div className="projects-title">
          <h1 className="projects-main-title">Projects</h1>
          <span className="projects-subtitle">
            Take a look at my latest projects.
          </span>
        </div>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={stokkImage}
                  alt="Stokk website"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Stokk</h2>
              <p>
                Stokk is a stock image library that allows you to explore and
                download rights-free images, making it a valuable resource for
                various creative projects. Create an account and add your own
                images or add already existing images to your favourites.
                Full-stack web application built using MERN stack (MongoDB,
                Express, React, Node).
              </p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn">Demo</button>
                <button className="btn btn-color-2 project-btn">
                  Source Code
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={gamedomImage}
                  alt="GameDOM website"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">GameDOM</h2>
              <p>
                GameDOM is a website using RAWG API that displays data on most
                popular video games. It also features a local backend to manage
                user login information and comments. <br />
                Single page application built using JavaScript and React.js
              </p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn">Demo</button>
                <button className="btn btn-color-2 project-btn">
                  Source Code
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={jumpyImage}
                  alt="Jumpy website"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Jumpy</h2>
              <p>
                Jumpy - 2D game for desktop browsers <br /> Jumpy is a simple
                and engaging game loosely based on Chrome’s T-rex game. The aim
                of the game is to guide a player (Jumpy) across a side-scrolling
                landscape, avoiding obstacles to achieve a higher level. <br />{" "}
                This game was built using Vanilla JavaScript, HTML and CSS.
              </p>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn">Demo</button>
                <button className="btn btn-color-2 project-btn">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
