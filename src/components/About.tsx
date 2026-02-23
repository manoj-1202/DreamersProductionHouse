import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import certificateImg from "@/assets/certificateImg.jpg";
import "react-medium-image-zoom/dist/styles.css";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "90+",
      label: "Projects Completed",
      color: "text-primary",
    },
    {
      icon: Users,
      number: "80+",
      label: "Happy Clients",
      color: "text-accent",
    },
    {
      icon: Clock,
      number: "3+",
      label: "Years Experience",
      color: "text-primary",
    },
    {
      icon: Star,
      number: "4.6",
      label: "Client Rating",
      color: "text-accent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const websiteCreationHighlights = [
    "Custom website layouts designed for your brand identity",
    "Mobile and desktop friendly design for all users",
    "Smooth navigation and clear content sections",
    "Scalable website structure for future updates",
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center lg:text-left">
              Crafting Stories Through{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              Since our establishment in 2025, we have been offering extraordinary pre-production and post-production
              services. Our work spans film, music, and creative media, building a strong foundation in the industry.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              Backed by a passionate team of professionals and artists, we focus on understanding your vision and delivering
              outcomes that exceed expectations across every stage of production.
            </p>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-yellow-400/40 bg-gradient-to-br from-yellow-500/15 via-card to-accent/15 p-6"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-3">
                Website Creation
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 text-center lg:text-left">
                Unique Websites Built for Your Brand and Audience
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-center lg:text-left">
                We create custom business websites that reflect your brand and communicate your services clearly. Every
                website is built with modern design, clean structure, and an easy user experience from start to finish.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {websiteCreationHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-yellow-400/25 bg-background/50 px-3 py-2 text-sm text-foreground/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/services/website-creation"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-md text-sm font-semibold text-black bg-yellow-400 hover:bg-yellow-500 transition-colors"
                >
                  Explore Website Creation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

              </div>
            </motion.div>

            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 text-center lg:text-left font-bodoni">
                Award-Winning <span className="bg-gradient-accent bg-clip-text text-transparent">Recognition</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                Our short film <strong>"Dreamers"</strong>, directed by <strong>K. Dharani</strong>, was recognized as a finalist
                in the <strong>MEI International Film Festival 2025</strong>. Among 1200+ global entries, it stood out for its
                creative vision and societal impact.
              </p>
            </Card>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                to="/startProject"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-semibold text-primary border border-primary hover:text-white hover:bg-primary transition-all group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                 to="/services/website-creation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-semibold text-primary border border-primary hover:text-white hover:bg-primary transition-colors"
              >
                Start Website Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <Card className="h-full p-5 text-center bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                    <div className={`inline-flex p-3 rounded-full bg-secondary mb-3 ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Card className="p-3 bg-gradient-card border-border">
                <img
                  src={certificateImg}
                  alt="MEIFF 2025 Winner Certificate"
                  className="w-full h-auto max-h-[520px] rounded-md object-contain shadow-md"
                />
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
