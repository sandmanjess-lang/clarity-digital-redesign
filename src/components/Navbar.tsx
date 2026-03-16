import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/people", label: "People" },
  { to: "/transactions", label: "Transactions" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b"
      style={{
        background: "hsla(207, 18%, 32%, 0.85)",
        borderColor: "hsla(0, 0%, 100%, 0.1)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold tracking-wide"
            style={{ color: "hsl(0, 0%, 100%)" }}>
            clarity
          </span>
          <span className="text-xl font-display font-light tracking-wide text-gradient">
            group
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-accent-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 gradient-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          style={{ color: "hsl(0, 0%, 100%)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t"
            style={{
              background: "hsla(207, 18%, 28%, 0.95)",
              borderColor: "hsla(0, 0%, 100%, 0.1)",
            }}
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "text-accent-foreground bg-accent/10"
                        : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
