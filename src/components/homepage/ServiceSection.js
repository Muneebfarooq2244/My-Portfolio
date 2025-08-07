import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Tab, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/Services.css';

// ✅ Correct Icon Imports
import { MdAppSettingsAlt, MdAddShoppingCart } from 'react-icons/md';
import { FaCode, FaWordpress } from 'react-icons/fa';
import { motion } from 'framer-motion';

// ✅ Images
import FrontendImg from "../assets/Frontend.png";
import BackendImg from "../assets/Backend.png";
import FullstackImg from "../assets/Fullstack.png";

// Service Data
const servicesData = [
  {
    icon: <FaWordpress />,
    title: 'WordPress Development',
    description:
      'Experienced in building custom WordPress websites with responsive design, optimized performance, and seamless user experience. Skilled in theme customization, plugin Development, and creating dynamic content solutions tailored to client needs.',
  },
  {
    icon: <FaCode  />,
    title: 'Web Development',
    description:
      'Proficient in developing responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, React Bootstrap and PHP. Focused on clean code, performance, and delivering intuitive digital experiences across all devices.',
  },
  {
    icon: <MdAddShoppingCart />,
    title: 'Ecommerce Solutions',
    description:
      'Specialized in creating custom ecommerce websites that drive sales and enhance user experience. Skilled in platforms like WooCommerce and Shopify, with a focus on secure payment integration, product management, and mobile optimization.',
  },
  {
    icon: <MdAppSettingsAlt />,
    title: 'App Development',
    description:
      'Experienced in Developing & Designing cross-platform and native mobile applications with intuitive interfaces and robust performance. Proficient in turning ideas into functional apps using technologies like Flutter, React Native, and Android Studio.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};

// Service Section Component
export function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="services">
    <div>
      <h2  className="section-heading" data-aos="fade-up">Your Trusted Partner for Professional Services</h2>
      <p data-aos="fade-up" className="pw" data-aos-delay="200">
        Simplifying complex tasks with dependable, expert-level solutions tailored for success.
      </p>
    </div>
    <div className="allServices">
  <motion.div
    className="allServices"
    variants={container}
    initial="hidden"
    animate="show"
  >
    {servicesData.map((service, index) => (
      <motion.div className="servicesItem" key={index} variants={item}>
        <div className="icon-services">
          {React.cloneElement(service.icon, { className: 'service-icon' })}
          <span></span>
        </div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </motion.div>
    ))}
  </motion.div>
</div>
  </div>
    );
};
  
// Tabs Data
const tabData = [
  {
    key: "frontend",
    title: "Frontend Developer",
    img: FrontendImg,
    heading: "Frontend Developer",
    description:
      "A Frontend Developer builds the user-facing parts of websites and applications by turning designs into responsive, interactive interfaces using HTML, CSS, React and JavaScript. They ensure cross-browser compatibility, optimize performance, and collaborate with designers and backend teams to create smooth, user-friendly experiences. They stay updated with the latest tools and frameworks to write clean, scalable code.<br>",
    skills: [
      "HTML5",
      "CSS3 (Flexbox, Grid)",
      "JavaScript (ES6+)",
      "React.js",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "RESTful APIs",
      "Cross-browser Compatibility",
      "Responsive Design",
      "Performance Optimization",
      "Testing (Jest, React Testing Library)"
    ],
  },
  {
  key: "backend",
  title: "Backend Developer",
  img: BackendImg,
  heading: "Backend Developer",
  description:
    "A Backend Developer designs and builds the server-side logic and databases that power web applications.They ensure data security, integrity, and scalability for robust and reliable systems.They create and manage APIs that connect frontend and backend components seamlessly.Collaboration with frontend developers ensures smooth and efficient user experiences.",
  skills: [
    "Node.js",
    "Express.js",
    "PHP",
    "Python / Django / Flask",
    "Ruby on Rails",
    "Java / Spring Boot",
    "RESTful APIs / GraphQL",
    "Database Management (SQL, NoSQL)",
    "Authentication & Authorization",
    "Cloud Services (AWS, Azure, Google Cloud)",
    "Docker & Containerization",
    "Unit Testing & Integration Testing",
    "Performance Optimization",
    "Security Best Practices"
  ],
},


  {
  key: "fullstack",
  title: "Full Stack Developer",
  img: FullstackImg,
  heading: "Full Stack Developer",
  description:
    "A Full Stack Developer is proficient in both frontend and backend development. They handle everything from designing responsive user interfaces to managing server-side logic and databases. Full Stack Developers build and maintain complete web applications, ensuring seamless communication between client and server. They are versatile problem-solvers who collaborate across teams to deliver fully integrated, scalable, and high-performance digital solutions.<br>",
  skills: [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js / Next.js",
    "Redux / Context API",
    "TypeScript / PHP",
    "Node.js",
    "Express.js",
    "Flutter / React Native",
    "RESTful APIs / GraphQL",
    "MongoDB / PostgreSQL / MySQL",
    "Authentication & Authorization",
    "Version Control (Git)",
    "Docker & Containerization",
    "CI/CD Pipelines",
    "Testing (Jest, Mocha, Cypress)"
  ],
}

];

// Tabs Section Component
export function TabsSection() {
  const [activeKey, setActiveKey] = useState("frontend");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 return (
  <>
    <section className="tabs-section" data-aos="fade-up">
      <Container>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav
            variant="tabs"
            className="mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {tabData.map(({ key, title }) => (
              <Nav.Item key={key}>
                <Nav.Link eventKey={key}>{title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content>
            {tabData.map(({ key, img, heading, description, skills }) => (
              <Tab.Pane eventKey={key} key={key} className="fade show">
                <Row className="align-items-center">
                  <Col md={6} className="mb-3 mb-md-0" data-aos="zoom-in">
                    <img src={img} alt={heading} className="tab-image" />
                  </Col>
                  <Col md={6} data-aos="fade-left" data-aos-delay="300">
                    <h2 className="tab-heading">{heading}</h2>
                    <p className="tab-description" dangerouslySetInnerHTML={{ __html: description }} />
                    
                    {/* Render skills if available */}
                    {skills && skills.length > 0 && (
                      <>
                        <h3>Skills</h3>
                        <ul className="skills-list">
                          {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Col>
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  </>
);

}
