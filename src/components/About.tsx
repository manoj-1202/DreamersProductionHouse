import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Star } from "lucide-react";

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Stories Through{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a passionate team of post-production specialists dedicated
              to bringing your creative vision to life. With years of experience
              in the film industry, we understand the nuances that make great
              storytelling.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From intimate documentaries to blockbuster features, we've worked
              across all genres, delivering exceptional quality that exceeds
              expectations every time.
            </p>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
              >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
