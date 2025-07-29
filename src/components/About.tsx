import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import certificateImg from "@/assets/certificateImg.jpg"; 
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Section */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center lg:text-left">
              Crafting Stories Through{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            {/* Stats Grid - Visible only on mobile after heading */}
            <motion.div
              className="block lg:hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={itemVariants}>
                    <Card className="p-6 text-center bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105">
                      <div
                        className={`inline-flex p-3 rounded-full bg-secondary mb-4 ${stat.color}`}
                      >
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              We are a passionate team of post-production specialists dedicated
              to bringing your creative vision to life. With years of experience
              in the film industry, we understand the nuances that make great
              storytelling.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              From intimate documentaries to blockbuster features, we've worked
              across all genres, delivering exceptional quality that exceeds
              expectations every time.
            </p>

            {/* Award Highlight  */}
          <div className="pt-0 lg:pt-[200px]">
              <h3 className="text-3xl font-semibold text-foreground mb-2 text-center lg:text-left font-bodoni">
                🎬 Award-Winning  <span className="bg-gradient-accent bg-clip-text text-transparent">
                Recognition
              </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                Our short film <strong>"Dreamers"</strong>, directed by{" "}
                <strong>K. Dharani</strong>, was recognized as a finalist in the{" "}
                <strong>MEI International Film Festival 2025</strong>. Among
                1200+ global entries, it stood out for its creative vision and
                societal impact. We're honored to be part of this global platform.
              </p>
            </div>

            {/* Certificate Image - Visible only on mobile after Award Highlight */}
            <motion.div
              className="block lg:hidden"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={certificateImg}
                alt="MEIFF 2025 Winner Certificate"
                className="w-full h-auto max-h-[500px] rounded-md border object-contain shadow-md mx-auto"
              />
            </motion.div>

            <div className="flex justify-center lg:justify-start">
              <Link
                to="/startProject"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-lg font-semibold text-primary border border-primary hover:text-white hover:bg-primary transition-all group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Section - Visible only on larger screens */}
          <motion.div
            className="hidden lg:block lg:w-1/2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <Card className="p-6 text-center bg-gradient-card border-border hover:shadow-elegant transition-all duration-500 hover:scale-105">
                    <div
                      className={`inline-flex p-3 rounded-full bg-secondary mb-4 ${stat.color}`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Certificate Image */}
          <motion.div variants={itemVariants}>
  <Zoom>
    <img
      src={certificateImg}
      alt="MEIFF 2025 Winner Certificate"
      className="w-full h-auto max-h-[500px] rounded-md object-contain shadow-md cursor-zoom-in"
    />
  </Zoom>
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;