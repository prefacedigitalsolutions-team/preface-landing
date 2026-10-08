import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Preface Communications understood exactly what we wanted to communicate. The catalogue was thoughtfully designed, visually strong and extremely easy for our customers to understand.",
    name: "Rajiv Mehta",
    role: "Marketing Head",
    company: "Industrial Manufacturing",
  },

  {
    quote:
      "The entire process, from photography to design and final production, was handled with remarkable attention to detail. The final outcome represented our brand beautifully.",
    name: "Amit Sharma",
    role: "Director",
    company: "Engineering & Manufacturing",
  },

  {
    quote:
      "What stood out was their ability to understand our products and turn technical information into communication that actually feels clear, premium and engaging.",
    name: "Neha Kapoor",
    role: "Brand Manager",
    company: "Corporate Brand",
  },

  {
    quote:
      "We were looking for a creative partner who could handle both ideas and execution. Preface brought consistency across our photography, catalogues and digital communication.",
    name: "Vikram Malhotra",
    role: "Business Head",
    company: "Manufacturing Group",
  },
];

function Testimonials() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  const [active, setActive] = useState(0);

  const current = testimonials[active];

  /* =====================================
     SECTION ANIMATION
  ===================================== */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-heading > *",
        {
          y: 35,
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
        ".testimonial-main",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =====================================
     TESTIMONIAL CHANGE
  ===================================== */

  const changeTestimonial = (direction) => {
    let nextIndex;

    if (direction === "next") {
      nextIndex =
        active === testimonials.length - 1
          ? 0
          : active + 1;
    } else {
      nextIndex =
        active === 0
          ? testimonials.length - 1
          : active - 1;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(nextIndex);
      },
    });

    tl.to(
      [quoteRef.current, authorRef.current],
      {
        y: 20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      }
    );
  };

  /* =====================================
     ANIMATE NEW TESTIMONIAL
  ===================================== */

  useEffect(() => {
    if (!quoteRef.current || !authorRef.current) return;

    gsap.fromTo(
      [quoteRef.current, authorRef.current],
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  }, [active]);

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="testimonials-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="testimonial-heading">

          <div className="testimonial-number">
            05
          </div>

          <div className="testimonial-label">
            CLIENT VOICES
          </div>

          <div className="testimonial-small-text">
            What our clients say about
            working with us.
          </div>

        </div>


        {/* =================================
            MAIN TESTIMONIAL
        ================================= */}

        <div className="testimonial-main">

          {/* Quote Mark */}

          <div className="testimonial-quote-icon">
            <Quote size={32} strokeWidth={1.3} />
          </div>


          {/* Quote */}

          <div
            className="testimonial-quote"
            ref={quoteRef}
          >
            <p>
              “{current.quote}”
            </p>
          </div>


          {/* Author */}

          <div
            className="testimonial-author"
            ref={authorRef}
          >

            <div className="testimonial-author-line"></div>

            <div className="testimonial-author-info">

              <strong>
                {current.name}
              </strong>

              <span>
                {current.role}
              </span>

              <small>
                {current.company}
              </small>

            </div>

          </div>


          {/* =================================
              CONTROLS
          ================================= */}

          <div className="testimonial-controls">

            <div className="testimonial-progress">

              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={
                    active === index
                      ? "active"
                      : ""
                  }
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${
                    index + 1
                  }`}
                >
                  <span></span>
                </button>
              ))}

            </div>


            <div className="testimonial-arrows">

              <button
                onClick={() =>
                  changeTestimonial("prev")
                }
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                onClick={() =>
                  changeTestimonial("next")
                }
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM
        ================================= */}

        <div className="testimonial-bottom">

          <span>
            TRUSTED PARTNERS
          </span>

          <div className="testimonial-bottom-line"></div>

          <span>
            01 — 04
          </span>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
