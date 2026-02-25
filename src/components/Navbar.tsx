import { useState } from "react";
import { Menu, X } from "lucide-react";
import awwaLogo from "@/assets/awwa-logo.png";

const navItems = [
  "Home",
  "Vision & KRAs",
  "About Us",
  "Our Impact",
  "AWWA Song",
  "Gallery",
  "External Links",
  "Grants & Assistance",
  "Archives",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={awwaLogo} alt="AWWA Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-3 py-2 text-sm font-body font-semibold text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-in">
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm font-body font-semibold text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
