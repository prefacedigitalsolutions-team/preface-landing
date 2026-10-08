import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import "./Navbar.css";

function Navbar() {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const socialRef = useRef([]);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // Navbar animation
    tl.fromTo(
      navbarRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }
    );

    // Logo animation
    tl.fromTo(
      logoRef.current,
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
      },
      "-=0.4"
    );

    // Navigation animation
    tl.fromTo(
      linksRef.current,
      {
        y: -15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
      },
      "-=0.3"
    );

    // Phone animation
    tl.fromTo(
      contactRef.current,
      {
        x: 25,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
      },
      "-=0.3"
    );

    // Social icons animation
    tl.fromTo(
      socialRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const addLinkRef = (element) => {
    if (element && !linksRef.current.includes(element)) {
      linksRef.current.push(element);
    }
  };

  const addSocialRef = (element) => {
    if (element && !socialRef.current.includes(element)) {
      socialRef.current.push(element);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          ref={logoRef}
        >
          <img
            src="/img/logo.png"
            alt="Company Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">

          <a href="#home" ref={addLinkRef}>
            Home
          </a>

          <a href="#about" ref={addLinkRef}>
            About
          </a>

          <a href="#services" ref={addLinkRef}>
            Services
          </a>

          <a href="#projects" ref={addLinkRef}>
            Projects
          </a>

          <a href="#contact" ref={addLinkRef}>
            Contact
          </a>

        </nav>

        {/* Right Side */}
        <div className="navbar-right">

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="phone"
            ref={contactRef}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
            </svg>

            <span>+91 98765 43210</span>
          </a>

          {/* Social Icons */}
          <div className="social-icons">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              className="social whatsapp"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
              ref={addSocialRef}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-9 9 8.38 8.38 0 0 1-3.6-.8L3 21l1.3-5.1A8.38 8.38 0 0 1 3.5 12a8.5 8.5 0 1 1 17.5-.5z" />
                <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.1.3-1.8.1-1.2-.3-2.3-1-3.2-1.9-.9-.9-1.6-2-1.9-3.2-.2-.7-.1-1.4.1-1.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="social instagram"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              ref={addSocialRef}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.8"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="social youtube"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
              ref={addSocialRef}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
              </svg>
            </a>

          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="tel:+919876543210"
          className="mobile-phone"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
          </svg>

          +91 98765 43210
        </a>

      </div>
    </header>
  );
}

export default Navbar;
