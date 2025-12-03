import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Who we are", path: "/#who-we-are" },
    { name: "Our Team", path: "/#our-team" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/#privacy" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">GVS Consulting</h3>
            <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4">Delivering on the Promise</p>
            <p className="text-xs sm:text-sm opacity-80">
              Your trusted partner in accounting and financial services
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@gvsconsulting.com" className="hover:opacity-100 break-all">
                  info@gvsconsulting.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:opacity-100">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Connaught Place, New Delhi, India</span>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 mt-4">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-secondary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} GVS Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
