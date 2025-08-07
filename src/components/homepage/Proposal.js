import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../styles/Proposal.css";
import supportImage from "../assets/support.png";

const Proposal = () => {
  useEffect(() => {
    AOS.init({
      duration: 1600, // Smooth slow animation
      once: true,     // Animate only once per element
    });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="400" className="Gradientbg">
      <div className="proposal">
        <div className="textBox">
          <span>Get In Touch</span>
          <h3>Start Your Dream Project Today</h3>
          <p className="text3">
            Got an idea? Turn your vision into reality with expert support—creative, strategic, and built for success.
          </p>
          <a href="#contact" className="btn5">Contact Me</a>
        </div>
        <img src={supportImage} alt="Support" className="image" />
      </div>
    </div>
  );
};

export default Proposal;
