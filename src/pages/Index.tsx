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
import { useCallback, useEffect, useRef, useState } from "react";

const Index = () => {
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);
  const callMenuRef = useRef<HTMLDivElement | null>(null);
  const whatsappMenuRef = useRef<HTMLDivElement | null>(null);
  const popupClass =
    "absolute left-16 top-1/2 -translate-y-1/2 min-w-[240px] rounded-xl border border-yellow-400/35 bg-background/95 backdrop-blur-md p-3 shadow-[0_14px_40px_rgba(0,0,0,0.35)]";
  const popupItemClass =
    "block rounded-lg border border-border/70 bg-secondary/40 px-3 py-2 transition-all hover:border-yellow-400/50 hover:bg-secondary/70";
  const popupLabelClass = "text-[11px] uppercase tracking-wide text-yellow-300";
  const popupNumberClass = "text-sm font-semibold text-foreground";

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedCallArea = callMenuRef.current?.contains(target);
      const clickedWhatsAppArea = whatsappMenuRef.current?.contains(target);

      if (!clickedCallArea && !clickedWhatsAppArea) {
        setShowCallOptions(false);
        setShowWhatsAppOptions(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
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
        <div ref={callMenuRef} className="relative">
          <button
            type="button"
            className="rounded-full animate-pulse"
            onClick={() => {
              setShowCallOptions((prev) => !prev);
              setShowWhatsAppOptions(false);
            }}
            aria-label="Show call numbers"
          >
            <img
              src={phonecall}
              alt="Call Now"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </button>
          {showCallOptions && (
            <div className={popupClass}>
              <p className="text-xs font-semibold text-foreground/90 mb-2">Call Options</p>
              <a
                href="tel:+917904310585"
                className={popupItemClass}
              >
                <p className={popupLabelClass}>Movie Project</p>
                <p className={popupNumberClass}>+91 7904310585</p>
              </a>
              <a
                href="tel:+916383338383"
                className={`${popupItemClass} mt-2`}
              >
                <p className={popupLabelClass}>Website Creation</p>
                <p className={popupNumberClass}>+91 6383338383</p>
              </a>
            </div>
          )}
        </div>

        {/* WhatsApp */}
        <div ref={whatsappMenuRef} className="relative">
          <button
            type="button"
            className="rounded-full animate-pulse"
            onClick={() => {
              setShowWhatsAppOptions((prev) => !prev);
              setShowCallOptions(false);
            }}
            aria-label="Show WhatsApp numbers"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </button>
          {showWhatsAppOptions && (
            <div className={popupClass}>
              <p className="text-xs font-semibold text-foreground/90 mb-2">WhatsApp Options</p>
              <a
                href="https://api.whatsapp.com/send?phone=7904310585"
                target="_blank"
                rel="noopener noreferrer"
                className={popupItemClass}
              >
                <p className={popupLabelClass}>Movie Project</p>
                <p className={popupNumberClass}>+91 7904310585</p>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6383338383"
                target="_blank"
                rel="noopener noreferrer"
                className={`${popupItemClass} mt-2`}
              >
                <p className={popupLabelClass}>Website Creation</p>
                <p className={popupNumberClass}>+91 6383338383</p>
              </a>
            </div>
          )}
        </div>

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
