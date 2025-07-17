import React, { useState } from "react";
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
  ArrowRight,
  X,
  LucideIcon,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Video Editing",
    description: "",
    color: "text-primary",
  },
  { icon: Mic, title: "Voice Dubbing", description: "", color: "text-yellow-400" },
  { icon: Zap, title: "SFX", description: "", color: "text-primary" },
  { icon: Volume2, title: "Mixing", description: "", color: "text-yellow-400" },
  {
    icon: Settings,
    title: "Mastering",
    description: "",
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "DI Color Grading",
    description: "",
    color: "text-yellow-400",
  },
  {
    icon: Music,
    title: "Music Composing",
    description: "",
    color: "text-primary",
  },
  {
    icon: Image,
    title: "Poster Designing",
    description: "",
    color: "text-yellow-400",
  },
  { icon: Video, title: "Teaser Cut", description: "", color: "text-primary" },
];

const StartProject: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState<"individual" | "combo" | "">(
    ""
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showServiceList, setShowServiceList] = useState(false);
  const navigate = useNavigate();

  const handleOpenForm = (type: "individual" | "combo") => {
    setSelectedType(type);
    setSelectedServices([]);
    setShowServiceList(false);
    setShowForm(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-20 flex items-center gap-1 text-foreground border-yellow-400 hover:bg-yellow-500 hover:text-white"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Button>

      {/* Foreground */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 drop-shadow-lg">
          Let’s Bring Your Vision to Life
        </h1>

        {!showForm ? (
          <div className="flex flex-col lg:flex-row gap-8 " >
            {/* Individual Service */}
            <div
              className="max-w-md w-full bg-background/90 p-8 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow border border-muted group backdrop-blur"
              onClick={() => handleOpenForm("individual")}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Individual Service
              </h2>
              <p className="text-muted-foreground mb-6">
                Choose from our specialized post-production services to enhance
                specific aspects of your project.
              </p>
              <Button className="w-full group text-white bg-yellow-500 hover:bg-yellow-500 transition-colors">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Combo Work */}
            <div
              className="max-w-md w-full bg-background/90 p-8 rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow border border-muted group backdrop-blur"
              onClick={() => handleOpenForm("combo")}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                All in One Combo
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the full suite of our post-production services in one
                comprehensive package.
              </p>
              <Button className="w-full group text-white bg-yellow-500 hover:bg-yellow-500 transition-colors">
                Start Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-xl w-full bg-background/95 p-8 rounded-xl shadow-xl backdrop-blur-md relative animate-fade-in">
            {/* Close Form Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-muted-foreground border-yellow-400 hover:bg-yellow-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>

            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Start Your Project
            </h2>

            {/* Type Selector */}
            <div className="mb-4 flex justify-center gap-6">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <input
                  type="radio"
                  value="individual"
                  checked={selectedType === "individual"}
                  onChange={() => {
                    setSelectedType("individual");
                    setShowServiceList(false);
                    setSelectedServices([]);
                  }}
                />
                Individual
              </label>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <input
                  type="radio"
                  value="combo"
                  checked={selectedType === "combo"}
                  onChange={() => {
                    setSelectedType("combo");
                    setShowServiceList(false);
                    setSelectedServices([]);
                  }}
                />
                Combo
              </label>
            </div>

            <form className="space-y-4">
              {/* Service Selection for Individual */}
              {selectedType === "individual" && (
                <>
                  {!showServiceList ? (
                    <Button
                      type="button"
                      onClick={() => setShowServiceList(true)}
                      className="w-full mb-4 py-3 px-6 text-base font-semibold rounded-lg border border-gray-600 text-gray-900 hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Zap className="w-4 h-4" />
                      Select Services
                    </Button>
                  ) : (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Select Services
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s, i) => (
                          <label
                            key={i}
                            className="flex items-center gap-2 text-sm font-medium text-foreground"
                          >
                            <input
                              type="checkbox"
                              value={s.title}
                              checked={selectedServices.includes(s.title)}
                              onChange={(e) => {
                                const value = e.target.value;
                                setSelectedServices((prev) =>
                                  e.target.checked
                                    ? [...prev, value]
                                    : prev.filter((v) => v !== value)
                                );
                              }}
                            />
                            {s.title}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
       className="w-full p-2 mt-1 rounded-md border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400"

                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 mt-1 rounded-md border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2 mt-1 rounded-md border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

               {/* Location */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-2 mt-1 rounded-md border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Project Details
                </label>
                <textarea
                  className="w-full p-2 mt-1 rounded-md border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Tell us about your project"
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="cinematic"
                size="xl"
                className="w-full group"
              >
                Submit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default StartProject;
