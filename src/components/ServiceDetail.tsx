import { useParams, useNavigate } from "react-router-dom";
import { 
  Scissors, 
  Mic, 
  Zap, 
  Volume2, 
  Settings, 
  Palette, 
  Music, 
  Image, 
  Video,
  LucideIcon,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "./Footer";
import { useEffect } from "react";
import videoEditing from '../assets/videoEditing.png'

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
}

const services: Service[] = [
 {
  icon: Scissors,
  title: "Video Editing",
  description:
    "Our professional video editing services utilize cinematic storytelling techniques and seamless transitions to transform your raw footage into a polished, engaging narrative. Whether it's a short film, commercial, or personal project, we ensure every cut enhances the story.",
  color: "text-primary",
  image: videoEditing 
},

  {
    icon: Mic,
    title: "Voice Dubbing",
    description: "We provide high-quality voice recording and dubbing services with professional voice artists. Our team ensures crystal-clear audio and perfect synchronization, tailored to your project's tone and style.",
    color: "text-accent",
    image: "https://images.unsplash.com/photo-1589903308904-1015c3c1e4a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Zap,
    title: "SFX",
    description: "Our immersive sound effects design brings your visuals to life with dynamic audio. From subtle ambient sounds to explosive effects, we craft audio that enhances the viewer's experience.",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1618477461853-e18dbdd69c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Volume2, 
    title: "VFX",
    description: "Our stunning visual effects services add creative and cinematic visuals to your videos. From motion graphics to complex CGI, we bring your vision to life with breathtaking effects.",
    color: "text-accent",
    image: "https://images.unsplash.com/photo-1620174786935-f1e94d7b3f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Settings,
    title: "Mixing & Mastering",
    description: "Our expert audio mixing and mastering services ensure your sound is perfectly balanced and ready for any platform. We fine-tune every element to deliver professional-grade audio quality.",
    color: "text-accent",
    image: "https://images.unsplash.com/photo-1514320291840-d4d3f66f4db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Palette,
    title: "DI Color Grading",
    description: "Our professional color grading services enhance the mood, atmosphere, and visual storytelling of your project. We use advanced techniques to ensure every frame looks cinematic and vibrant.",
    color: "text-accent",
    image: "https://images.unsplash.com/photo-1615471618789-7a9e1d3f3f49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Music,
    title: "Music Composing",
    description: "Our original music composition services create scores tailored to your project's emotional and narrative needs. From epic orchestral pieces to modern electronic tracks, we set the perfect tone.",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1511671788563-12b73db3f31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Image,
    title: "Poster Designing",
    description: "Our eye-catching poster designs capture the essence of your project. We create visually striking posters that engage audiences and convey your project's unique identity.",
    color: "text-accent",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Video,
    title: "Teaser Cut",
    description: "Our compelling teaser cuts build anticipation and engage your audience. We craft short, impactful teasers that highlight your project's best moments and leave viewers wanting more.",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1611162617210-7d673bf0f2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]); // Re-run when slug changes

  // Find the service by matching the slug
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Service Not Found</h2>
          <p className="text-muted-foreground mt-2">The service you are looking for does not exist.</p>
          <Button
            variant="ghost"
            onClick={() => navigate("#services")}
            className="mt-4 text-primary"
          >
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 py-20 px-6 bg-gradient-hero">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mb-6 flex items-center gap-2 text-foreground hover:bg-primary hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Button>
          <Card className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-gradient-card border-border">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h2>
              <div className={`inline-flex items-center p-3 rounded-lg bg-secondary ${service.color} mb-4`}>
                <service.icon className="w-8 h-8" />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;