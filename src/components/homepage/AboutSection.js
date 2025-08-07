import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImage from "../assets/About.png";

const tabData = {
  "Main Skills": [
    {
      title: "🎯 User Experience Design (UI/UX)",
      description: "Specializing in designing seamless, user-focused interfaces that drive engagement, enhance usability, and improve overall user satisfaction across digital platforms.",
    },
    {
      title: "🌐 Web & User Interface Development",
      description: "Expertise in building high-performance, cross-platform websites using modern web technologies—ensuring consistency, speed, and a frictionless user experience.",
    },
    {
      title: "🌀 Interaction Design & Motion Animation",
      description: "Designing interactive motion graphics and micro-animations that enrich the user journey, improve navigation, and add a polished, modern feel to digital products.",
    },
  ],
  Awards: [
    {
      title: "🏆 Web Design Excellence Award",
      description: "Recognized for delivering innovative, aesthetically compelling, and user-centric web designs that elevate the overall digital experience.",
    },
    {
      title: "💻 Code & Development Distinction",
      description: "Honored for demonstrating exceptional proficiency in clean, scalable code architecture, advanced development techniques, and problem-solving under real-world constraints.",
    },
    {
      title: "📈 Social Media Marketing",
      description: "Strategized and executed social media marketing campaigns for real brands, driving measurable growth in engagement, reach, and conversions across platforms like Instagram, LinkedIn, and Twitter (X).",
    },
  ],
  Education: [
    {
      title: "🎓 Bachelor’s Degree in Computer Science (In Progress)",
      description: "Currently pursuing a comprehensive program with a strong emphasis on software development, data structures, algorithms, web technologies, and user experience design. Building a solid foundation in both front-end and back-end development.",
    },
    {
      title: "💼 Internships & Professional Experience",
      description: "Gained practical skills through internships and freelance work involving website creation, responsive design, and user experience optimization. Worked on live projects, contributing to both the visual and functional aspects of digital products.",
    },
    {
  title: "🎓 Intermediate Education – Commerce",
  description: "Completed through the Board of Intermediate Education, Karachi.    <br>       Successfully completed Higher Secondary School Certificate (HSSC) with a focus on accounting, economics, business studies, and mathematics—establishing a strong foundation in commercial and financial principles."
}


  ],
};

function AboutSection() {
  const [activeTab, setActiveTab] = useState("Main Skills");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .about-section {
          color: var(--text-color);
          padding-top:20px;
          transition: background-color 0.3s, color 0.3s;
        }

        .about-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .about-description {
          font-size: 16px;
          line-height: 1.5;
          color: #616161;
        }

        .about-image {
          width: 80%;
          justify-content:center;
          transition: transform 0.3s ease;
        }

        .tabs {
          margin-top: 40px;
        }

        .tab-buttons {
          margin-bottom: 25px;
        }

        .tab-button {
          background-color: #f0f4f8;
          border: none;
          padding: 10px 20px;
          margin-right: 10px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          color: black;
          transition: all 0.3s ease;
          box-shadow: none;
        }

        .tab-button.active {
          background:linear-gradient(to left, #006666, #133333);
          color: white;
          font-weight: 700;
          box-shadow: 0 4px 10px #006666;
        }
        .head{
        padding:0%;
        color: #006666;
        font-size:17px;
        margin-bottom:-2px;
        font-weight: 600;
        }

        .hp{
        font-size:15px;
        margin-bottom:10px;
        }

        .tab-content {
	border-radius: 0 5px 5px 5px;
	padding: 0%;
	background-color: var(--bg-color);
	color: var(--text-color);
}
        

        @media (max-width: 768px) {
          .about-section{
            padding:0%;
            margin-top:50px;
            margin-bottom:20px;
          }
          .about-heading {
            font-size: 2rem;
          }
          .about-image {
            width: 100%;
            margin-top:60px;
            justify-content:center;
            transition: transform 0.3s ease;
          }
          .about-description {
            font-size: 15px;
            padding:0%;
          }
          .tab-buttons {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }
          .tab-button {
	margin-bottom: 10px;
	padding: 10px;
	font-size: 15px;
}

          .head{
        padding:0%;
        color: #006666;
        font-size:15px;
        margin-bottom:-2px;
        font-weight: 600;
        }

        .hp{
        font-size:12px;
        margin-bottom:10px;
        }

        }
      `}</style>

      <section id="about" className="about-section">
        <Container>
          <Row className="align-items-center">
            {/* Image Column */}
            <Col
              md={6}
              className="mb-4 mb-md-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src={AboutImage} alt="About Us" className="about-image" />
            </Col>

            {/* Text Column */}
            <Col md={6} data-aos="fade-left" data-aos-delay="300">
              <h2 className="about-heading">About Me</h2>
              <p className="about-description">
                I'm Muneeb Farooq, a results-driven web developer with a strong passion for building intuitive, high-performance web applications. With hands-on experience in both frontend and backend development, I specialize in creating responsive interfaces, optimizing user experiences, and developing scalable backend systems. I thrive in collaborative environments, enjoy tackling complex technical problems, and continuously seek opportunities to learn and grow with the latest technologies and industry best practices. My goal is to build impactful digital solutions that combine functionality, performance, and clean design.
              </p>

              {/* Tabs Section */}
              <div className="tabs">
                <div className="tab-buttons">
                  {Object.keys(tabData).map((tab) => (
                    <button
                      key={tab}
                      className={`tab-button ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="tab-content">
                  {tabData[activeTab].map(({ title, description }, idx) => (
                    <div key={idx}>
                      <p className="head">{title}</p>
                      <p className="hp">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection;
