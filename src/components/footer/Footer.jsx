import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-animate",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      {/* =================================
          BIG CTA
      ================================= */}

      <div className="footer-container">

        <div className="footer-cta footer-animate">

          <span className="footer-label">
            HAVE AN IDEA?
          </span>

          <h2>
            Let's create
            <br />
            <em>something great.</em>
          </h2>

          <a
            href="#contact"
            className="footer-cta-button"
          >
            <span>START A PROJECT</span>

            <span className="footer-cta-icon">
              ↗
            </span>
          </a>

        </div>


        {/* =================================
            FOOTER MAIN
        ================================= */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand footer-animate">

            <a
              href="#home"
              className="footer-logo"
            >
              <img
                src="/img/logo.png"
                alt="Company Logo"
              />
            </a>

            <p>
              Creative communication solutions
              for brands that want to stand out,
              connect and grow.
            </p>


            {/* SOCIAL */}

            <div className="footer-socials">

              <a
                href="#"
                aria-label="WhatsApp"
              >
                WA
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="YouTube"
              >
                YT
              </a>

            </div>

          </div>


          {/* =================================
              EXPLORE
          ================================= */}

          <div className="footer-column footer-animate">

            <span className="footer-column-title">
              EXPLORE
            </span>

            <nav className="footer-links">

              <a href="#home">
                Home
              </a>

              <a href="#about">
                About
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#contact">
                Contact
              </a>

            </nav>

          </div>


          {/* =================================
              SERVICES
          ================================= */}

          <div className="footer-column footer-animate">

            <span className="footer-column-title">
              SERVICES
            </span>

            <nav className="footer-links">

              <a href="#services">
                Web Design
              </a>

              <a href="#services">
                Product Photography
              </a>

              <a href="#services">
                Catalogue & Brochure
              </a>

              <a href="#services">
                Digital Marketing
              </a>

            </nav>

          </div>


          {/* =================================
              CONTACT
          ================================= */}

          <div className="footer-column footer-animate">

            <span className="footer-column-title">
              GET IN TOUCH
            </span>

            <div className="footer-contact">

              <a href="tel:+919876543210">
                +91 98765 43210
              </a>

              <a href="mailto:hello@prefacecommunications.com">
                hello@prefacecommunications.com
              </a>

              <p>
                Janakpuri,
                <br />
                New Delhi, India
              </p>

            </div>

          </div>

        </div>


        {/* =================================
            FOOTER BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Preface Communications.
            All rights reserved.
          </span>

          <div className="footer-bottom-line"></div>

          <a href="#home">
            BACK TO TOP ↑
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
