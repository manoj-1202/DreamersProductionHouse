import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import icon from "@/assets/icon.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={icon} alt="icon" className="w-24 h-20 object-contain" />

            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground font-cinzel">
                Dreamer's Production House
              </span>
              <p className="text-sm italic text-muted-foreground font-thin -mt-1 text-center w-full hidden sm:block">
                “Your Dream. It's Our Dream.”
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/startProject"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md transition-all duration-300"
            >
              Start Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                isOpen ? "hover:text-red-500" : "hover:text-yellow-400"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <p className="text-center text-sm italic text-muted-foreground mb-1">
              “Your Dream. It's Our Dream.”
            </p>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-6 flex justify-center">
              <Link
                to="/startProject"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Start Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
