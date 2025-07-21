import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "dreamersproductionhouse@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7904310585",
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Location",
      content:
        "21/b Saisubaramaniyam Nagar, Nanjagoundapalayam, Gobichettipalayam, Erode, 638452.",
      color: "text-primary",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(
        "https://backend-dreamers.onrender.com/send-contact-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );

      if (response.ok) {
        toast.success("Success", {
          description: "Your message has been sent successfully!",
        });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Error", {
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Error sending message.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create Something
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {" "}
              Amazing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with us and let's
            discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border shadow-elegant animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-secondary border-border focus:border-primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="bg-secondary border-border focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Input
                placeholder="Mobile Number"
                className="bg-secondary border-border focus:border-primary"
                  value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <Textarea
                placeholder="Tell us about your project..."
                rows={6}
                className="bg-secondary border-border focus:border-primary resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <Button
                variant="hero"
                size="lg"
                className="w-full group"
                type="submit"
                disabled={submitting}
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're here to help bring your creative vision to life. Whether you
                have a specific project in mind or just want to explore
                possibilities, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`p-3 rounded-lg bg-secondary ${info.color} group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-gradient-card border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Business Hours
              </h4>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;