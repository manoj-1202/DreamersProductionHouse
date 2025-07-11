import { Film, Mail, Phone, MapPin } from "lucide-react";
import icon from "@/assets/icon.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                <img src={icon} alt="icon" className="w-24 h-24 object-contain" />
              <span className="text-xl font-bold text-foreground">Dreemers Production House</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Professional post-production services bringing your creative vision to life. 
              From concept to completion, we craft stories that captivate audiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Color Grading</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Audio Mixing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SFX Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-8 h-8" />
                <span className="text-sm">dreamersproductionhouse@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7904310585</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-10 h-10" />
                <span className="text-sm">21/b Saisubaramaniyam Nagar, Nanjagoundapalayam, Gobichettipalayam, Erode, 638452.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Dreemers Production House. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;