import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

import "./Project.css";

const projects = [
  {
    number: "01",
    title: "Industrial",
    subtitle: "Catalogue Design",
    category: "PRINT / COMMUNICATION",
    description:
      "A complete visual communication system created to present a large industrial product range with clarity and impact.",
    image: "/img/project-catalogue-1.jpg",
  },

  {
    number: "02",
    title: "Product Stories",
    subtitle: "Photography",
    category: "PHOTOGRAPHY",
    description:
      "A detailed product photography direction created to bring consistency, character and precision to a brand's visual library.",
    image: "/img/project-photo-1.jpg",
  },



  {
    number: "03",
    title: "Digital Presence",
    subtitle: "Website Design",
    category: "DIGITAL / WEB",
    description:
      "A modern digital experience combining clean typography, strong imagery and intuitive navigation.",
    image: "/img/project-webdesign-1.jpg",
  },

  {
    number: "04",
    title: "Brand Campaign",
    subtitle: "Digital Marketing",
    category: "CAMPAIGN / DIGITAL",
    description:
      "A focused communication campaign created to strengthen visibility and build meaningful audience engagement.",
    image: "/img/project-digital-marketing.jpg",
  },
];

function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRefs = useRef([]);

  const addProjectRef = (element) => {
    if (element && !projectRefs.current.includes(element)) {
      projectRefs.current.push(element);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================
         HEADING
      ===================================== */

      gsap.fromTo(
        headingRef.current,
        {
          y: 70,
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

      /* =====================================
         PROJECTS
      ===================================== */

      gsap.fromTo(
        projectRefs.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: projectRefs.current[0],
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =====================================
     IMAGE HOVER
  ===================================== */

  const handleMouseEnter = (event) => {
    const image = event.currentTarget.querySelector(
      ".project-image img"
    );

    const arrow = event.currentTarget.querySelector(
      ".project-arrow"
    );

    if (image) {
      gsap.to(image, {
        scale: 1.08,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    if (arrow) {
      gsap.to(arrow, {
        rotation: 45,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  const handleMouseLeave = (event) => {
    const image = event.currentTarget.querySelector(
      ".project-image img"
    );

    const arrow = event.currentTarget.querySelector(
      ".project-arrow"
    );

    if (image) {
      gsap.to(image, {
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    if (arrow) {
      gsap.to(arrow, {
        rotation: 0,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  };

  return (
    <section
      className="projects-section"
      id="projects"
      ref={sectionRef}
    >
      <div className="projects-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div
          className="projects-heading"
          ref={headingRef}
        >
          <div className="projects-heading-number">
            04
          </div>

          <div className="projects-heading-main">
            <span>
              SELECTED WORK
            </span>

            <h2>
              Work that
              <br />
              <em>speaks.</em>
            </h2>
          </div>

          <div className="projects-heading-text">
            <p>
              A selection of work created across
              design, photography, digital and
              brand communication.
            </p>

            <span className="projects-count">
              05 PROJECTS
            </span>
          </div>
        </div>

        {/* =====================================
            PROJECT LIST
        ===================================== */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className={`project-item ${
                index % 2 !== 0
                  ? "project-reverse"
                  : ""
              }`}
              key={project.number}
              ref={addProjectRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              {/* =================================
                  IMAGE
              ================================= */}

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-image-overlay"></div>

                <div className="project-image-number">
                  {project.number}
                </div>

                <div className="project-image-category">
                  {project.category}
                </div>

              </div>

              {/* =================================
                  CONTENT
              ================================= */}

              <div className="project-info">

                <div className="project-info-top">

                  <span>
                    {project.subtitle}
                  </span>

                  <span>
                    {project.number}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-bottom">

                  <span>
                    VIEW PROJECT
                  </span>

                  <div className="project-arrow">
                    <ArrowUpRight size={19} />
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* =====================================
            FOOTER
        ===================================== */}

        <div className="projects-footer">

          <div className="projects-footer-line"></div>

          <div className="projects-footer-content">

            <span>
              MORE WORK
            </span>

            <h3>
              Let's create something
              <em> worth seeing.</em>
            </h3>

            <a href="#contact">
              Start a project
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;