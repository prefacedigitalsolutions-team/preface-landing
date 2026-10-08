import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const statementRef = useRef(null);
  const imageRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ===============================
         TOP REVEAL
      =============================== */

      gsap.fromTo(
        topRef.current,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );


      /* ===============================
         HEADING
      =============================== */

      gsap.fromTo(
        headingRef.current,
        {
          x: -70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );


      /* ===============================
         CONTENT
      =============================== */

      gsap.fromTo(
        contentRef.current,
        {
          x: 70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );


      /* ===============================
         STATEMENT
      =============================== */

      gsap.fromTo(
        statementRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );


      /* ===============================
         LINE
      =============================== */

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.2,
          transformOrigin: "left center",
          ease: "power3.out",

          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );


      /* ===============================
         IMAGE
      =============================== */

      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.15,
        },
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",

          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );


      /* ===============================
         IMAGE PARALLAX
      =============================== */

      gsap.to(imageRef.current, {
        yPercent: -7,
        ease: "none",

        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >

      <div className="about-container">

        {/* =================================
            TOP BAR
        ================================= */}

        <div
          className="about-top"
          ref={topRef}
        >

          <div className="about-label">

            <span className="about-label-line"></span>

            ABOUT US

          </div>

          <span className="about-index">
            02 — 04
          </span>

        </div>


        {/* =================================
            MAIN INTRO
        ================================= */}

        <div className="about-intro">

          {/* LEFT */}

          <div
            className="about-heading"
            ref={headingRef}
          >

            <span className="about-overline">
              WHAT WE DESIGN
            </span>

            <h2>
              POWERFUL IDEAS
              <br />

              <em>TOPOWER </em>
              <br />

              YOUR BRAND
            </h2>

            <div className="about-heading-decoration">

              <span></span>

              <span></span>

              <span></span>

            </div>

          </div>


          {/* RIGHT */}

          <div
            className="about-content"
            ref={contentRef}
          >

            <p className="about-lead">
              At Preface Communications, we've been designing, photographing and printing catalogues and brochures for manufacturers, corporates and SMEs across Delhi NCR and India for over three decades, from our in-house studio in Janakpuri, New Delhi.
            </p>

            <p>
              <span>Product catalogues</span>— for manufacturers who need to showcase large or technical product ranges clearly and eloquently
            </p>

            <p>
             <span> Corporate brochures</span>— for companies presenting services, capabilities or company profiles to clients and investors
            </p>

            <p>
             <span>Exhibition & trade show materials</span>— catalogues and posters built for trade fairs & exhibitions
            </p>

             <p>
             <span>E-catalogues</span>— digital, shareable versions optimised for WhatsApp and email, alongside your printed run Websites-- advanced seo friendly websites built to generate leads
            </p>

            <a
              href="#services"
              className="about-explore"
            >
              <span>
                Explore what we do
              </span>

              <strong>
                ↗
              </strong>
            </a>

          </div>

        </div>


        {/* =================================
            STATEMENT
        ================================= */}

        <div
          className="about-statement"
          ref={statementRef}
        >

          <div className="statement-number">
            01
          </div>

          <div className="statement-content">

            <p>
              OUR BELIEF
            </p>

            <h3>
              Good communication
              <br />

              doesn't just
              <em> look good.</em>

              <br />

              It makes people
              <strong> feel something.</strong>
            </h3>

          </div>

          <div className="statement-mark">
            +
          </div>

        </div>


        {/* =================================
            IMAGE SECTION
        ================================= */}

        <div className="about-image-section">

          <div className="about-image-wrapper">

            <img
              ref={imageRef}
              src="/img/About-banar-1.jpg"
              alt="Creative team and workspace"
            />

            <div className="about-image-gradient"></div>

            <div className="about-image-title">

              <span>
                THE WAY WE WORK
              </span>

              <strong>
                Think deeply.
                <br />
                Create boldly.
              </strong>

            </div>

          </div>


          {/* Floating Card */}

          <div className="about-floating-card">

            <div className="floating-card-top">

              <span>
                OUR APPROACH
              </span>

              <span>
                01 / 03
              </span>

            </div>

            <p>
              Strategy before design.
              Purpose before decoration.
              Ideas before execution.
            </p>

            <div className="floating-card-arrow">
              ↗
            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM LINE
        ================================= */}

        <div
          className="about-bottom-line"
          ref={lineRef}
        ></div>


        <div className="about-bottom-text">

          <span>
            BUILT ON IDEAS
          </span>

          <span>
            DRIVEN BY CURIOSITY
          </span>

          <span>
            CREATED FOR IMPACT
          </span>

        </div>

      </div>

    </section>
  );
}

export default About;
