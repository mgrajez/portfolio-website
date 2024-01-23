import "./About.css";
import computer from "./../../assets/computer.png";

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-title">
          <h1 className="title-text">About</h1>
          <span className="about-subtitle">Get to know me a bit better.</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p className="description-text">
              After spending several years in the field of marketing, my desire
              to design and build websites eventually took over. In 2023, I took
              the opportunity to undergo a career transition and immerse myself
              in the exciting world of web development. <br /> I specialise in
              frontend development, and my go-to framework is React JS. As a web
              developer, I enjoy using my attention to detail, my passion for
              UX/UI design and my irresistible love for making things. <br />{" "}
              When I am not coding, you will often find me playing tennis,
              exploring the ins and outs of interior design, or practising yin
              yoga.
            </p>
          </div>
          <div className="tech-section">
            <img className="computer-image" src={computer} alt="" />
            <p className="tech-text">Technologies I am using:</p>
            <div className="tech-icons">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
