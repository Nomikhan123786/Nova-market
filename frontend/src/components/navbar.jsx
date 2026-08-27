import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ink text-bone border-b border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg-px-10">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link to="/" className="flex items-baseline gap-1 select-none">
            <span className="font-display italic text-2xl lg:text-3xl tracking-tight">
              Nova{" "}
            </span>
            <span className="font-mono text-[10px] lg:text-xs uppercase tracking-[0.25em] text-amber">
              Market
            </span>
          </Link>
        </div>
      </div>
      gi
    </header>
  );
};

export default Navbar;
