import React, { useEffect } from 'react';
import Contact from "../styles/contact.css"; // fixed spaces here
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactus = () => {
    useEffect(() => {
    AOS.init({
      duration: 1600, // Smooth slow animation
      once: true,     // Animate only once per element
    });
  }, []);

  return (
    <section data-aos="fade-right" data-aos-delay="400"  className="down-box" id="contact">
      <div className="contact">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
            <span>get in touch with me</span>
          </div>
          <form
            action="https://formsubmit.co/muneebsheikh2323@gmail.com"
            method="POST"
          >
            <div className="input-box">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input type="email" name="Email" placeholder="Email" required />
            <input type="tel" name="PhoneNumber" placeholder="Phone Number" />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input type="hidden" name="_redirect" value="https://muneebfarooq2244.github.io/My-Portfolio/thankyou.html"/>
            <div className="formBtn">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div data-aos="fade-left" data-aos-delay="400" className="skills">
          <div className="container">
            <div className="skillBox">
              <div className="main-text">
                <h2 className="heading">My Skills</h2>
                <span>Let Me Help you</span>
              </div>
              <div className="skill-wrap">
                {[
                  { title: "HTML", percentage: 98 },
                  { title: "CSS", percentage: 95 },
                  { title: "JavaScript", percentage: 85 },
                  { title: "React Js", percentage: 79 },
                  { title: "PHP", percentage: 72},
                  { title: "UI/UX Design", percentage: 92},
                ].map((skill, index) => {
                  const radius = 75;
                  const circumference = 2 * Math.PI * radius;
                  const offset =
                    circumference - (skill.percentage / 100) * circumference;

                  return (
                    <div className="skill" key={index}>
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="180"
                            height="180"
                          >
                            <defs>
                              <linearGradient
                                id={`GradientColor-${index}`}
                                x1="1"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop offset="0%" stopColor="#00cfcfff"/>
                                <stop offset="100%" stopColor="#006666"/>
                              </linearGradient>
                            </defs>

                            {/* Background circle */}
                            <circle
                              cx="85"
                              cy="85"
                              r={radius}
                              stroke="#e6e6e6"
                              strokeWidth="15"
                              fill="none"
                              filter="url(#shadow)" // Add subtle shadow if you want
                            />

                            {/* Progress circle */}
                            <circle
                              cx="85"
                              cy="85"
                              r={radius}
                              stroke={`url(#GradientColor-${index})`}
                              strokeWidth="15"
                              fill="none"
                              strokeLinecap="round"
                              strokeDasharray={circumference}
                              strokeDashoffset={offset}
                              transform="rotate(-90 85 85)"
                            />
                          </svg>

                          <h2 className="counter">{skill.percentage}%</h2>
                        </div>
                      </div>
                      <div className="sk-title">{skill.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
