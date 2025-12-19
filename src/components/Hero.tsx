import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Cinematic
            </span>
            <br />
            Excellence
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Bringing your vision to life through world-class post-production
            services. From editing to color grading, we craft stories that
            captivate audiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <a href="tel:+917904310585">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact us
              </Button>
            </a>

            <Link
              to="/startProject"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-lg font-semibold text-primary border border-primary hover:text-white hover:bg-primary transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Short Film Button with Glow */}
            {/* <a
              href="https://forms.gle/tBW59br2Ji8Qoc7bA"
              target="_blank"
              rel="noopener noreferrer"
            > */}
              <Button
                variant="outline"
                size="xl"
                className="group border-2 glow-button text-primary px-2"
              >
                Short Film Competition Form
              </Button>
            {/* </a> */}
          </div>
        </div>
      </div>
      {/* Custom CSS inside same file */}
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px rgb(246,166,16), 0 0 20px rgb(246,166,16);
          }
          50% {
            box-shadow: 0 0 20px rgb(246,166,16), 0 0 40px rgb(246,166,16);
          }
        }
        .glow-button {
          animation: glow 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
