import React, { useState, useEffect } from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../assets/testimonials1.jpg";
import img2 from "../assets/testimonials2.jpg";
import img3 from "../assets/testimonials3.jpg";

const testimonials = [
  {
    text: "Collaborating with this team has been an outstanding experience. Their expertise in full-stack development is unmatched, and their problem-solving capabilities consistently exceed expectations. I highly recommend their services to anyone seeking top-tier development talent.",
    author: "John Doe",
    image: img1,
  },
  {
    text: "The team's dedication and meticulous attention to detail are evident in every project. Their innovative approach to both frontend and backend development has not only delivered exceptional results but also significantly expanded my own understanding of the field.",
    author: "Jane Smith",
    image: img2,
  },
  {
    text: "If you're seeking a developer who consistently exceeds expectations, this is the team to trust. Their ability to navigate complex challenges and deliver high-quality, scalable solutions is truly impressive.",
    author: "Michael Brown",
    image: img3,
  },
];

const Testimonials = () => {
  const [darkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Container className="text-center py-5" data-aos="fade-up">
        <h2 className="mb-4 fw-bold">What Clients Say</h2>

        <Carousel indicators={true} controls={false} interval={5000} fade>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div
                className="testimonial-card mx-auto p-4 shadow-sm rounded"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Image
                  src={testimonial.image}
                  roundedCircle
                  className="mb-3"
                  width={100}
                  height={100}
                  alt={testimonial.author}
                />
                <p className="testimonial-text">“{testimonial.text}”</p>
                <h6 className="testimonial-author fw-semibold mt-3">
                  – {testimonial.author}
                </h6>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <style>{`
        .testimonial-card {
          max-width: 600px;
          background-color: var(--bg-color, #fff);
          color: var(--text-color, #000);
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          padding:0px;
        }

        .carousel-indicators {
          bottom: -30px;
        }

        .carousel-indicators [data-bs-target] {
          background-color: #009191;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 5px;
        }

        .carousel-indicators .active {
          background-color: #006666;
        }

        @media (max-width: 576px) {
          .testimonial-text {
            font-size: 1rem;
          }
          .testimonial-card {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
