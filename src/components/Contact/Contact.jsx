import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i6dfo1e",
        "template_m1z39x5",
        form.current,
        "uoJdRZTh-9UB2c4Le"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setMessage("Message sent. Thank you!");

          setTimeout(() => {
            setMessage(null);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contactPage">
        <div id="contact">
          <h1 className="contactPageTitle">Contact</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your name"
              name="your_name"
              required
            />
            <input
              type="email"
              className="email"
              placeholder="Your email"
              name="your_email"
              required
            />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" value="Send" className="submitBtn">
              Submit
            </button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>
      </section>
    </>
  );
}

export default Contact;
