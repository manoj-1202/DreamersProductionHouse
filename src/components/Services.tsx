import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import colorGrading from "../assets/colorGrading.png"
import dubbing from "../assets/dubbing.png"
import mixmas from "../assets/mixmas.png"
import muisc from "../assets/music.png"
import poster from "../assets/poster.png"
import sxf from "../assets/sxf.png"
import vfx from "../assets/vfx.png"
import teaser from "../assets/teaser.png"
import videoEditing from "../assets/videoEditing.png"
import www from "../assets/www.png"


interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  featured?: boolean;
  tag?: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon:www,
      title: "Website Creation",
      description:
        "Conversion-focused, mobile-first websites built for brands, creators, and production businesses.",
      color: "text-primary",
      featured: true,
      tag: "Featured",
    },
    {
      icon: videoEditing,
      title: "Video Editing",
      description:
        "Professional video editing with cinematic storytelling techniques and seamless transitions.",
      color: "text-primary",
    },
    {
      icon: dubbing,
      title: "Voice Dubbing",
      description:
        "High-quality voice recording and dubbing services with professional voice artists.",
      color: "text-accent",
    },
    {
      icon: sxf,
      title: "SFX",
      description:
        "Immersive sound effects design that brings your visuals to life with dynamic audio.",
      color: "text-primary",
    },
    {
      icon: vfx,
      title: "VFX",
      description:
        "Stunning visual effects to enhance your videos with creative and cinematic visuals.",
      color: "text-accent",
    },
    {
      icon: mixmas,
      title: "Mixing & Mastering",
      description:
        "Expert audio mixing and final mastering to ensure your sound is perfectly balanced and ready for any platform.",
      color: "text-accent",
    },
    {
      icon: colorGrading,
      title: "DI Color Grading",
      description:
        "Professional color grading to enhance mood, atmosphere, and visual storytelling.",
      color: "text-accent",
    },
    {
      icon:muisc,
      title: "Music Composing",
      description:
        "Original music composition tailored to your project's emotional and narrative needs.",
      color: "text-primary",
    },
    {
      icon: poster,
      title: "Poster Designing",
      description:
        "Eye-catching poster designs that capture the essence of your project.",
      color: "text-accent",
    },
    {
      icon: teaser,
      title: "Teaser Cut",
      description:
        "Compelling teaser cuts that build anticipation and engage your audience.",
      color: "text-primary",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive post-production services to transform your
            raw footage into cinematic masterpieces. We also create custom
            websites that help brands build a strong online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const slug = service.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <motion.div
                key={service.title}
                className={service.featured ? "md:col-span-2 lg:col-span-3" : ""}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                <Link to={`/services/${slug}`} className="block">
                  <Card
                    className={`relative overflow-hidden p-6 border-border transition-all duration-500 hover:shadow-elegant hover:scale-105 group cursor-pointer ${
                      service.featured
                        ? "bg-gradient-to-br from-yellow-500/10 via-secondary to-accent/10 border-yellow-400/50 ring-1 ring-yellow-400/40"
                        : "bg-gradient-card"
                    }`}
                  >
                    {service.featured && (
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-[inherit]"
                        animate={{
                          opacity: [0.2, 0.35, 0.2],
                          boxShadow: [
                            "inset 0 0 0 rgba(250,204,21,0), 0 0 0 rgba(250,204,21,0)",
                            "inset 0 0 24px rgba(250,204,21,0.08), 0 0 22px rgba(250,204,21,0.18)",
                            "inset 0 0 0 rgba(250,204,21,0), 0 0 0 rgba(250,204,21,0)",
                          ],
                        }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    <div className={`flex ${service.featured ? "flex-col md:flex-row md:items-center md:justify-between gap-6" : "items-start space-x-4"}`}>
                      <div
                        className={`p-2 w-16 h-16 rounded-lg overflow-hidden bg-secondary ${service.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <img src={service.icon} alt={service.title} className="w-full h-full object-cover rounded" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        {service.featured && (
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="inline-flex text-xs font-semibold tracking-wide px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                              New Service
                            </span>
                            <span className="inline-flex text-xs font-semibold tracking-wide px-2 py-1 rounded-full bg-accent/20 text-accent border border-accent/40">
                              {service.tag}
                            </span>
                          </div>
                        )}
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      {service.featured && (
                        <div className="md:shrink-0">
                          <span className="inline-flex px-4 py-2 rounded-md bg-gradient-accent text-black font-semibold text-sm shadow-md">
                            Build Your Online Presence
                          </span>
                        </div>
                      )}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
