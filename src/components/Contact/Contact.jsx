import "./Contact.css";
import { useState } from "react";

function Contact() {
  return (
    <>
      <section className="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">Contact</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form action="" className="contactForm">
            <input type="text" className="name" placeholder="Your name" />
            <input type="text" className="email" placeholder="Your email" />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
            <button type="submit" value="Send" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
