import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Out of The Box Creativity",
   
  },
  {
    number: "02",
    title: "Team of experienced professionals.",
  
  },
  {
    number: "03",
    title: "Timely Delivery",
  
  },
];

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);

  const addItemRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

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
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        itemsRef.current,
        {
          y: 45,
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
      className="why-section"
      id="why-us"
      ref={sectionRef}
    >
      <div className="why-container">

        {/* TOP */}

        <div className="why-top">
          <span className="why-number">
            06
          </span>

          <span className="why-label">
            WHY CHOOSE US
          </span>

       
        </div>


        {/* MAIN */}

        <div className="why-main">

          {/* LEFT */}

          <div
            className="why-heading"
            ref={headingRef}
          >
            <h2>
              Why should you
              <br />
              choose us as
              <br />
              <em>your creative</em>
              <br />
              partners?
            </h2>

            <p>
              If you have good product, you need an effective creative agency as well to understand your product & services as deep as you do
            </p>

            <a
              href="#contact"
              className="why-read-more"
            >
              <span>LET'S TALK</span>

              <span className="why-arrow">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>


          {/* RIGHT */}

          <div className="why-reasons">

            {reasons.map((reason) => (
              <div
                className="why-item"
                key={reason.number}
                ref={addItemRef}
              >

                <div className="why-item-number">
                  {reason.number}
                </div>

                <div className="why-item-content">

                  <h3>
                    {reason.title}
                  </h3>

                  <p>
                    {reason.text}
                  </p>

                </div>

                <div className="why-item-line"></div>

              </div>
            ))}

          </div>

        </div>


        {/* BOTTOM */}

        <div className="why-bottom">
          <span>CREATIVE PARTNERSHIPS</span>

          <div></div>

          <span>06 / 07</span>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
