import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PillNav from "@/components/ui/pill-nav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Who we are", path: "/#who-we-are" },
    { name: "Our Team", path: "/our-team" },
    { name: "Blogs", path: "/#blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl font-bold text-primary">PeakVisory</h1>
            <p className="text-xs text-muted-foreground">Delivering on the Promise</p>
          </Link>

          <PillNav items={menuItems} className="hidden md:flex" />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
