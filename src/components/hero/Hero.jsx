import "./hero.css";
import Lottie from "lottie-react";
import developerAnimation from "../../animations/developer.json";

export const Hero = () => {
  return (
    <section className="hero">
      <div>
        <div className="avatar-box">
          <img className="avatar" src="./logo.png" alt="" />
          <i className="icon-verified verify"></i>
        </div>
        <h1>Full Stack Developer.</h1>
        <p>
          Hi, I'm Ahmed Esawy a passionate Full Stack Developer with a solid
          background in creating responsive, user-friendly, and visually
          appearing web application. i specialze in HTML, CSS, JavaScript,
          Bootstrap, React, PHP, MySql and Laravel and i'm looking for ways to
          improve and grow as a developer
        </p>
        <div className="social">
          <a href="">
            <i className="icon-x"></i>
          </a>
          <a href="">
            <i className="icon-instagram"></i>
          </a>
          <a href="">
            <i className="icon-github"></i>
          </a>
          <a href="">
            <i className="icon-linkedin"></i>
          </a>
        </div>
      </div>
      <Lottie className="animation" animationData={developerAnimation} />
    </section>
  );
};
