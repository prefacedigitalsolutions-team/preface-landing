import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);

  const [currentImage, setCurrentImage] = useState(0);

  // Sirf images change hongi
const images = [
  "/img/printing-banar-1.jpg",
  "/img/cataloge-design-banar.jpg",
  "/img/photoshoot-banar-1.jpg",
  "/img/web-design-banar-1.jpg",
];
  /* =========================================
     INITIAL GSAP ANIMATION
  ========================================= */

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.fromTo(
      heroRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );

    tl.fromTo(
      eyebrowRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
      },
      "-=0.2"
    );

    tl.fromTo(
      titleRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
      },
      "-=0.45"
    );

    tl.fromTo(
      textRef.current,
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      "-=0.5"
    );

    tl.fromTo(
      buttonsRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
      },
      "-=0.4"
    );

    tl.fromTo(
      visualRef.current,
      {
        x: 80,
        opacity: 0,
        scale: 0.96,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );

    tl.fromTo(
      statsRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  /* =========================================
     AUTO IMAGE CHANGE
     EVERY 3 SECONDS
  ========================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        return (prev + 1) % images.length;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
    >
      {/* Background */}

      <div className="hero-bg-circle hero-bg-circle-one"></div>

      <div className="hero-bg-circle hero-bg-circle-two"></div>

      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <div className="hero-content">

          <div
            className="hero-eyebrow"
            ref={eyebrowRef}
          >
            

            CATALOGUE DESIGNERS IN DELHI NCR
          </div>

          <h1 ref={titleRef}>
            We turn your
            <span> ideas </span>
            into
            <strong> powerful brands.</strong>
          </h1>

          <p
            className="hero-description"
            ref={textRef}
          >
            A catalogue is often the first real conversation your product has with a buyer<br></br>
            — before your sales team ever picks up the phone
          </p>

          <div
            className="hero-buttons"
            ref={buttonsRef}
          >
            <a
              href="#services"
              className="hero-primary-btn"
            >
              Explore Our Services

              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero-secondary-btn"
            >
              Let's Talk
            </a>
          </div>

          {/* Stats */}

          <div
            className="hero-stats"
            ref={statsRef}
          >
            <div className="hero-stat">
              <strong>30+</strong>

              <span>
                Years of Experience
              </span>
            </div>

            <div className="hero-stat-line"></div>

            <div className="hero-stat">
              <strong>300+</strong>

              <span>
                Happy Clients
              </span>
            </div>

            <div className="hero-stat-line"></div>

            <div className="hero-stat">
              <strong>60+</strong>

              <span>
                Industries Served
              </span>
            </div>
          </div>

        </div>

        {/* =================================
            RIGHT VISUAL
        ================================= */}

        <div
          className="hero-visual"
          ref={visualRef}
        >

          <div className="hero-image-main">

            {/* 
              Sab images ek hi jagah par hain.
              Active image fade + zoom ke saath
              smoothly change hogi.
            */}

            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Creative communication"
                className={`hero-slide-image ${
                  index === currentImage
                    ? "active"
                    : ""
                }`}
              />
            ))}

            <div className="hero-image-overlay"></div>

          </div>

          {/* Floating Card */}

          <div className="hero-floating-card">

            <div className="floating-number">
              01
            </div>

            <div>
              <span>
                What we create
              </span>

              <strong>
                Brands that
                <br />
                get noticed.
              </strong>
            </div>

          </div>

          {/* Side Text */}

          <div className="hero-side-text">
            PREFACE
          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="hero-scroll">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;
