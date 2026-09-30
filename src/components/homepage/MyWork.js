import React, { useEffect, useRef, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import Service1 from "../assets/work1.png";
import Service2 from "../assets/work2.png";
import Service3 from "../assets/work3.png";
import Service4 from "../assets/work4.png";
import Service5 from "../assets/work5.png";
import Service6 from "../assets/work6.png";

const services = [
  {
    id: 1,
    img: Service1,
    title: "Custom Embroidery & Print Order Management Dashboard",
    description:
      "A responsive HTML CSS PHP and JavaScript based dashboard for managing Digitizing, Vector, Patch, and DTF orders. Includes order form submissions and record tracking with a user-friendly interface optimized for desktop and mobile.",
    link: "https://production.digitizingspot.com/",
  },
  {
    id: 2,
    img: Service2,
    title: "Shopify Store Design, Development & Technical SEO",
    description:
      "Designed and developed a high-performing Shopify store with a responsive, user-friendly design, optimized product pages, and technical SEO to improve search visibility, speed, and overall user experience.",
    link: "https://thefalconjackets.com/",
  },
  {
    id: 3,
    img: Service3,
    title:
      "Custom Patches Experts – Responsive E-Commerce Web Design & Development",
    description:
      "A high-converting, fully responsive WordPress landing page designed and developed for a premium custom apparel brand. Features dynamic layouts, seamless navigation, and pixel-perfect mobile optimization tailored to drive user engagement.",
    link: "https://custompatchesexperts.com/",
  },

  // New Service Card 4
  {
    id: 4,
    img: Service4,
    title: "Professional WordPress Website Design & Development",
    description:
      "Designed and developed a modern WordPress website with a responsive, user-friendly design, optimized performance, seamless navigation, and mobile-friendly layouts to enhance user experience, speed, and overall online presence.",
    link: "https://webhubexperts.com/",
  },

  // New Service Card 5
  {
    id: 5,
    img: Service5,
    title: "Custom E-Commerce Website Design & Development",
    description:
      "Designed and developed a high-performing e-commerce website with a responsive, user-friendly design, optimized product pages, smooth navigation, and fast performance to improve conversions, customer experience, and overall online sales.",
    link: "https://cowboysjackets.com/",
  },

  // New Service Card 6
  {
    id: 6,
    img: Service6,
    title: "Modern Business Website UI/UX Design & Development",
    description:
      "Designed and developed a modern business website with responsive UI/UX, clean layouts, smooth navigation, optimized performance, and mobile-friendly design to improve usability, engagement, and overall digital presence.",
    link: "https://techware360.com/",
  },
];

export default function MyWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Responsive slider
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }

      setCurrentIndex(0);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto Slider
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = services.length - itemsPerView;

          if (prevIndex >= maxIndex) {
            return 0;
          }

          return prevIndex + 1;
        });
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [itemsPerView, isPaused]);

  return (
    <>
      <style>{`
        .service-section {
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s, color 0.3s;
          overflow: hidden;
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
          border-radius: 18px;
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

        .pw {
          font-size: 16px;
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


        /* ============================= */
        /* AUTO SLIDER ADDED CSS */
        /* ============================= */

        .portfolio-slider {
          width: 100%;
          overflow: hidden;
          padding: 20px 0 50px 0;
        }

        .portfolio-slider-track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .portfolio-slide-item {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          padding: 0 12px;
          box-sizing: border-box;
        }

        .portfolio-slide-item .service-card {
          width: 100%;
        }


        /* Slider Dots */

        .slider-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
        }

        .slider-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          padding: 0;
          background-color: #b5b5b5;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dot.active {
          width: 25px;
          border-radius: 10px;
          background-color: #006666;
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
            padding: 0%;
          }

          .service-description {
            font-size: 15px;
            padding: 0%;
          }

          .pw {
            font-size: 16px;
            text-align: center;
            margin-bottom: 45px;
            padding: 0%;
          }


          /* Mobile Slider */

          .portfolio-slide-item {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0 8px;
          }

          .portfolio-slider {
            padding-bottom: 30px;
          }
        }
      `}</style>

      <section id="portfolio" className="service-section">
        <Container>

          <h2 className="section-heading" data-aos="fade-up">
            My Creative Portfolio
          </h2>

          <p data-aos="fade-up" className="pw" data-aos-delay="200">
            A curated collection of my best projects and skills
          </p>


          {/* AUTO SLIDER START */}

          <div
            className="portfolio-slider"
            data-aos="zoom-in"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            <div
              className="portfolio-slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >

              {services.map(
                ({ id, img, title, description, link }) => (
                  <div className="portfolio-slide-item" key={id}>

                    <Card className="service-card">

                      <Card.Img
                        src={img}
                        alt={title}
                        className="service-image"
                      />

                      <Card.Body>

                        <h3 className="service-title">
                          {title}
                        </h3>

                        <p className="service-description">
                          {description}
                        </p>

                        <Button
                          href={link}
                          variant="outline-light"
                          className="mt-3 theme-button"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Veiw More
                        </Button>

                      </Card.Body>

                    </Card>

                  </div>
                )
              )}

            </div>

          </div>


          {/* SLIDER DOTS */}

          <div className="slider-dots">

            {Array.from({
              length: services.length - itemsPerView + 1,
            }).map((_, index) => (

              <button
                key={index}
                className={`slider-dot ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />

            ))}

          </div>

          {/* AUTO SLIDER END */}

        </Container>
      </section>
    </>
  );
}