import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { categories } from "../data.js";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count, setIsOpen } = useCart();
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
    setMenuOpen(false);
  };
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

          <nav className="hidden lg:flex items-center gap-8 font-body text-sm uppercase tracking-wide">
            {categories.map((c) => (
              <Link
                key={c}
                to={`/shop?category=${encodeURIComponent(c)}`}
                className="hover:text-amber transition-colors"
              >
                {c}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 lg:gap-3">
            <form
              onSubmit={submitSearch}
              className="hidden md:flex items-center bg-ink-2 rounded-full px-3 py-1.5 gap-2"
            >
              <Search size={16} className="text-bone/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="bg-transparent outline-none text-sm placeholder:text-bone/50 w-36 lg:w-48"
              />
            </form>
            <button
              className="md:hidden p-2"
              onClick={() => navigate("/shop")}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              className="relative p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber text-ink text-[10px] font-mono font-semibold min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-bone/10 px-4 py-4 flex flex-col gap-4 font-body uppercase text-sm tracking-wide">
          {categories.map((c) => (
            <Link
              key={c}
              to={`/shop?category=${encodeURIComponent(c)}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
