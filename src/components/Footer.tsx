import { Mail, Phone, MapPin } from "lucide-react";
import icon from "@/assets/icon.png";
import phonecall from "@/assets/phone-call.png";
import whatsapp from "@/assets/whatsapp.png";
import instagram from "@/assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={icon} alt="icon" className="w-24 h-24 object-contain" />
              <span className="text-xl font-bold text-foreground">
                Dreemers Production House
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Professional post-production services bringing your creative
              vision to life. From concept to completion, we craft stories that
              captivate audiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/services/video-editing" className="hover:text-primary transition-colors">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="/services/di-color-grading" className="hover:text-primary transition-colors">
                  DI Color Grading
                </a>
              </li>
              <li>
                <a href="/services/mixing-&-mastering" className="hover:text-primary transition-colors">
                  Audio Mixing & Mastering
                </a>
              </li>
              <li>
                <a href="/services/sfx" className="hover:text-primary transition-colors">
                  SFX Design
                </a>
              </li>
               <li>
               <div className="flex items-center space-x-1">
  <a href="/services/vfx" className="hover:text-primary transition-colors">
    VFX Design /
  </a>
  <a
    href="#services"
    className="text-sm text-muted-foreground hover:text-primary transition-colors"
  >
    More...
  </a>
</div>

              </li>
             
            </ul>
          </div>

          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-10 h-10" />
                <span className="text-sm">dreamersproductionhouse@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7904310585</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-8 h-8" />
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

          {/* Social Icons */}
          <div className="flex space-x-3 p-2">
            <a href="tel:+917904310585">
              <img
                src={phonecall}
                alt="Call"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=7904310585"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.instagram.com/dreamers_production_house_2025/?igsh=MWI3Znp0OGU5YnhsNA%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80"
              />
            </a>
          </div>

          <div className="flex space-x-6 items-center">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
