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
import dubbingImage from "../assets/dubbingImage.jpg";
import sfxImage from "../assets/sfxImage.jpg";
import vfxImage from "../assets/vfxImage.jpeg";
import mixmasImage from "../assets/mixmasImage.jpg";
import musicImage from "../assets/musicImage.jpeg";
import posterImage from "../assets/posterImage.jpg";
import teaserImage from "../assets/teaserImage.jpg";
import videoImage from "../assets/videoImage.jpg"
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
      "At Dreamer's Production House, We Produce emotional and visually reflect commercials to have a quick relationship between our brand and the audience. Whether for TV, digital media, cinema or OTT platforms, our ads are designed to attract attention, inspire sparks interest and action.From more than 5 years of industry experiences and new start -ups with a diverse portfolio to global brands, we know how to convert our product or service to a compelling story - fully designed for the audience and stage.",
    color: "text-primary",
    image:
     videoImage,
  },

  {
    icon: dubbing,
    title: "Voice Dubbing",
    description:
      "At Dreams Production House, we bring your view of life with professional voice dubbing services that blend emotions, clarity and authenticity. Whether it's movies,  our expert artists and sound engineers provide high-quality dubbing in many languages to help you join the global audience.We understand that the voice is not just a sound - this is the story. This is why we focus on tone, time and cultural shades to ensure that each dub line seems natural as original. With a wide network of state -of -the -art recording studios, accurate lip -synchronization and versatile  talents, we ensure that your content reaches every corner of the world without losing the essence. Trust dreamers to vote to his content that he deserves.",
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
      "VFX- At Dreams Production House, we convert fantasy into reality through state -art -art -visual effects that increase the storytelling to a new level. Our VFX team combines creativity with advanced technology to create immersive images for movies, music videos, web series.`We specialize in providing high quality effects that mix defect with live-action recording. Each framework is handled with accuracy and ensures visual stability and cinematic effects.Whether you want to improve the scenes, create a fantasy world, Dream's end-to-end VFX solutions that fit the vision and budget of your project. With our talented artists and powerful pipelines after production, we even bring the most ambitious ideas into a life frame after frame. Let your story define. Make visual magic with dreamers",
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
