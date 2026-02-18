import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background font-cinematic">
      <Navigation />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
