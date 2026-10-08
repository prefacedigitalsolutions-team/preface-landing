import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

import "./Services.css";

const services = [
  {
    number: "01",
    title: "Web Design",
    subtitle: "Websites & Digital Experience",
    description:
      "Modern, responsive and visually engaging websites designed to communicate your brand clearly and create a strong digital presence.",
  },

  {
    number: "02",
    title: "Photo Shoot",
    subtitle: "Product & Industrial Photography",
    description:
      "Professional product, industrial and lifestyle photography created to give your products a consistent and compelling visual identity.",
  },

  {
    number: "03",
    title: "Catalogue & Brochure",
    subtitle: "Design & Communication",
    description:
      "Well-crafted catalogues and brochures that present your products, services and brand in a clear, structured and visually powerful way.",
  },

  {
    number: "04",
    title: "Digital Marketing",
    subtitle: "Marketing & Promotion",
    description:
      "Creative digital campaigns and communication strategies designed to increase visibility, build engagement and connect your brand with the right audience.",
  },
];

const images = [
  "/img/service-web-1.jpg",
  "/img/service-photoshoot-1.jpg",
  "/img/service-catalogue-1.jpg",
  "/img/service-digital-1.jpg",
];
function Services() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const servicesRef = useRef(null);
  const imageRef = useRef(null);

  const [active, setActive] = useState(0);

  /*
  =========================================
  SECTION ANIMATION
  =========================================
  */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      if (servicesRef.current) {
        gsap.fromTo(
          servicesRef.current.children,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*
  =========================================
  IMAGE CHANGE ANIMATION
  =========================================
  */

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.08,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, [active]);

  const currentService = services[active];

  return (
    <section
      className="services-section"
      id="services"
      ref={sectionRef}
    >
      <div className="services-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div
          className="services-heading"
          ref={headingRef}
        >

          <div className="services-heading-number">
            03
          </div>


          <div className="services-heading-main">

            <span>
              WHAT WE DO
            </span>

            <h2>
              Creative
              <br />
              <em>capabilities.</em>
            </h2>

          </div>


          <p>
            From digital experiences to visual
            communication, we create thoughtful
            work that helps brands communicate,
            connect and grow.
          </p>

        </div>


        {/* =====================================
            SERVICES CONTENT
        ===================================== */}

        <div className="services-content">

          {/* =====================================
              SERVICE CARDS
          ===================================== */}

          <div
            className="services-grid"
            ref={servicesRef}
          >

            {services.map((service, index) => (

              <div
                className={`service-card ${
                  active === index ? "active" : ""
                }`}
                key={service.number}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
              >

                {/* TOP */}

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <ArrowUpRight
                    className="service-icon"
                    size={19}
                  />

                </div>


                {/* CONTENT */}

                <div className="service-card-content">

                  <span className="service-subtitle">
                    {service.subtitle}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                {/* PROGRESS */}

                <div className="service-progress">
                  <span></span>
                </div>

              </div>

            ))}

          </div>


          {/* =====================================
              IMAGE PREVIEW
          ===================================== */}

          <div className="services-preview">

            <div className="services-preview-image">

              <img
                ref={imageRef}
                src={images[active]}
                alt={currentService.title}
              />

              <div className="services-preview-overlay"></div>


              <div className="services-preview-info">

                <span>
                  SELECTED CAPABILITY
                </span>

                <strong>
                  {currentService.title}
                </strong>

              </div>


              <div className="services-preview-count">
                {currentService.number} / 04
              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="services-footer">

          <div className="services-footer-left">

            <span>
              STRATEGY
            </span>

            <span>
              →
            </span>

            <span>
              CREATIVE
            </span>

            <span>
              →
            </span>

            <span>
              PRODUCTION
            </span>

          </div>


          <a href="#contact">

            <span>
              Have a project in mind?
            </span>

            <ArrowUpRight size={18} />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;
