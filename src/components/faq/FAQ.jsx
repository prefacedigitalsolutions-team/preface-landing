import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Plus } from "lucide-react";

import "./FAQ.css";

const faqs = [
  {
    number: "01",
    question:
      "Can you handle catalogues for both small and extensive product ranges?",
    answer:
      "Absolutely. We can structure catalogues for small collections as well as extensive product ranges, using clear categories, product codes, specifications and visual hierarchy to keep the catalogue easy to navigate.",
  },

  {
    number: "02",
    question:
      "Can you manage the complete catalogue project from start to finish?",
    answer:
      "Yes. We can take care of the complete process, from understanding your products and planning the visual direction to photography, design, content arrangement, printing and final production.",
  },

  {
    number: "03",
    question:
      "Do you offer e-catalogues alongside printed ones?",
    answer:
      "Yes. We can adapt your catalogue into a digital-friendly format that can be shared through websites, email, WhatsApp and other digital channels while maintaining the same brand identity.",
  },

  {
    number: "04",
    question:
      "Do you provide product photography for catalogues?",
    answer:
      "Yes. Our in-house photography capability allows us to create clean, consistent and professional product images specifically suited for catalogues, brochures, websites and other brand communication.",
  },
];

function FAQ() {
  const sectionRef = useRef(null);
  const faqItemsRef = useRef([]);
  const answerRefs = useRef([]);

  const [active, setActive] = useState(0);

  const addFaqRef = (el) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-intro > *",
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
        faqItemsRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
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

  const toggleFAQ = (index) => {
    const currentAnswer = answerRefs.current[index];

    if (active === index) {
      gsap.to(currentAnswer, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      setActive(null);
      return;
    }

    if (active !== null && answerRefs.current[active]) {
      gsap.to(answerRefs.current[active], {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }

    setActive(index);

    gsap.fromTo(
      currentAnswer,
      {
        height: 0,
        opacity: 0,
      },
      {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  };

  return (
    <section
      className="faq-section"
      id="faq"
      ref={sectionRef}
    >
      <div className="faq-container">

        {/* =================================
            INTRO
        ================================= */}

        <div className="faq-intro">

          <div className="faq-number">
            07
          </div>

          <div className="faq-title">

            <span>
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Things you
              <br />
              <em>may want to know.</em>
            </h2>

          </div>

          <p>
            A few answers to some of the
            questions our clients commonly
            ask before starting a project.
          </p>

        </div>


        {/* =================================
            FAQ LIST
        ================================= */}

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                active === index ? "faq-active" : ""
              }`}
              key={faq.number}
              ref={addFaqRef}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >

                <span className="faq-item-number">
                  {faq.number}
                </span>

                <span className="faq-question-text">
                  {faq.question}
                </span>

                <span className="faq-icon">
                  <Plus size={17} />
                </span>

              </button>


              <div
                className="faq-answer"
                ref={(el) =>
                  (answerRefs.current[index] = el)
                }
                style={{
                  height:
                    active === index
                      ? "auto"
                      : 0,
                  opacity:
                    active === index
                      ? 1
                      : 0,
                }}
              >
                <p>
                  {faq.answer}
                </p>
              </div>

            </div>

          ))}

        </div>


        {/* =================================
            BOTTOM
        ================================= */}

        <div className="faq-bottom">

          <span>
            HAVE ANOTHER QUESTION?
          </span>

          <a href="#contact">
            GET IN TOUCH
          </a>

        </div>

      </div>
    </section>
  );
}

export default FAQ;
