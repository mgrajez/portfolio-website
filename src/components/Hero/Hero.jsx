import React from "react";
import "./Hero.css";
import hero from "./../../assets/hero.png";
import scrollIcon from "./../../assets/scroll-icon.png";

const Hero = () => {
  return (
    <section className="container-hero">
      <img className="hero-image" src={hero} alt="hero image" />
      <div className="content">
        <h1 className="title">
          Hi, I am <span className="title-name">Monika</span>
        </h1>
        <p className="description">
          I am a Front-end Web Developer <br /> and Web Designer based in Paris,
          France
        </p>
        <button className="contact-button">Get in touch</button>
      </div>
      <div scroll-section>
        <img className="scroll-icon" src={scrollIcon} alt="scroll icon" />
      </div>
    </section>
  );
};

export default Hero;
