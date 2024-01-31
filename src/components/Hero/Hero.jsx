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
            Hi, I am <span className="title-name">Monika</span>
          </h1>
          <p className="description">
            I am a Front-end Web Developer <br /> and Web Designer based in
            Paris
          </p>
          <Link to="contact">
            <button className="contact-button">Get in touch</button>
          </Link>
        </div>
        <div className="scroll-icon">
          <img src={scrollIcon} alt="scroll icon" />
        </div>
      </section>
    </>
  );
}

export default Hero;
