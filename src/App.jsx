import React, { useState, useEffect } from "react";
import Header from "./components/HeaderSection/header";
import Navbar from "./components/NavBarSection/navbar";
import Hero from "./components/HeroSection/hero";
import Features from "./components/FeaturesSection/features";
import About from "./components/AboutUsSection/aboutUs"; 
import "@ionic/react/css/core.css";
import "./index.css";
import CtaSection from "./components/CTASection/cta";
import ServiceSection from "./components/ServiceSection/service";
import DonateSection from "./components/DonationsSection/donate";
import TestimonialSection from "./components/TestimonialSection/testimonial";
import PartnerSection from "./components/PartnersSection/partners";
import EventSection from "./components/EventsSection/events";
import InstaPostSection from "./components/InstaPostsSection/instaPost";
import Footer from "./components/FooterSection/footer";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const openNavbar = () => setIsNavbarOpen(true);
  const closeNavbar = () => setIsNavbarOpen(false);
  // Prevent scrolling when navbar is open
  useEffect(() => {
    document.body.classList.toggle("nav-open", isNavbarOpen);
  }, [isNavbarOpen]);

  return (
    <div>
      <Header onMenuClick={openNavbar} />
      <Navbar isOpen={isNavbarOpen} onClose={closeNavbar} />
      <Hero />
      <Features />
      <About />
     <CtaSection />
     <ServiceSection/>
     <DonateSection/>
     <TestimonialSection/>
     <PartnerSection/>
     <EventSection/>
     <InstaPostSection/>
     <Footer/>
    </div>
  );
}

export default App;
