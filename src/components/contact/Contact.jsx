import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-intro > *",
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
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-left, .contact-form-box",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    formRef.current.reset();
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="contact-intro">

          <span className="contact-number">
            09
          </span>

          <div className="contact-title">

            <span>
              LET'S WORK TOGETHER
            </span>

            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>

          </div>

          <p>
            Tell us a little about your project
            and we'll get back to you to discuss
            how we can help.
          </p>

        </div>


        {/* =================================
            MAIN
        ================================= */}

        <div className="contact-main">

          {/* LEFT */}

          <div className="contact-left">

            <div className="contact-info">

              <div className="contact-info-item">

                <div className="contact-icon">
                  <MapPin size={16} />
                </div>

                <div>
                  <span>VISIT US</span>

                  <p>
                    Janakpuri,
                    <br />
                    New Delhi, India
                  </p>
                </div>

              </div>


              <div className="contact-info-item">

                <div className="contact-icon">
                  <Phone size={16} />
                </div>

                <div>
                  <span>CALL US</span>

                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>

              </div>


              <div className="contact-info-item">

                <div className="contact-icon">
                  <Mail size={16} />
                </div>

                <div>
                  <span>EMAIL US</span>

                  <a href="mailto:hello@prefacecommunications.com">
                    hello@prefacecommunications.com
                  </a>
                </div>

              </div>

            </div>


            {/* MAP */}

            <div className="contact-map">

              <iframe
                title="Preface Communications Location"
                src="https://www.google.com/maps?q=Janakpuri%20New%20Delhi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <a
                className="map-link"
                href="https://www.google.com/maps/search/?api=1&query=Janakpuri+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>OPEN IN GOOGLE MAPS</span>

                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>


          {/* FORM */}

          <div className="contact-form-box">

            <div className="form-top">

              <span>
                PROJECT ENQUIRY
              </span>

              <p>
                Fill in the details below and
                let's start a conversation.
              </p>

            </div>


            <form
              ref={formRef}
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-field">
                  <label>
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div className="form-field">
                  <label>
                    PHONE NUMBER
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    required
                  />
                </div>

              </div>


              <div className="form-field">
                <label>
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>


              <div className="form-field">
                <label>
                  WHAT DO YOU NEED?
                </label>

                <select
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="web-design">
                    Web Design
                  </option>

                  <option value="catalogue">
                    Catalogue & Brochure
                  </option>

                  <option value="photoshoot">
                    Product Photography
                  </option>

                  <option value="digital-marketing">
                    Digital Marketing
                  </option>

                  <option value="other">
                    Something Else
                  </option>
                </select>
              </div>


              <div className="form-field">
                <label>
                  TELL US ABOUT YOUR PROJECT
                </label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us briefly about your project..."
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit"
              >

                <span>
                  {submitted
                    ? "MESSAGE SENT"
                    : "SEND ENQUIRY"}
                </span>

                <span className="submit-arrow">
                  <ArrowUpRight size={18} />
                </span>

              </button>

            </form>

          </div>

        </div>


        {/* =================================
            FOOTER LINE
        ================================= */}

        <div className="contact-bottom">

          <span>
            PREFACE COMMUNICATIONS
          </span>

          <div></div>

          <span>
            NEW DELHI · INDIA
          </span>

        </div>

      </div>
    </section>
  );
}

export default Contact;
