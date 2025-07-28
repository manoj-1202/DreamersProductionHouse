import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import colorGrading from "../assets/colorGrading.png";
import dubbing from "../assets/dubbing.png";
import mixmas from "../assets/mixmas.png";
import muisc from "../assets/music.png";
import poster from "../assets/poster.png";
import sxf from "../assets/sxf.png";
import vfx from "../assets/vfx.png";
import teaser from "../assets/teaser.png";
import videoEditing from "../assets/videoEditing.png";
import ColorGradingImage from "../assets/ColorGradingImage.jpg";
import videoEditingImage from "../assets/videoEditingImage.jpg";
import dubbingImage from "../assets/dubbingImage.jpg";
import sfxImage from "../assets/sfxImage.jpg";
import vfxImage from "../assets/vfxImage.jpg";
import mixmasImage from "../assets/mixmasImage.jpg";
import musicImage from "../assets/musicImage.jpg";
import posterImage from "../assets/posterImage.jpg";
import teaserImage from "../assets/teaserImage.jpg";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "./Footer";
import { useEffect } from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

const services: Service[] = [
  {
    icon: videoEditing,
    title: "Video Editing",
    description:
      "Our professional video editing services utilize cinematic storytelling techniques and seamless transitions to transform your raw footage into a polished, engaging narrative. Whether it's a short film, commercial, or personal project, we ensure every cut enhances the story.",
    color: "text-primary",
    image:
     videoEditingImage,
  },

  {
    icon: dubbing,
    title: "Voice Dubbing",
    description:
      "We provide high-quality voice recording and dubbing services with professional voice artists. Our team ensures crystal-clear audio and perfect synchronization, tailored to your project's tone and style.",
    color: "text-accent",
    image:
      dubbingImage,
  },
  {
    icon: sxf,
    title: "SFX",
    description:
      "Our immersive sound effects design brings your visuals to life with dynamic audio. From subtle ambient sounds to explosive effects, we craft audio that enhances the viewer's experience.",
    color: "text-primary",
    image:
      sfxImage,
  },
  {
    icon: vfx,
    title: "VFX",
    description:
      "Our stunning visual effects services add creative and cinematic visuals to your videos. From motion graphics to complex CGI, we bring your vision to life with breathtaking effects.",
    color: "text-accent",
    image:
      vfxImage,
  },
  {
    icon: mixmas,
    title: "Mixing & Mastering",
    description:
      "Our expert audio mixing and mastering services ensure your sound is perfectly balanced and ready for any platform. We fine-tune every element to deliver professional-grade audio quality.",
    color: "text-accent",
    image:
      mixmasImage,
  },
  {
    icon: colorGrading,
    title: "DI Color Grading",
    description:
      "Our professional color grading services enhance the mood, atmosphere, and visual storytelling of your project. We use advanced techniques to ensure every frame looks cinematic and vibrant.",
    color: "text-accent",
    image: ColorGradingImage
      
  },
  {
    icon: muisc,
    title: "Music Composing",
    description:
      "Our original music composition services create scores tailored to your project's emotional and narrative needs. From epic orchestral pieces to modern electronic tracks, we set the perfect tone.",
    color: "text-primary",
    image:
      musicImage,
  },
  {
    icon: poster,
    title: "Poster Designing",
    description:
      "Our eye-catching poster designs capture the essence of your project. We create visually striking posters that engage audiences and convey your project's unique identity.",
    color: "text-accent",
    image:
      posterImage,
  },
  {
    icon: teaser,
    title: "Teaser Cut",
    description:
      "Our compelling teaser cuts build anticipation and engage your audience. We craft short, impactful teasers that highlight your project's best moments and leave viewers wanting more.",
    color: "text-primary",
    image:
      teaserImage,
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
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Service Not Found
          </h2>
          <p className="text-muted-foreground mt-2">
            The service you are looking for does not exist.
          </p>
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
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-secondary ${service.color}`}>
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
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
