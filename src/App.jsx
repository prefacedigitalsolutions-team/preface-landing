import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/About/About";

import Service from "./components/service/Services";
import Projects from "./components/project/Project";
import Testomonial from "./components/testimonials/Testimonials";

import Whychoose from "./components/whychoose/WhyChooseUs";
import Faq from "./components/faq/FAQ";
import Client from "./components/ourClient/Clients";

import Contactus from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/bottomtotop/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      <Service />
      <Projects />
      <Testomonial />

      <Whychoose />
      <Faq />
      <Client />
      
      <Contactus />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
