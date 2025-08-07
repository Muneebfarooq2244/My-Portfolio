import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import Service1 from "../assets/work1.png";
import Service2 from "../assets/work2.png";
import Service3 from "../assets/work3 .png";

const services = [
  {
    id: 1,
    img: Service1,
    title: "Custom Embroidery & Print Order Management Dashboard",
    description: "A responsive HTML CSS PHP and JavaScript-based dashboard for managing Digitizing, Vector, Patch, and DTF orders. Includes order form submissions and record tracking with a user-friendly interface optimized for desktop and mobile.",
    link: "https://production.digitizingspot.com/",
  },
  {
    id: 2,
    img: Service2,
    title: "Custom E-commerce Platform with Smooth Payment",
    description: "Developed a user-friendly, class-ready e-commerce platform for Menay client, featuring seamless product browsing and a secure payment gateway integration to ensure smooth and safe transactions. Optimized for both desktop and mobile devices.",
    link: "https://teespring.com/",
  },
  {
    id: 3,
    img: Service3,
    title: "Complete Digital Solutions for Marketing, Branding & Development",
    description: "Designed and developed the official website for WebHub, a full-service digital agency providing complete solutions in marketing, branding, and web development. The website features a modern, responsive design with a user-friendly interface.",
    link: "https://yourdomain.com/ui-ux-design",
  },
];

export default function MyWork() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <style>{`
        .service-section {
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s, color 0.3s;
        }

        .section-heading {
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          color: #006666;
        }

        .service-card {
          background-color: var(--bg-color);
          color: var(--text-color);
          border: 1px solid #006666;
          border-radius: 16px;
          padding: 20px 20px;
          text-align: left;
          transition: all 0.3s ease-in-out;
          height: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 16px 40px #006666;
  background: linear-gradient(to bottom, #006666, #133333);
  color: #fff;
}


        .service-image {
          width: 100%;
          height: 100%;
          margin-bottom: 20px;
          object-fit: contain;
        }

        .service-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .service-description {
          font-size: 16px;
        }
          .pw{
          font-size:16px;
          text-align: center;
          margin-bottom: 55px;
          }

        .theme-button {
  color: var(--btn-text-color);
  border-color: var(--btn-border-color);
  background-color: transparent;
}

body.light-mode {
  --btn-text-color: #000;
  --btn-border-color: #000;
}

body.dark-mode {
  --btn-text-color: #fff;
  --btn-border-color: #fff;
}


        @media (max-width: 800px) {
          .service-card {
            margin-bottom: 30px;
          }
          .section-heading {
            font-size: 28px;
          }
            .service-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          padding:0%;
        }

        .service-description {
          font-size: 15px;
          padding:0%;
        }
          .pw{
          font-size:16px;
          text-align: center;
          margin-bottom: 45px;
          padding:0%;
          }
        }
      `}</style>

      <section id="portfolio" className="service-section">
        <Container>
          <h2 className="section-heading" data-aos="fade-up">My Creative Portfolio</h2>
          <p data-aos="fade-up" className="pw" data-aos-delay="200">A curated collection of my best projects and skills</p>
          <Row className="g-4">
            {services.map(({ id, img, title, description, link }, index) => (
              <Col key={id} xs={12} md={6} lg={4} data-aos="zoom-in" data-aos-delay={index * 150}>
                <Card className="service-card">
                  <Card.Img src={img} alt={title} className="service-image" />
                  <Card.Body>
                    <h3 className="service-title">{title}</h3>
                    <p className="service-description">{description}</p>
                    <Button
                      href={link}
                      variant="outline-light"
                      className="mt-3 theme-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
