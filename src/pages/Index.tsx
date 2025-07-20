import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaArrowUp } from "react-icons/fa";
import phonecall from "@/assets/phone-call.png"; 
import whatsapp from "@/assets/whatsapp.png"; 
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
      <div className="fixed top-1/2 left-3 transform -translate-y-1/2 z-50 flex flex-col gap-8">
        <a href="tel:+917904310585" className="rounded-full animate-pulse">
          <img
            src={phonecall}
            alt="Call Now"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </a>
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
      </div>
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