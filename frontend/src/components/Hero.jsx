import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 lg:pt-16 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
      <div>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-rust">
          Autumn Catalogue 01
        </span>
        <h1 className=" font-display text-[13vw] leading-[0.95] sm:text-6xl lg:text-7xl mt-4 mb-6">
          Goods worth
          <br />
          <span className="italic text-ink/70 ">keeping.</span>
        </h1>
        <p className="font-body text-base lg:text-lg text-charcoal/70 max-w-md mb-8">
          Cnsidered apparel, tech, and home objects, priced like a price tag
          should be plainly, and stocked untill they sell out.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-ink text-bone px-6 py-3.5 font-mono uppercase tracking-widest text-sm hover:bg-charcoal"
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
          <Link
            to="/shop?category=Tech"
            className="font-mono uppercase tracking-widest text-sm border-b border-charcoal/40 pbs-0.5 hover:border-rust hover:text-rust transition-colors"
          >
            New in Tech
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="ticket-card p-3">
          <img
            src={hero}
            alt="Featured product from the autumn catalogue"
            className="w=full aspect-[4/5] object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-amber text-ink px-5 py-4 hidden sm:flex flex-col shadow-lg">
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Lot 01 / Featured
          </span>
          <span className="font-display text-xl">Fieldwork Overshirt</span>
          <span className="font-mono text-sm mt-1">$78.00</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
