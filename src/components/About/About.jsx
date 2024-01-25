import "./About.css";
import aboutImage from "./../../assets/about-image.png";

function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-title">
          <h1 className="title-text">About</h1>
          <span className="about-subtitle">Get to know me a bit better.</span>
        </div>
        <div className="about-description">
          <p className="description-text">
            After spending several years in the field of marketing, my{" "}
            <span className="text-highlight">
              desire to design and build websites
            </span>{" "}
            eventually took over. In 2023, I took the opportunity to undergo a{" "}
            <span className="text-highlight">career transition</span> and
            immerse myself in the exciting world of{" "}
            <span className="text-highlight">web development</span>.
          </p>
          <p className="description-text">
            <span className="text-highlight">
              I specialise in frontend development, and my go-to framework is
              React JS.
            </span>{" "}
            As a web developer, I enjoy using my{" "}
            <span className="text-highlight">attention to detail</span>, my{" "}
            <span className="text-highlight">passion for UX/UI design</span> and
            my{" "}
            <span className="text-highlight">
              irresistible love for making things
            </span>
            .
          </p>
          <p className="description-text">
            When I am not coding, you will often find me{" "}
            <span className="text-highlight">playing tennis</span>, exploring
            the ins and outs of{" "}
            <span className="text-highlight">interior design</span>, or{" "}
            <span className="text-highlight">practising yin yoga</span>.
          </p>
        </div>
        <div className="tech-section">
          <img
            className="about-image"
            src={aboutImage}
            alt="Image of a girl working on her laptop"
          />
          <div className="tech-description">
            <p className="tech-text">Technologies I am using :</p>
            <div className="tech-icons">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React JS</p>
              <p>MongoDB</p>
              <p>Node JS</p>
              <p>Git</p>
              <p>WordPress</p>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
