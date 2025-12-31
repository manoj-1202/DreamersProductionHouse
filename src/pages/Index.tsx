import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";
import phonecall from "@/assets/phone-call.png";
import whatsapp from "@/assets/whatsapp.png";
import instagram from "@/assets/instagram.png";
import location from "@/assets/location.png";
import { useCallback } from "react";

const Index = () => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background font-cinematic">
      <Navigation />
      <main id="home">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed top-1/2 left-3 -translate-y-1/2 z-50
        flex flex-col items-center gap-8">

        {/* Call */}
        <a href="tel:+917904310585" className="rounded-full animate-pulse">
          <img
            src={phonecall}
            alt="Call Now"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=7904310585"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full animate-pulse"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/dreamers_production_house_2025/?igsh=MWI3Znp0OGU5YnhsNA%3D%3D#" 
          target="_blank"
          rel="noopener noreferrer"
        >
         <img
            src={instagram}
            alt="WhatsApp"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </a>

        {/* Location */}
          <a
          href="https://www.google.com/maps/dir/11.0297673,76.9909919/Dreamers+Production+House,+Akshaya+Avenue,+96%2F2,+Thiruveesar+nagar,+Avarampalayam,+Coimbatore,+Tamil+Nadu+641006/@11.0295562,76.9884674,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba8594aca331d69:0xf545bedc8e9027aa!2m2!1d76.9911891!2d11.0295387?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
          target="_blank"
          rel="noopener noreferrer"
          
        >
         <img
            src={location}
            alt="location"
             className="w-16 h-16 sm:w-20 sm:h-20 object-contain"

          />
        </a>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={handleScrollTop}
          className="bg-white shadow-lg rounded-full p-3 hover:bg-gray-200"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Index;
