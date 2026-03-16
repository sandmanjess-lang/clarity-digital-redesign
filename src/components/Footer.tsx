import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold tracking-wide text-foreground">
              clarity
            </span>
            <span className="text-lg font-display font-light tracking-wide text-gradient">
              group
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/people" className="hover:text-foreground transition-colors">People</Link>
            <Link to="/transactions" className="hover:text-foreground transition-colors">Transactions</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Clarity Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
