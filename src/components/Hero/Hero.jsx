import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import heroImage from "./../../assets/hero-image.png";
import scrollIcon from "./../../assets/scroll-icon.png";

function Hero() {
  return (
    <>
      <section className="container-hero" id="home">
        <img className="hero-image" src={heroImage} alt="hero image" />
        <div className="content">
          <h1 className="title">
            Hello, <br />I am <span className="title-name">Monika</span>
          </h1>
          <p className="job-title">Frontend Web Developer</p>
          <p className="description">
            I'm passionate about crafting <br /> websites that are engaging,{" "}
            <br />
            functional, and user-centric.
          </p>
          <Link to="contact">
            <button className="contact-button">Get in touch</button>
          </Link>
        </div>
        <Link to="about">
          <div className="scroll-icon">
            <img src={scrollIcon} alt="scroll icon" />
          </div>
        </Link>
      </section>
    </>
  );
}

export default Hero;
