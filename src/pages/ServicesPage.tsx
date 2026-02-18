import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background font-cinematic">
      <Navigation />
      <main className="pt-24">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
