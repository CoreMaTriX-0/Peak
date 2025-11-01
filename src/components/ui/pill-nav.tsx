import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PillNavItem {
  name: string;
  path: string;
}

interface PillNavProps {
  items: PillNavItem[];
  className?: string;
}

export const PillNav = ({ items, className }: PillNavProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className={cn("flex items-center gap-2", className)}>
      {items.map((item) => {
        const active = isActive(item.path);
        
        return (
          <Link
            key={item.name}
            to={item.path}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
          >
            {active && (
              <motion.div
                layoutId="pill-nav"
                className="absolute inset-0 bg-secondary rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
            <span
              className={cn(
                "relative z-10 transition-colors",
                active ? "text-secondary-foreground" : "text-foreground hover:text-secondary"
              )}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default PillNav;
