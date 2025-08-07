import React, { useEffect, useState } from "react";
import heroImg from "../assets/hero.png"; // adjust path
import "../styles/HeroSection.css"; // your existing CSS
import resume from "../assets/resume.pdf";
import "boxicons/css/boxicons.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';




const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const TextAnimate = () => {
  const [index, setIndex] = useState(0); // current role index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [reverse, setReverse] = useState(false); // typing or deleting
  const [blink, setBlink] = useState(true); // blinking cursor

  useEffect(() => {
    if (index === roles.length) return;

    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    if (!reverse && subIndex === roles[index].length) {
      // pause before deleting
      const timeout = setTimeout(() => setReverse(true), 1000);
      return () => {
        clearTimeout(timeout);
        clearInterval(blinkInterval);
      };
    } else if (reverse && subIndex === 0) {
      // move to next role
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 150
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(blinkInterval);
    };
  }, [subIndex, index, reverse]);

  return (
    <div className="text-animate">
      <h2>
        {roles[index].substring(0, subIndex)}
        <span style={{ opacity: blink ? 1 : 0 }}>|</span>
      </h2>
    </div>
  );
};

const HeroSection = () => {
  useEffect(() => {
  AOS.init({
    duration: 1500, // Smooth slow animation
    once: true,     // Animate only once per element
  });
}, []);

  return (
    <section data-aos="fade-right" data-aos-delay="300" className="home" id="home">
      <div className="hero-info">
        <h3>Driven by Passion, Purpose, and Projects</h3>
        <div>
          <h1 style={{ display: "inline"  }}>Hi I'm Muneeb </h1>
          <span className="waver">👋</span>
        </div>

        <TextAnimate />

        <p className="mytext">
          I'm Muneeb Farooq, a dedicated web developer specializing in creating clean, responsive, and user-centric digital solutions. With a strong foundation in modern web App technologies, I take pride in delivering high-quality code, solving complex technical challenges, and continuously enhancing my skill set to stay ahead in a fast-evolving industry.
        </p>

        <div className="btn-box">
          <a href="mailto:muneebfaroo2323@gmail.com" className="btn">
            Hire Me Now ! <i className="bx bx-right-arrow-alt"></i>
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn d-CV"
          >
            Download CV <i className="bx bx-download"></i>
          </a>
        </div>

        <div className="social-media">
          <div className="bg-icon">
            <a href="https://www.facebook.com/mnyb.shykh.530642">
              <i className="bx bxl-facebook"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="https://www.instagram.com/muneeb6235/">
              <i className="bx bxl-instagram"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="https://www.linkedin.com/in/muneeb-farooq-775b6a228/">
              <i className="bx bxl-linkedin"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="https://github.com/Muneebfarooq123">
              <i className="bx bxl-github"></i>
            </a>
            <span></span>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="300" className="img-hero">
        <img src={heroImg} alt="Hero" loading="lazy" />
        <div class="rotate-text">
          <div className="text">
            {"Im Frontend Developer Backend Developer Full Stack Developer"
              .split("")
              .map((char, idx) => (
                <b key={idx} style={{ "--i": idx }}>
                  {char}
                </b>
              ))}
          </div>
          <span>
            <i></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
