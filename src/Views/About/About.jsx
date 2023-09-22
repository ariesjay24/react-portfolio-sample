import React from "react";
import aboutImage from "./../../assets/best.png";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h1 className="title">About</h1>
        <div className="about-content">
          <div className="column left">
            <img src={aboutImage} />
          </div>
          <div className="column right">
            <h2 className="text">I am ready to serve you</h2>
            <p>
              I'm happy to inform you that <strong>I AM</strong> ready to serve
              you, from the <b>design layout</b> to deploying your website
              online. I specialize in <i>creating websites</i> that define your
              brand and showcase your <em>company products and services</em> on
              the internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
