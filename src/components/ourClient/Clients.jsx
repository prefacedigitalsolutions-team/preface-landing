import { useEffect, useRef } from "react";
import gsap from "gsap";

import "./Clients.css";
const clients = [
  {
    name: "TATA",
    logo: "/img/Action Tesa.jpg",
  },
  {
    name: "Mahindra",
    logo: "/img/Asahi Ropes.png",
  },
  {
    name: "Godrej",
    logo: "/img/BGL.png",
  },
  {
    name: "Asian Paints",
    logo: "/img/ERD.png",
  },
  {
    name: "Larsen & Toubro",
    logo: "/img/Geeken.png",
  },
  {
    name: "Bajaj",
    logo: "/img/Paramount Bed.jpg",
  },
  {
    name: "Hero",
    logo: "/img/Spac.png",
  },
  {
    name: "Voltas",
    logo: "/img/ASSOMAC.png",
  },
];

function Clients() {
  const sectionRef = useRef(null);
  const logosRef = useRef([]);

  const addLogoRef = (el) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".clients-intro > *",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        logosRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="clients-section"
      id="clients"
      ref={sectionRef}
    >
      <div className="clients-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="clients-intro">

          <span className="clients-number">
            08
          </span>

          <div className="clients-title">

            <span className="clients-label">
              OUR CLIENTS
            </span>

            <h2>
              Some of the great
              <br />
              <em>clients & brands</em>
              <br />
              we work with...
            </h2>

          </div>

          <p>
            We have had the privilege to work
            with some of the prestigious clients
            across a wide range of industries.
          </p>

        </div>


        {/* =================================
            LOGOS
        ================================= */}

        <div className="clients-grid">

          {clients.map((client) => (

            <div
              className="client-logo"
              key={client.name}
              ref={addLogoRef}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
              />
            </div>

          ))}

        </div>


        {/* =================================
            BOTTOM
        ================================= */}

        <div className="clients-bottom">

          <span>
            SELECTED CLIENTS
          </span>

          <div className="clients-bottom-line"></div>

          <span>
            08 / 09
          </span>

        </div>

      </div>
    </section>
  );
}

export default Clients;
