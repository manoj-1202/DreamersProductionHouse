import { Card } from "@/components/ui/card";
import { 
  Scissors, 
  Mic, 
  Zap, 
  Volume2, 
  Settings, 
  Palette, 
  Music, 
  Image, 
  Video 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Video Editing",
      description: "Professional video editing with cinematic storytelling techniques and seamless transitions.",
      color: "text-primary"
    },
    {
      icon: Mic,
      title: "Voice Dubbing",
      description: "High-quality voice recording and dubbing services with professional voice artists.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "SFX",
      description: "Immersive sound effects design that brings your visuals to life with dynamic audio.",
      color: "text-primary"
    },
    {
      icon: Volume2,
      title: "Mixing",
      description: "Expert audio mixing to balance all elements and create the perfect soundscape.",
      color: "text-accent"
    },
    {
      icon: Settings,
      title: "Mastering",
      description: "Final audio mastering to ensure your content sounds perfect across all platforms.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "DI Color Grading",
      description: "Professional color grading to enhance mood, atmosphere, and visual storytelling.",
      color: "text-accent"
    },
    {
      icon: Music,
      title: "Music Composing",
      description: "Original music composition tailored to your project's emotional and narrative needs.",
      color: "text-primary"
    },
    {
      icon: Image,
      title: "Poster Designing",
      description: "Eye-catching poster designs that capture the essence of your project.",
      color: "text-accent"
    },
    {
      icon: Video,
      title: "Teaser Cut",
      description: "Compelling teaser cuts that build anticipation and engage your audience.",
      color: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive post-production services to transform your raw footage into cinematic masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-6 bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-secondary ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;