import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5", logo: "/skills/html5.png" },
  { name: "CSS3", logo: "/skills/css3.png" },
  { name: "JavaScript", logo: "/skills/javascript.png" },
  { name: "React", logo: "/skills/react.png" },
  { name: "Next.js", logo: "/skills/nextjs.png" },
  { name: "PHP", logo: "/skills/php.png" },
  { name: "Shopify", logo: "/skills/shopify.png" },
  { name: "Wordpress", logo: "/skills/WordPress.png" },
  { name: "TypeScript", logo: "/skills/typescript.png" },
  { name: "Tailwind", logo: "/skills/tailwind.png" },
  { name: "Bootstrap", logo: "/skills/bootstrap.png" },
  { name: "Figma", logo: "/skills/figma.png" },
  { name: "Photoshop", logo: "/skills/photoshop.png" },
  { name: "Node.js", logo: "/skills/nodejs.png" },
  { name: "MongoDB", logo: "/skills/mongodb.png" },
  { name: "Git", logo: "/skills/git.png" },
];

export default function TechStack() {
  const [sliderSkills, setSliderSkills] = useState(skills);
  const [animate, setAnimate] = useState(false);
  const [moveDistance, setMoveDistance] = useState(0);

  const groupRef = useRef(null);

  const calculateMoveDistance = () => {
    if (!groupRef.current) return;

    const items = groupRef.current.querySelectorAll(".tech-item");

    if (items.length < 2) return;

    const first = items[0].getBoundingClientRect();
    const second = items[1].getBoundingClientRect();

    setMoveDistance(second.left - first.left);
  };

  useLayoutEffect(() => {
    calculateMoveDistance();

    const resizeObserver = new ResizeObserver(() => {
      calculateMoveDistance();
    });

    if (groupRef.current) {
      resizeObserver.observe(groupRef.current);
    }

    window.addEventListener("resize", calculateMoveDistance);

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener("resize", calculateMoveDistance);
    };
  }, []);

  // Start next slide
  useEffect(() => {
    if (!moveDistance) return;

    const timer = setTimeout(() => {
      setAnimate(true);
    }, 80);

    return () => clearTimeout(timer);
  }, [sliderSkills, moveDistance]);

  // IMPORTANT FIX
  const handleTransitionEnd = (e) => {
    // Child card/logo hover transitions ignore karo
    if (e.target !== e.currentTarget) return;

    // Sirf slider transform complete hone par run ho
    if (e.propertyName !== "transform") return;

    setAnimate(false);

    setSliderSkills((currentSkills) => {
      const [firstSkill, ...remainingSkills] = currentSkills;

      return [...remainingSkills, firstSkill];
    });
  };

  return (
    <>
      <section className="tech-stack-section">
        <div className="tech-container">
          {/* Heading */}
          <div className="tech-heading">
            <div>
              <span className="tech-small-title">TECHNOLOGIES I USE</span>

              <h2>My Digital Expertise</h2>
            </div>

            <div className="tech-heading-line"></div>
          </div>

          {/* Slider */}
          <div className="tech-slider">
            <div
              ref={groupRef}
              className="tech-group"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform:
                  animate && moveDistance
                    ? `translateX(-${moveDistance}px)`
                    : "translateX(0)",

                transition: animate ? "transform 3s linear" : "none",
              }}
            >
              {sliderSkills.map((skill) => (
                <div className="tech-item" key={skill.name}>
                  <div className="tech-card">
                    <div className="tech-glow"></div>

                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="tech-logo"
                    />
                  </div>

                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`

        /* ===============================
           MAIN SECTION
        =============================== */

        .tech-stack-section {
          width: 100%;
          padding: 55px 0;
          overflow: hidden;

          --primary: #00b3b3;
          --primary-dark: #006666;

          --bg: #0d1011;
          --card-bg: #14191c;
          --card-bg-2: #0d1113;

          --text: #ffffff;
          --muted: #8d979c;
          --border: rgba(0, 179, 179, 0.22);
        }

        


        /* ===============================
           HEADING
        =============================== */

        .tech-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 30px;
        }

        .tech-small-title {
          display: block;
          color: var(--primary-dark);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .tech-heading h2 {
          margin: 0;
          font-size: clamp(23px, 3vw, 32px);
          line-height: 1.1;
          font-weight: 700;
        }

     


        /* ===============================
           SLIDER
        =============================== */

        .tech-slider {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 10px 0 15px;
        }

        /* Left Fade */

        .tech-slider::before {
          content: "";
          position: absolute;
          z-index: 5;
          left: 0;
          top: 0;
          bottom: 0;
          width: 40px;
          pointer-events: none;
        }


        .tech-track {
          display: flex;
          width: max-content;
          animation: techScroll 32s linear infinite;
          will-change: transform;
        }


        .tech-group {
          width: calc(100vw - 40px);
          max-width: 1300px;
          display: flex;
          flex-shrink: 0;
          gap: 15px;
          padding-right: 15px;
          box-sizing: border-box;
        }


        /* ===============================
           DESKTOP = 6 ITEMS
        =============================== */

        .tech-item {
          flex: 0 0 calc((100% - 75px) / 6);
          min-width: 0;
          text-align: center;
        }


        /* ===============================
           CARD
        =============================== */

        .tech-card {
          position: relative;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.04),
            0 10px 30px rgba(0,0,0,0.20);
          overflow: hidden;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }


        /* Top Highlight */

        .tech-card::before {
          content: "";
          position: absolute;
          width: 65%;
          height: 1px;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: 0.3s ease;
        }


        /* Background Glow */

        .tech-glow {
          position: absolute;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: var(--primary);
          filter: blur(35px);
          opacity: 0;
          transition: 0.35s ease;
        }


        /* Logo */

        .tech-logo {
          position: relative;
          z-index: 2;
          width: 70px;
          height: 65px;
          object-fit: contain;
          filter: drop-shadow(
            0 5px 8px rgba(0,0,0,0.25)
          );
          transition:
            transform 0.35s ease,
            filter 0.35s ease;
        }


        /* Name */

        .tech-item p {
          margin: 10px 0 0;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.3s ease;
        }


        /* ===============================
           HOVER
        =============================== */

        .tech-item:hover .tech-card {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow:
            0 10px 30px rgba(0, 179, 179, 0.13),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .tech-item:hover .tech-card::before {
          opacity: 1;
        }

        .tech-item:hover .tech-glow {
          opacity: 0.16;
        }

        .tech-item:hover .tech-logo {
          transform: scale(1.13);
        }

        .tech-item:hover p {
          color: var(--primary);
        }


        /* Pause Slider On Hover */

        .tech-slider:hover .tech-track {
          animation-play-state: paused;
        }


        /* ===============================
           ANIMATION
        =============================== */

        @keyframes techScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }


        /* ===============================
           TABLET
        =============================== */

        @media (max-width: 900px) {

          .tech-item {
            flex: 0 0 calc((100% - 45px) / 4);
          }

        }


        /* ===============================
           MOBILE = 3 ITEMS
        =============================== */

        @media (max-width: 600px) {

          .tech-stack-section {
            padding: 35px 0;
          }

          .tech-container {
            width: calc(100% - 24px);
          }

          .tech-heading {
            margin-bottom: 20px;
          }

          .tech-heading-line {
            width: 55px;
          }

          .tech-group {
            width: calc(100vw - 24px);
            gap: 8px;
            padding-right: 8px;
          }

          .tech-item {
            flex: 0 0 calc((100% - 16px) / 3);
          }

          .tech-card {
            height: 78px;
            border-radius: 10px;
          }

          .tech-logo {
            width: 34px;
            height: 34px;
          }

          .tech-item p {
            font-size: 9px;
            margin-top: 7px;
          }

          .tech-slider::before,
          .tech-slider::after {
            width: 15px;
          }

          .tech-track {
            animation-duration: 25s;
          }

        }


        /* ===============================
           LIGHT THEME OPTIONAL
        =============================== */

        [data-theme="light"] .tech-stack-section {
          --bg: #ffffff;
          --text: #101417;
          --muted: #717b80;

          --card-bg: #ffffff;
          --card-bg-2: #f5f8f9;

          --border: rgba(0, 102, 102, 0.20);
        }

        [data-theme="light"] .tech-card {
          background:
            linear-gradient(
              145deg,
              #ffffff,
              #f4f7f8
            );

          box-shadow:
            0 8px 25px rgba(0,0,0,0.07);
        }

        [data-theme="light"] .tech-item p {
          color: #30383b;
        }

      `}</style>
    </>
  );
}
