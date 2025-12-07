import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Who we are", path: "/who-we-are" },
    // { name: "Our Team", path: "/#our-team" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blog" },
    { name: "Services", path: "/#services" },
    // { name: "Privacy Policy", path: "/#privacy" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <Link to="/">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 hover:text-secondary transition-colors cursor-pointer">GVS Consulting</h3>
            </Link>
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
                    onClick={(e) => {
                      if (link.path === "/#services") {
                        const currentPath = window.location.pathname;
                        if (currentPath === "/") {
                          // Already on home page, just scroll
                          e.preventDefault();
                          const element = document.getElementById("services");
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        } else {
                          // On different page, navigate first then scroll
                          e.preventDefault();
                          window.location.href = "/#services";
                        }
                      }
                    }}
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
                <a href="mailto:info@gvsconsulting.info" className="hover:opacity-100 break-all">
                  info@gvsconsulting.info
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <WhatsAppIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/919478770034" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">
                  +91 94787 70034
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Next57+Coworking+Space+Industrial+Area+Chandigarh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100"
                >
                  Next57 Coworking Space Industrial Area Chandigarh
                </a>
              </div>
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
