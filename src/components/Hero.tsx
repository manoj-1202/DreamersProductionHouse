import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { Play, ArrowRight } from "lucide-react";

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
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-20 mt-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Cinematic
            </span>
            <br />
            Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Bringing your vision to life through world-class post-production services. 
            From editing to color grading, we craft stories that captivate audiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Our Work
            </Button>
            
            <Button variant="cinematic" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;