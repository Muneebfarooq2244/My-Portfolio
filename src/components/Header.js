import React, { useState, useEffect } from "react";
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        navbar.classList.add("navbar-hidden");
      } else {
        navbar.classList.remove("navbar-hidden");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = (
    <>
      <Nav.Link href="#home" onClick={handleClose}>
        Home
      </Nav.Link>
      <Nav.Link href="#about" onClick={handleClose}>
        About
      </Nav.Link>
      <Nav.Link href="#services" onClick={handleClose}>
        Services
      </Nav.Link>
      <Nav.Link href="#portfolio" onClick={handleClose}>
        Portfolio
      </Nav.Link>
      <Nav.Link href="#contact" onClick={handleClose}>
        Contact
      </Nav.Link>
    </>
  );

  const customStyles = `
    :root {
      --bg-color: #ffffff;
      --text-color: #000000;
      --primary-color: #006666;
      --nav-bg-color: #f0f0f0ff;
      --nav-text-color: #212529;
      --link-hover-color: #009797ff;
    }
    body.dark-theme {
      --bg-color: #121212;
      --text-color: #f0f0f0;
      --primary-color: #006666;
      --nav-bg-color: #212529;
      --nav-text-color: #f0f0f0;
      --link-hover-color: #009797ff;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      padding-top: 70px;
    }

    .left-col {
      width: 25%;
    }
    .center-col {
      width: 50%;
    }
    .right-col {
      width: 25%;
    }

    @media (max-width: 800px) {
      .left-col {
        width: 30% !important;
      }
      .center-col {
        width: 20% !important;
      }
      .right-col {
        width: 20% !important;
      }
      body {
        padding-top: 95px;
      }
    }

    .navbar {
      background-color: var(--nav-bg-color) !important;
      color: var(--nav-text-color) !important;
      border-radius: 20px;
      position: fixed;
      width: 1300px;
      margin-top: 10px;
     margin-left: -6px;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .navbar .nav-link {
      color: var(--nav-text-color) !important;
      font-weight: 500;
      position: relative;
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .navbar .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 2px;
      background-color: var(--primary-color);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    .navbar .nav-link:hover::after {
      width: 100%;
    }

    .navbar .nav-link:hover {
      color: var(--link-hover-color) !important;
      transform: translateY(-3px);
    }

    .navbar-toggler {
      padding: 4.5px 5px;
      font-size: 15px;
      line-height: 1;
      background-color: transparent;
      border: 2px solid #066;
      border-radius: 8px;
    }

    .navbar-hidden {
      top: -100px;
    }

    .custom-toggler-icon {
      color: #006666;
      font-size: 20px;
    }

    .theme-toggle {
      cursor: pointer;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
      border-radius: 20%;
      padding: 7px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      transition: transform 0.2s ease;
    }

    .theme-toggle:hover {
      transform: scale(0.9);
    }

    @media (max-width: 800px) {
      .theme-toggle {
        width: 35px;
        height: 35px;
      }

      .navbar {
        width: 94%;
        margin-left: -5px;
      }
    }

    .logo img {
      max-width: 80%;
      height: auto;
      opacity: 0;
      animation: fadeInLogo 1s ease forwards;
      margin-top: 5px;
      margin-bottom: -15px;
    }

    @keyframes fadeInLogo {
      to {
        opacity: 1;
      }
    }

    @media (max-width: 800px) {
      .logo img {
        max-width: 165%;
        height: auto;
        opacity: 0;
        animation: fadeInLogo 1s ease forwards;
        margin: 0%;
      }
      .navbar-brand {
        padding-top: 15px;
      }
      .offcanvas-header .btn-close {
        padding: 8px 8px;
        margin-left: auto;
        border: 2px solid #006666;
        margin-right: 25px;
        color: #006666;
        font-size: 15px;
      }
    }

    .offcanvas {
      background-color: var(--nav-bg-color) !important;
      color: var(--nav-text-color) !important;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .offcanvas .nav-link {
      color: var(--nav-text-color) !important;
    }

    .offcanvas .nav-link:hover {
      color: var(--link-hover-color) !important;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>

      <BootstrapNavbar expand="lg" className="py-3 navbar" sticky="top">
        <Container fluid>
          <div className="w-100">
            <Row className="align-items-center">
              <Col className="left-col d-flex align-items-center logo">
                <BootstrapNavbar.Brand href="#">
                  <img src={logo} alt="Logo" height="40" />
                </BootstrapNavbar.Brand>
              </Col>

              <Col className="center-col d-none d-lg-flex justify-content-center">
                <Nav>{navLinks}</Nav>
              </Col>

              <Col className="right-col d-flex justify-content-end align-items-center">
                <BootstrapNavbar.Toggle
                  aria-controls="offcanvasNavbar"
                  onClick={handleShow}
                  className="d-lg-none me-2 navbar-toggler"
                >
                  <FaBars className="custom-toggler-icon" />
                </BootstrapNavbar.Toggle>

                <div
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </div>
              </Col>
            </Row>
          </div>

          {/* Offcanvas for Mobile */}
          <Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            placement="start"
            backdrop
            className="d-lg-none"
          >
            <Offcanvas.Header className="d-flex justify-content-between align-items-center px-3 pt-3 pb-2">
              <Offcanvas.Title>Menu</Offcanvas.Title>
              <FaTimes
                onClick={handleClose}
                style={{
                  cursor: "pointer",
                  color: "#006666",
                  fontSize: "28px",
                  border: "2px solid #006666",
                  borderRadius: "5px",
                  padding: "4px",
                  marginRight: "30px",
                }}
              />
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                {navLinks}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </BootstrapNavbar>
    </>
  );
}

export default Header;
