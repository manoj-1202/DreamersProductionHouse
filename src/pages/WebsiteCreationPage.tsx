import { ArrowRight, ArrowUp, CheckCircle2, Globe, LayoutDashboard, Megaphone, Rocket, Search, ShieldCheck, ShoppingBag, Smartphone, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import phonecall from "@/assets/phone-call.png";
import whatsapp from "@/assets/whatsapp.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import www from "../assets/www.png"

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const inspiringServices = [
  {
    icon: LayoutDashboard,
    title: "Website Designing",
    description:
      "Professional website design services in Coimbatore with custom UI, brand-focused layouts, mobile responsiveness, and SEO-ready structure for better search visibility.",
  },
  {
    icon: Rocket,
    title: "Web Development",
    description:
      "Custom web development for business websites, service brands, and portfolio platforms with fast performance, clean code, and scalable architecture.",
  },
  {
    icon: Globe,
    title: "Static and Dynamic Website",
    description:
      "Static websites for fast launch and dynamic CMS websites for easy updates, lead generation, and long-term business growth.",
  },
  {
    icon: Search,
    title: "Dynamic Websites",
    description:
      "Data-driven dynamic website development with admin-friendly management, custom integrations, and conversion-focused page flows.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Development",
    description:
      "Ecommerce website development with secure checkout, product catalog management, and conversion-optimized storefront design.",
  },
  {
    icon: Megaphone,
    title: "Responsive Website",
    description:
      "Responsive website design that ensures consistent user experience across mobile, tablet, and desktop devices for higher engagement and better results.",
  },
];

const qualityPillars = [
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Every screen size is optimized for readability and conversion.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Structure and metadata prepared for stronger search visibility.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description: "Fast loading pages with clean front-end delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable and Secure",
    description: "Stable deployment patterns and clean integration practices.",
  },
  {
    icon: Wrench,
    title: "Post-Launch Support",
    description: "Ongoing updates, maintenance, and feature enhancements.",
  },
  {
    icon: CheckCircle2,
    title: "Conversion Optimized",
    description: "Strategic page flow and CTA placement designed to increase leads.",
  },
];

const liveStats = [
  { value: "50+", label: "Web Projects Delivered" },
  { value: "<2.4s", label: "Average Load Performance" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Support Response Time" },
];

const outcomeCards = [
  {
    title: "More Qualified Leads",
    description: "Conversion-focused landing flows that guide visitors to inquiry and booking actions.",
  },
  {
    title: "Stronger Brand Trust",
    description: "Premium visual systems, clear messaging, and consistent UI patterns for credibility.",
  },
  {
    title: "Higher Organic Reach",
    description: "Technical SEO foundations with fast architecture and semantic page structure.",
  },
];

const trustSteps = [
  { step: "Discovery and Planning", duration: "Day 1" },
  { step: "UI Design and Direction", duration: "Days 2-4" },
  { step: "Development and QA", duration: "Days 5-8" },
  { step: "Launch and Optimization", duration: "Day 9+" },
];

const checkList = [
  "SEO-friendly website architecture and page structure",
  "Original, brand-specific copy and visual direction",
  "Lead-focused inquiry forms and conversion CTAs",
  "Fast loading performance and technical optimization",
];

const cardHoverClass =
  "transition-all duration-300 hover:scale-[1.02] hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer";

const websiteHelpApiUrl =
  import.meta.env.VITE_WEBSITE_HELP_API_URL ||
  "https://backend-websitecreation.onrender.com/send-website-help-email";
const websiteHelpFallbackUrls = [
  websiteHelpApiUrl,
  "https://backend-websitecreation.onrender.com/send-contact-email",
  "https://backend-websitecreation.onrender.com/api/send-contact-email",
];

const WebsiteCreationPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        name,
        email,
        phone: mobile,
        message,
        location: "Website Creation Page",
        duration: "Not specified",
        services: ["Website Creation"],
        type: "website-creation",
      };

      let lastError = "Request failed";
      let sent = false;

      for (const url of websiteHelpFallbackUrls) {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          sent = true;
          break;
        }

        const responseText = (await response.text()) || "";
        lastError = `HTTP ${response.status}${responseText ? `: ${responseText}` : ""}`;
      }

      if (!sent) {
        throw new Error(lastError);
      }

      toast.success("Success", {
        description: "Your quote request has been sent.",
      });
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
      setOpen(false);
    } catch (error) {
      const messageText = error instanceof Error ? error.message : "Unable to send request";
      toast.error("Error", {
        description: `Unable to send request. ${messageText}`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-cinematic">
      <motion.header
        className="fixed top-0 inset-x-0 z-40 border-b border-yellow-400/20 bg-background/70 backdrop-blur-xl"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3  flex items-center justify-between gap-4">
          <Button
            variant="outline"
            className="border-yellow-400/50 text-foreground hover:bg-yellow-500 hover:text-black " 
            onClick={() => navigate("/services")}
          >
            Back
          </Button>
          {/* <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10">
            <img src={www} alt="Website icon" className="w-4 h-4 object-contain" />
            <p className="text-xs sm:text-sm font-semibold text-yellow-200 tracking-wide">
              Website Creation Studio
            </p>
          </div> */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-xs sm:text-sm px-2 sm:px-3"
              onClick={() => setOpen(true)}
            >
              Start Project
            </Button>
            <a
              href="tel:+916383338383"
              className="text-[11px] sm:text-xs text-foreground/90 px-2 sm:px-3 py-1 rounded-full border border-border bg-secondary/50 hover:border-yellow-400/50 transition-colors whitespace-nowrap"
            >
              Call: +91 63833 38383
            </a>

            <span className="hidden md:inline-flex text-xs text-foreground/85 px-3 py-1 rounded-full border border-border bg-secondary/50">
              Premium Build Quality
            </span>
          </div>
        </div>
      </motion.header>
      {/* Social Icons */}
      <div className="fixed top-1/2 left-3 -translate-y-1/2 z-50 flex flex-col items-center gap-8">
        <a href="tel:+916383338383" className="rounded-full animate-pulse">
          <img
            src={phonecall}
            alt="Call"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:opacity-80"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=6383338383"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full animate-pulse"
        >
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain hover:opacity-80"
          />
        </a>
      </div>
      <div className="hidden xl:block fixed right-4 top-[34%] z-40">
        <Card className="w-56 border-yellow-400/40 bg-background/85 backdrop-blur-md p-4 shadow-elegant">
          <p className="text-xs uppercase tracking-wide text-yellow-300 mb-2">Build With Us</p>
          <h4 className="text-sm font-semibold text-foreground mb-3">Launch a high-converting website for your brand.</h4>
          <Button
            onClick={() => setOpen(true)}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm"
          >
            Start Project
          </Button>
          <a href="tel:+916383338383" className="block text-xs text-center text-muted-foreground mt-3 hover:text-foreground">
            +91 63833 38383
          </a>
        </Card>
      </div>
      {showScrollTop && (
        <button
          type="button"
          aria-label="Go to top"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border border-yellow-400/60 bg-yellow-400 text-black shadow-lg hover:bg-yellow-500 transition-colors"
        >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}
      <main className="pt-24">
        <motion.section
          className="relative py-20 px-6 overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Card className={`relative p-8 md:p-12 border-yellow-400/40 bg-gradient-to-br from-yellow-500/10 via-card to-accent/10 shadow-elegant ${cardHoverClass}`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/50 bg-yellow-400/10 text-yellow-300 text-sm font-semibold tracking-wide mb-6">
                    <img src={www} alt="Website icon" className="w-4 h-4 object-contain" />
                    Website Creation
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                    SEO-FRIENDLY WEBSITE DESIGN AND DEVELOPMENT FOR GROWING BRANDS
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We build SEO-friendly business websites that rank better, load faster, and convert visitors into real leads.
                    From strategy and design to development and launch, every website is custom-built for your brand and growth goals.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {checkList.map((item) => (
                      <p key={item} className="text-sm text-foreground/90 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                        Start Website Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[520px] bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-foreground">
                          HOW CAN WE HELP?
                        </DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Mobile No"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                        <Textarea
                          placeholder="Your Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          required
                        />
                        <Button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                        >
                          {submitting ? "Sending..." : "Submit"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    className="border-yellow-400/60 text-foreground hover:bg-yellow-500 hover:text-black"
                    onClick={() => navigate("/services")}
                  >
                    Back to Services
                  </Button>
                </div>
              </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="px-6 -mt-8 relative z-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <Card className="p-4 md:p-6 border-yellow-400/30 bg-gradient-to-r from-card via-secondary/40 to-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {liveStats.map((item) => (
                  <div key={item.label} className="text-center rounded-lg border border-border/60 bg-background/40 p-4">
                    <p className="text-2xl md:text-3xl font-bold text-yellow-300">{item.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6 bg-gradient-hero"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              One-Stop SEO Website Solutions
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {qualityPillars.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Card className={`p-6 bg-gradient-card border-border ${cardHoverClass}`}>
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Results You Can Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomeCards.map((item) => (
                <Card key={item.title} className={`p-6 bg-gradient-card border-border ${cardHoverClass}`}>
                  <p className="text-sm uppercase tracking-wide text-yellow-300 mb-3">Outcome</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6 bg-gradient-hero"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className={`p-7 border-border bg-card/70 ${cardHoverClass}`}>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Before</p>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Outdated Website Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Poor mobile usability and slower page load.</li>
                <li>Weak CTA placement and low lead conversion.</li>
                <li>Inconsistent branding and outdated visuals.</li>
              </ul>
            </Card>
            <Card className={`p-7 border-yellow-400/30 bg-gradient-to-br from-yellow-500/10 via-card to-accent/10 ${cardHoverClass}`}>
              <p className="text-xs uppercase tracking-wide text-yellow-300 mb-3">After</p>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Premium Conversion-Focused Build</h3>
              <ul className="space-y-2 text-foreground/90">
                <li>Fast and responsive UI across all screen sizes.</li>
                <li>Clear inquiry journey with strategic conversion points.</li>
                <li>Modern brand presentation that builds trust instantly.</li>
              </ul>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
              Website Design and Development Services in Coimbatore
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {inspiringServices.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Card className={`p-7 bg-gradient-card border-border ${cardHoverClass}`}>
                  <item.icon className="w-9 h-9 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6 bg-gradient-hero"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <Card className={`p-8 md:p-10 border-yellow-400/40 bg-gradient-to-br from-yellow-500/10 via-card to-accent/10 ${cardHoverClass}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Let&apos;s Build Your Dream Website
                  </h3>
                  <p className="text-muted-foreground">
                    Share your business goal and we will propose the right website plan.
                  </p>
                </div>
                <Button
                  onClick={() => setOpen(true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  Request a Free Quote
                </Button>
              </div>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="py-16 px-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <Card className={`relative overflow-hidden p-8 md:p-10 border-yellow-400/40 bg-gradient-to-br from-accent/10 via-card to-yellow-500/10 ${cardHoverClass}`}>
              <motion.div
                className="absolute -top-16 -right-12 w-56 h-56 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none"
                animate={{ x: [0, -8, 0], y: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-16 -left-12 w-52 h-52 rounded-full bg-accent/10 blur-3xl pointer-events-none"
                animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
                    Trusted Website Design Company
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Build a Copyright-Safe, SEO-Ready Website for Your Business
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A high-performing website turns search traffic into qualified customers. Our team creates original website design, custom development, and SEO-focused content structure to improve ranking and lead generation. All deliverables are produced as original work with clear ownership terms, helping your brand avoid copyright risk from copied layouts, text, or media. As a professional website design and web development team in Coimbatore, we deliver modern websites that are fast, secure, and built for long-term growth.
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <div className={`rounded-xl border border-border bg-secondary/30 p-5 ${cardHoverClass}`}>
                    <p className="text-foreground font-semibold mb-4">Delivery Flow</p>
                    <div className="space-y-3">
                      {trustSteps.map((item, index) => (
                        <div key={item.step} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-yellow-400/20 border border-yellow-400/50 text-yellow-300 text-xs font-bold flex items-center justify-center">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm text-foreground">{item.step}</p>
                            <p className="text-xs text-muted-foreground">{item.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteCreationPage;
