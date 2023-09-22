import React from "react";
import { Button } from "react-bootstrap";
import HeroImage from "./../../assets/hero.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <h1>Hi</h1>
        <h3>My name is</h3>
        <h1>Aries Jay Cuevas</h1>
        <p>
          I'm a passionate web developer with expertise in creating
          user-friendly and responsive websites. My goal is to turn your ideas
          into digital solutions that make a positive impact.
        </p>
        <Button variant="primary">Download My CV</Button>
      </div>
      <div className="image">
        <img src={HeroImage} alt="HeroImage" />
      </div>
    </div>
  );
};

export default Home;
