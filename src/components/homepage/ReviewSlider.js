import React, { useEffect, useState } from "react";

const DATA = [
  {
    name: "Daniel Clark",
    role: "Marketing Director",
    quote:
      "Our new WordPress website is faster, cleaner, and much easier for our team to manage.",
    text: "The team rebuilt our website with a modern structure, responsive design, and a much better editing experience. Performance improved significantly, the launch was smooth, and every detail was handled professionally.",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Lily Robinson",
    role: "Product Manager",
    quote:
      "The new frontend feels fast, polished, and consistent across every screen.",
    text: "They transformed our designs into a responsive, user-friendly interface with smooth interactions and excellent attention to detail. The experience now feels significantly more professional on both desktop and mobile.",
    image: "https://i.pravatar.cc/200?img=47",
  },
  {
    name: "Olivia Morgan",
    role: "Business Owner",
    quote:
      "Our backend is now more stable, scalable, and much easier to maintain.",
    text: "The team improved our API structure, integrations, and overall backend architecture. Communication was clear throughout the project, and the final system gave us the reliability and flexibility we needed.",
    image: "https://i.pravatar.cc/200?img=44",
  },
  {
    name: "Michael Anderson",
    role: "eCommerce Manager",
    quote:
      "They turned our Shopify store into a much better shopping experience.",
    text: "From product pages and collections to mobile responsiveness and checkout flow, the entire store feels cleaner and more premium. The team understood our brand and delivered improvements that made a real difference.",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    name: "Sophia Martinez",
    role: "Co-Founder, ScaleGrid",
    quote:
      "They handled our complete product build with consistency from frontend to backend.",
    text: "We needed a team that could understand the complete product, not just individual screens. They connected the frontend, backend, APIs, and responsive UI into one smooth experience while keeping the project organized and on schedule.",
    image: "https://i.pravatar.cc/200?img=49",
  },
  {
    name: "James Wilson",
    role: "Operations Director",
    quote:
      "The final website is fast, professional, and exactly what our business needed.",
    text: "The entire process was smooth from planning through launch. They understood our goals, communicated clearly, and delivered a responsive website that looks strong and performs well across devices.",
    image: "https://i.pravatar.cc/200?img=13",
  },
];

function Stars({ className = "" }) {
  return <div className={`exactTS-stars ${className}`}>★★★★★</div>;
}

function LeftArrow() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="M15 18 9 12l6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg viewBox="0 0 24 24">
      <path
        d="m9 6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge() {
  return (
    <svg viewBox="0 0 32 32">
      <path
        d="M16 2.5l3 2.1 3.7-.3 1.5 3.4 3.3 1.6-.3 3.7 2 3-2 3 .3 3.7-3.3 1.6-1.5 3.4-3.7-.3-3 2.1-3-2.1-3.7.3-1.5-3.4-3.3-1.6.3-3.7-2-3 2-3-.3-3.7 3.3-1.6 1.5-3.4 3.7.3 3-2.1z"
        fill="#006666"
      />

      <path
        d="m10.7 16 3.2 3.1 7-7.2"
        stroke="#fff"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ExactTestimonialSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = DATA.length;

  const first = DATA[active];
  const second = DATA[(active + 1) % total];
  const third = DATA[(active + 2) % total];

  const next = () => {
    setActive((v) => (v + 1) % total);
  };

  const prev = () => {
    setActive((v) => (v - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((v) => (v + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <section
      className="exactTS-root"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="exactTS-two-column">
        <div className="exactTS-left-column">
          <div className="exactTS-label">
            <span>TESTIMONIALS</span>
            <i />
          </div>

          <h1 className="exactTS-left-title">
            What Our Clients
            <br />
            Say About Us
          </h1>

          <p className="exactTS-left-description">
            Real stories from businesses who have
            <br />
            partnered with us to build better, faster,
            <br />
            and more impactful digital experiences.
          </p>

          <div className="exactTS-left-rating">
            <div className="exactTS-rating-main">
              <strong>4.9/5</strong>

              <div className="exactTS-rating-stars">★★★★★</div>

              <span>CLIENT RATING</span>
            </div>

            <div className="exactTS-rating-line" />

            <p>
              Trusted by 500+
              <br />
              happy clients
              <br />
              worldwide.
            </p>
          </div>
        </div>
        <div className="exactTS-canvas">
          {/* MAIN CARD */}
          <article className="exactTS-main">
            <div className="exactTS-top">
              <div className="exactTS-quote">“</div>
              <Stars />
            </div>

            <h2>“{first.quote}”</h2>

            <p className="exactTS-body">{first.text}</p>

            <div className="exactTS-divider" />

            <div className="exactTS-userrow">
              <div className="exactTS-mainavatar">
                <img src={first.image} alt={first.name} />

                <span>
                  <Badge />
                </span>
              </div>

              <div className="exactTS-userinfo">
                <strong>{first.name}</strong>
                <small>{first.role}</small>
              </div>

              <div className="exactTS-verified">
                <Badge />
                <span>Verified Review</span>
              </div>
            </div>
          </article>

          {/* SECOND CARD */}
          <article className="exactTS-back exactTS-back1">
            <Stars />

            <h3>“{second.quote}”</h3>

            <div className="exactTS-backuser">
              <img src={second.image} alt={second.name} />
              <strong>{second.name}</strong>
              <small>{second.role}</small>
            </div>
          </article>

          {/* THIRD CARD */}
          <article className="exactTS-back exactTS-back2">
            <Stars />

            <h3>“{third.quote}”</h3>

            <div className="exactTS-backuser">
              <img src={third.image} alt={third.name} />
              <strong>{third.name}</strong>
              <small>{third.role}</small>
            </div>
          </article>

          {/* CONTROLS */}
          <div className="exactTS-controls">
            <button onClick={prev}>
              <LeftArrow />
            </button>

            <div className="exactTS-progressbox">
              <b>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </b>

              <div className="exactTS-track">
                <span
                  style={{
                    width: `${((active + 1) / total) * 100}%`,
                  }}
                />
              </div>
            </div>

            <button onClick={next}>
              <RightArrow />
            </button>
          </div>

          <div className="exactTS-script">
            Happy
            <br />
            Clients
            <br />
            Brighter
            <br />
            Futures
            <i />
          </div>
        </div>
      </div>
      <style>{`

        /* ==================================================
           FULL SECTION RESET
        ================================================== */



        .exactTS-two-column {
        width: 1300px;

        min-height: 796px;

        margin: 0 auto;

        display: grid;

        grid-template-columns:
          minmax(0, 30%)
          minmax(0, 70%);

        align-items: center;

        overflow: hidden;
      }


        .exactTS-root,
        .exactTS-root *,
        .exactTS-root *::before,
        .exactTS-root *::after {
          box-sizing: border-box;
        }

        .exactTS-root {
          --green: #006666;
          --greenRGB: 0,102,102;

          width: 100%;
          margin: 0;
          padding: 0;

          overflow: hidden;
/*
          background:
            radial-gradient(
              ellipse at 45% 45%,
              rgba(var(--greenRGB), .06) 0%,
              rgba(var(--greenRGB), .025) 38%,
              transparent 65%
            ),*/
            linear-gradient(
              135deg,
              #fff 0%,
              #fcfefe 50%,
              #f8fbfb 100%
            );

          font-family: Arial, Helvetica, sans-serif;
        }


        /* ==================================================
           EXACT REFERENCE CANVAS
           1015 x 796
        ================================================== */

        .exactTS-canvas {
          position: relative;

          width: 1100px!important;
          height: 790px;

          margin: 0 auto;

          max-width: none;

          overflow: hidden;

          isolation: isolate;
        }


        /* ==================================================
           MAIN CARD
        ================================================== */

        .exactTS-main {
          position: absolute !important;

          left: 38px !important;
          top: 17px !important;

          width: 550px !important;
          height: 600px !important;

          margin: 0 !important;

          padding:
            45px
            50px
            37px
            56px !important;

          z-index: 30;

          background:
            rgba(255,255,255,.985);

          border:
            2px solid #006666;

          border-radius:
            35px !important;

          box-shadow:
            0 28px 65px
            rgba(var(--greenRGB), .065);

          transform: none !important;

          overflow: hidden;
        }


        /* TOP */

        .exactTS-top {
          width: 100%;
          height: 73px;

          display: flex;

          align-items: flex-start;
          justify-content: space-between;
        }


        .exactTS-quote {
          margin-top: -18px;

          height: 80px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 90px;

          line-height: .8;

          font-weight: 700;

          color:
            rgba(var(--greenRGB), .14);
        }


        /* STARS */

        .exactTS-stars {
          margin: 7px 0 0 !important;

          padding: 0 !important;

          color: #ffb800;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 27px !important;

          font-weight: 400 !important;

          line-height: 1 !important;

          letter-spacing:
            2.5px !important;

          white-space: nowrap;
        }


        /* ==================================================
           MAIN QUOTE
        ================================================== */

        .exactTS-main h2 {
          display: block;

          width: 100%;

          margin:
            19px
            0
            0 !important;

          padding: 0 !important;


          background: none !important;

          font-family:
            Georgia,
            "Times New Roman",
            serif !important;

          font-size:
            30px !important;

          font-weight:
            500 !important;

          font-style:
            normal !important;

          line-height:
            1.34 !important;

          letter-spacing:
            -.5px !important;

          text-align:
            left !important;

            color:#000;

          text-transform:
            none !important;
        }


        /* BODY */

        .exactTS-body {
          display: block;

          width: 100%;

          margin:
            31px
            0
            0 !important;

          padding: 0 !important;

          color:
            #64768d !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif !important;

          font-size:
            18px !important;

          font-weight:
            400 !important;

          line-height:
            1.58 !important;

          letter-spacing:
            0 !important;

          text-align:
            left !important;
        }


        /* LINE */

        .exactTS-divider {
          width: 100%;
          height: 1px;

          margin-top:
            31px;


        }


        /* ==================================================
           MAIN PROFILE
        ================================================== */

        .exactTS-userrow {
          width: 100%;
          height: 105px;

          margin-top: 25px;

          display: flex;

          align-items: center;
        }


        .exactTS-mainavatar {
          position: relative;

          width: 103px;
          height: 103px;

          flex:
            0 0 103px;
        }


        .exactTS-mainavatar > img {
          display: block;

          width: 103px !important;
          height: 103px !important;

          margin: 0 !important;

          padding: 0 !important;

          object-fit: cover;

          border:
            4px solid #006666;

          border-radius:
            50% !important;

          box-shadow:
            0 0 0 1px
            #d7dfe2,
            0 7px 17px
            rgba(0,0,0,.11);
        }


        .exactTS-mainavatar > span {
          position: absolute;

          width: 31px;
          height: 31px;

          right: -3px;
          bottom: 1px;

          display: grid;

          place-items: center;

          padding: 2px;

          border-radius: 50%;

          background: #fff;
        }


        .exactTS-mainavatar svg {
          display: block;

          width: 100%;
          height: 100%;
        }


        .exactTS-userinfo {
          margin-left: 26px;

          min-width: 180px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 7px;
        }


        .exactTS-userinfo strong {
          margin: 0 !important;

          padding: 0 !important;

          color:
            #111d32 !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif !important;

          font-size:
            22px !important;

          font-weight:
            700 !important;

          line-height:
            1.1 !important;

          white-space:
            nowrap;
        }


        .exactTS-userinfo small {
          margin: 0 !important;

          padding: 0 !important;

          color:
            #687a91 !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif !important;

          font-size:
            18px !important;

          line-height:
            1.2 !important;

          white-space:
            nowrap;
        }


        .exactTS-verified {
          margin-left: auto;

          display: flex;

          align-items: center;

          gap: 7px;

          padding:
            10px
            14px;

          color:
            var(--green);

        

          border-radius:
            11px;

          font-size:
            14px;

          white-space:
            nowrap;
        }


        .exactTS-verified svg {
          width: 19px;
          height: 19px;

          flex: 0 0 19px;
        }


        /* ==================================================
           BACK CARDS
        ================================================== */

        .exactTS-back {
          position: absolute !important;

          margin: 0 !important;

          background:
            rgba(255,255,255,.95);

          border:
            1px solid
            rgba(var(--greenRGB), .14);

          box-shadow:
            0 24px 60px
            rgba(var(--greenRGB),.045);

          overflow: hidden;
        }


        /* SECOND */

        .exactTS-back1 {
          left: 590px !important;
          top: 60px !important;

          width: 276px !important;
          height: 494px !important;

          z-index: 20;

          border: 1.5px solid #006666;
          padding:
            63px
            24px
            30px !important;

          border-radius:
            30px !important;

          opacity: .88;

          transform:
            rotate(-3deg) !important;
        }


        /* THIRD */

        .exactTS-back2 {
          left: 785px !important;
          top: 111px !important;

          width: 225px !important;
          height: 408px !important;

          z-index: 10;

          padding:
            54px
            20px
            27px !important;

          border-radius:
            27px !important;

          opacity: .58;

          transform:
            rotate(-4deg) !important;
        }


        .exactTS-back .exactTS-stars {
          width: 100%;

          margin: 0 !important;

          text-align: center;

          font-size:
            22px !important;
        }


        .exactTS-back2 .exactTS-stars {
          font-size:
            19px !important;
        }


        /* BACK QUOTES */

        .exactTS-back h3 {
          display: block;

          margin:
            74px
            auto
            0 !important;

          padding: 0 !important;

          color:
            #38536b !important;

          background:
            transparent !important;

          font-family:
            Georgia,
            "Times New Roman",
            serif !important;

          font-weight:
            400 !important;

          font-style:
            normal !important;

          line-height:
            1.42 !important;

          text-align:
            center !important;

          text-transform:
            none !important;
        }


        .exactTS-back1 h3 {
          width: 225px;

          font-size:
            22px !important;
        }


        .exactTS-back2 h3 {
          width: 180px;

          font-size:
            18px !important;
        }


        /* BACK USERS */

        .exactTS-backuser {
          position: absolute;

          left: 0;
          bottom: 41px;

          width: 100%;

          display: flex;

          flex-direction: column;

          align-items: center;
        }


        .exactTS-backuser img {
          display: block;

          width: 76px !important;
          height: 76px !important;

          margin: 0 !important;

          object-fit: cover;

          border:
            4px solid #fff;

          border-radius:
            50% !important;

          box-shadow:
            0 0 0 1px
            #d6dfe1;
        }


        .exactTS-back2 .exactTS-backuser img {
          width:
            67px !important;

          height:
            67px !important;
        }


        .exactTS-backuser strong {
          margin-top:
            13px;

          color:
            #19374e !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif !important;

          font-size:
            17px !important;

          font-weight:
            700 !important;

          line-height:
            1 !important;

          white-space:
            nowrap;
        }


        .exactTS-back2
        .exactTS-backuser strong {
          font-size:
            15px !important;
        }


        .exactTS-backuser small {
          margin-top:
            8px;

          color:
            #74889c !important;

          font-family:
            Arial,
            Helvetica,
            sans-serif !important;

          font-size:
            14px !important;

          white-space:
            nowrap;
        }


        .exactTS-back2
        .exactTS-backuser small {
          font-size:
            12px !important;
        }


        /* ==================================================
           NAVIGATION
        ================================================== */

        .exactTS-controls {
          position: absolute;

          left: 159px;
          top: 670px;

          width: 438px;
          height: 65px;

          z-index: 40;

          display: flex;

          align-items: center;

          justify-content:
            space-between;
        }


        .exactTS-controls button {
          width: 63px !important;
          height: 63px !important;

          min-width: 63px;

          margin: 0 !important;

          padding: 0 !important;

          display: grid;

          place-items: center;

          color:
            var(--green) !important;

          background:
            #fff !important;

          border:
            1px solid
            #d6e0e2 !important;

          border-radius:
            50% !important;

          cursor: pointer;

          box-shadow:
            0 8px 20px
            rgba(0,0,0,.055);

          appearance: none;
        }


        .exactTS-controls button:hover {
          color:
            #fff !important;

          background:
            var(--green) !important;

          border-color:
            var(--green) !important;
        }


        .exactTS-controls button svg {
          width: 27px;
          height: 27px;
        }


        .exactTS-progressbox {
          width: 228px;
        }


        .exactTS-progressbox b {
          display: block;

          margin:
            0
            0
            15px;

          color:
            #18364d;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size:
            18px;

          line-height: 1;

          text-align:
            center;
        }


        .exactTS-track {
          width: 228px;
          height: 8px;

          overflow: hidden;

          background:
            #dfe6e8;

          border-radius:
            999px;
        }


        .exactTS-track span {
          display: block;

          height: 8px;

          background:
            var(--green);

          border-radius:
            999px;

          transition:
            width .5s ease;
        }


        /* ==================================================
           SCRIPT TEXT
        ================================================== */

        .exactTS-script {
          position: absolute;

          right: 22px;
          bottom: 42px;

          color:
            rgba(var(--greenRGB),.22);

          font-family:
            "Segoe Print",
            "Bradley Hand",
            cursive;

          font-size:
            26px;

          font-style:
            italic;

          line-height:
            .96;

          text-align:
            center;

          transform:
            rotate(-5deg);
        }


        .exactTS-script i {
          display: block;

          width: 68px;
          height: 2px;

          margin:
            14px
            auto
            0;

          background:
            rgba(var(--greenRGB),.28);

          transform:
            rotate(-8deg);
        }


        /* ==================================================
           SMALL SCREEN
           DESKTOP DESIGN KO DESTROY NAHI KAREGA
        ================================================== */

        @media (max-width: 1014px) {

          .exactTS-root {
            overflow-x: auto;
          }

          .exactTS-canvas {
            margin-left: 0;
          }

        }



        /* ==================================================
           CSS FIXES + RESPONSIVE OVERRIDES
           Existing JSX / slider logic / card design untouched
        ================================================== */

        /* Keep the current desktop 30 / 70 composition, but make
           the section fluid instead of locking it to 1300px. */
        .exactTS-two-column {
          width: min(1500px, calc(100% - 40px));
          max-width: 1500px;
          grid-template-columns: minmax(0, 30%) minmax(0, 70%);
          overflow: hidden;
        }

        /* LEFT COLUMN STYLES WERE MISSING IN THE ORIGINAL CSS */
        .exactTS-left-column {
          width: 100%;
          min-width: 0;
          padding:  1px;
          position: relative;
          z-index: 50;
          align-self: center;
        }

        .exactTS-label {
          display: flex;
          align-items: center;
          gap: 22px;
          margin: 0 0 42px;
        }

        .exactTS-label span {
          margin: 0;
          font-family: Poppins;
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: .36em;
          white-space: nowrap;
        }

        .exactTS-label i {
          display: block;
          width: 58px;
          height: 3px;
          flex: 0 0 58px;
          border-radius: 99px;
          background: var(--green);
        }

        .exactTS-left-title {
          margin: 0 !important;
          padding: 0 !important;
          font-family: Poppins !important;
          font-size: 45px !important;
          font-weight: 800 !important;
          line-height: 1.08 !important;
          letter-spacing: -2.1px !important;
          text-align: left !important;
          text-transform: none !important;
        }

        .exactTS-left-description {
          margin: 32px 0 0 !important;
          padding: 0 !important;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 17px !important;
          font-weight: 400 !important;
          line-height: 1.55 !important;
          letter-spacing: 0 !important;
          text-align: left !important;
        }

        .exactTS-left-rating {
          margin-top: 54px;
          display: flex;
          align-items: center;
          gap: 34px;
          min-width: 0;
        }

        .exactTS-rating-main {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 0 0 auto;
        }

        .exactTS-rating-main strong {
          margin: 0 !important;
          padding: 0 !important;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 38px !important;
          font-weight: 800 !important;
          line-height: 1 !important;
        }

        .exactTS-rating-stars {
          margin-top: 9px;
          color: #ffb800;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 25px;
          line-height: 1;
          letter-spacing: 3px;
          white-space: nowrap;
        }

        .exactTS-rating-main > span {
          margin-top: 13px;
          color: #607188;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: .28em;
          white-space: nowrap;
        }

        .exactTS-rating-line {
          width: 1px;
          height: 118px;
          flex: 0 0 1px;
          background: #d7dfe3;
        }

        .exactTS-left-rating > p {
          min-width: 0;
          margin: 0 !important;
          padding: 0 !important;
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 18px !important;
          font-weight: 400 !important;
          line-height: 1.48 !important;
          text-align: left !important;
        }

        /* Prevent global theme styles from stretching the SVGs/images. */
        .exactTS-root svg {
          display: block;
          max-width: 100%;
        }

        .exactTS-root button {
          font: inherit;
        }

        /* The canvas remains the same desktop design. It is only aligned
           to the start of the slider column to avoid unexpected centering. */
        .exactTS-canvas {
          margin: 0 !important;
          justify-self: start;
        }

        /* --------------------------
           MEDIUM DESKTOP / LAPTOP
        --------------------------- */
        @media (max-width: 1380px) and (min-width: 1101px) {
          .exactTS-two-column {
            width: calc(100% - 28px);
          }

          .exactTS-left-column {
            padding-left: 12px;
            padding-right: 24px;
          }

          .exactTS-label {
            margin-bottom: 34px;
          }

          .exactTS-left-title {
            font-size: clamp(38px, 3.5vw, 48px) !important;
            letter-spacing: -1.6px !important;
          }

          .exactTS-left-description {
            margin-top: 26px !important;
            font-size: 16px !important;
          }

          .exactTS-left-rating {
            margin-top: 42px;
            gap: 20px;
          }

          .exactTS-rating-main strong {
            font-size: 36px !important;
          }

          .exactTS-rating-stars {
            font-size: 23px;
            letter-spacing: 2px;
          }

          .exactTS-rating-main > span {
            font-size: 11px;
            letter-spacing: .22em;
          }

          .exactTS-rating-line {
            height: 100px;
          }

          .exactTS-left-rating > p {
            font-size: 15px !important;
          }
        }

        /* --------------------------
           TABLET + MOBILE
           Same visual language, stacked layout
        --------------------------- */
        @media (max-width: 1100px) {
          .exactTS-root {
            overflow-x: hidden !important;
          }

          .exactTS-two-column {
            width: min(760px, calc(100% - 28px));
            min-height: 0;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
            overflow: visible;
            padding: 58px 0 44px;
          }

          .exactTS-left-column {
            width: 100%;
            padding: 0 18px;
            text-align: center;
          }

          .exactTS-label {
            justify-content: center;
            margin-bottom: 28px;
          }

          .exactTS-left-title {
            font-size: clamp(40px, 7vw, 54px) !important;
            line-height: 1.08 !important;
            text-align: center !important;
          }

          .exactTS-left-description {
            max-width: 620px;
            margin: 24px auto 0 !important;
            font-size: 17px !important;
            text-align: center !important;
          }

          .exactTS-left-rating {
            width: fit-content;
            max-width: 100%;
            margin: 36px auto 0;
            justify-content: center;
            gap: 28px;
          }

          .exactTS-rating-main {
            align-items: center;
          }

          .exactTS-left-rating > p {
            text-align: left !important;
          }

          /* Turn only the canvas layout responsive; card styling is retained. */
          .exactTS-canvas {
            width: 100% !important;
            height: 700px !important;
            min-height: 700px;
            margin: 0 !important;
            padding: 0;
            overflow: hidden !important;
            display: block;
            isolation: isolate;
          }

          .exactTS-main {
            left: 2% !important;
            top: 0 !important;
            width: min(550px, 78vw) !important;
            height: auto !important;
            min-height: 600px;
            margin: 0 !important;
          }

          /* Keep the layered-card design on tablet/mobile; only reposition it. */
          .exactTS-back1 {
            display: block !important;
            left: 70% !important;
            top: 50px !important;
          }

          .exactTS-back2 {
            display: block !important;
            left: 88% !important;
            top: 105px !important;
          }

          .exactTS-script {
            display: none !important;
          }

          .exactTS-controls {
            position: absolute;
            left: 50%;
            top: auto;
            bottom: 0;
            width: min(438px, calc(100% - 36px));
            height: auto;
            margin: 0;
            transform: translateX(-50%);
          }

          .exactTS-progressbox {
            width: min(228px, 52vw);
          }

          .exactTS-track {
            width: 100%;
          }
        }

        /* --------------------------
           MOBILE
        --------------------------- */
        @media (max-width: 640px) {
          .exactTS-two-column {
            width: calc(100% - 18px);
            gap: 32px;
            padding: 40px 0 34px;
          }

          .exactTS-left-column {
            padding: 0 8px;
          }

          .exactTS-label {
            gap: 12px;
            margin-bottom: 22px;
          }

          .exactTS-label span {
            font-size: 11px;
            letter-spacing: .28em;
          }

          .exactTS-label i {
            width: 42px;
            height: 2px;
            flex-basis: 42px;
          }

          .exactTS-left-title {
            font-size: clamp(34px, 10vw, 44px) !important;
            letter-spacing: -1.3px !important;
          }

          .exactTS-left-description {
            font-size: 15px !important;
            line-height: 1.55 !important;
          }

          .exactTS-left-description br {
            display: none;
          }

          .exactTS-left-rating {
            width: 100%;
            margin-top: 30px;
            gap: 16px;
          }

          .exactTS-rating-main strong {
            font-size: 32px !important;
          }

          .exactTS-rating-stars {
            font-size: 20px;
            letter-spacing: 2px;
          }

          .exactTS-rating-main > span {
            font-size: 10px;
            letter-spacing: .18em;
          }

          .exactTS-rating-line {
            height: 86px;
          }

          .exactTS-left-rating > p {
            font-size: 13px !important;
            line-height: 1.45 !important;
          }

          .exactTS-canvas {
            height: 640px !important;
            min-height: 640px;
          }

          .exactTS-main {
            left: 0 !important;
            width: 84% !important;
            min-height: 0;
            padding: 30px 24px 26px !important;
            border-radius: 26px !important;
          }

          .exactTS-back1 {
            left: 76% !important;
            top: 40px !important;
            width: 48% !important;
            height: 420px !important;
            padding: 42px 14px 24px !important;
          }

          .exactTS-back2 {
            left: 94% !important;
            top: 84px !important;
            width: 40% !important;
            height: 350px !important;
            padding: 36px 12px 22px !important;
          }

          .exactTS-back .exactTS-stars {
            font-size: 15px !important;
            letter-spacing: 1px !important;
          }

          .exactTS-back h3 {
            margin-top: 46px !important;
          }

          .exactTS-back1 h3,
          .exactTS-back2 h3 {
            width: 100%;
            font-size: 13px !important;
          }

          .exactTS-backuser {
            bottom: 26px;
          }

          .exactTS-backuser img,
          .exactTS-back2 .exactTS-backuser img {
            width: 50px !important;
            height: 50px !important;
          }

          .exactTS-backuser strong,
          .exactTS-back2 .exactTS-backuser strong {
            margin-top: 8px;
            font-size: 11px !important;
          }

          .exactTS-backuser small,
          .exactTS-back2 .exactTS-backuser small {
            margin-top: 4px;
            font-size: 9px !important;
          }

          .exactTS-top {
            height: 60px;
          }

          .exactTS-quote {
            margin-top: -12px;
            height: 64px;
            font-size: 84px;
          }

          .exactTS-stars {
            margin-top: 4px !important;
            font-size: 20px !important;
            letter-spacing: 1.5px !important;
          }

          .exactTS-main h2 {
            margin-top: 14px !important;
            font-size: clamp(25px, 7.4vw, 31px) !important;
            line-height: 1.34 !important;
            color:#000;
          }

          .exactTS-body {
            margin-top: 24px !important;
            font-size: 15px !important;
            line-height: 1.55 !important;
          }

          .exactTS-divider {
            margin-top: 24px;
          }

          .exactTS-userrow {
            height: auto;
            margin-top: 22px;
          }

          .exactTS-mainavatar,
          .exactTS-mainavatar > img {
            width: 72px !important;
            height: 72px !important;
          }

          .exactTS-mainavatar {
            flex: 0 0 72px;
          }

          .exactTS-mainavatar > span {
            width: 25px;
            height: 25px;
          }

          .exactTS-userinfo {
            min-width: 0;
            margin-left: 14px;
            gap: 5px;
          }

          .exactTS-userinfo strong {
            font-size: 17px !important;
            white-space: normal;
          }

          .exactTS-userinfo small {
            font-size: 14px !important;
            white-space: normal;
          }

          .exactTS-verified {
            display: none;
          }

          .exactTS-controls {
            width: min(350px, calc(100% - 8px));
            margin-top: 2px;
          }

          .exactTS-controls button {
            width: 52px !important;
            height: 52px !important;
            min-width: 52px;
          }

          .exactTS-controls button svg {
            width: 23px;
            height: 23px;
          }

          .exactTS-progressbox {
            width: min(180px, 50vw);
          }

          .exactTS-progressbox b {
            margin-bottom: 10px;
            font-size: 15px;
          }

          .exactTS-track,
          .exactTS-track span {
            height: 6px;
          }
        }

        /* Very small phones */
        @media (max-width: 390px) {
          .exactTS-left-rating {
            gap: 11px;
          }

          .exactTS-rating-main strong {
            font-size: 29px !important;
          }

          .exactTS-rating-stars {
            font-size: 17px;
            letter-spacing: 1px;
          }

          .exactTS-left-rating > p {
            font-size: 12px !important;
          }

          .exactTS-main {
            padding-left: 19px !important;
            padding-right: 19px !important;
          }

          .exactTS-main h2 {
            font-size: 24px !important;
          }

          .exactTS-body {
            font-size: 14px !important;
          }
        }

      `}</style>
    </section>
  );
}
