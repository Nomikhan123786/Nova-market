import CategoryTicker from "../components/CategoryTicker";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryTicker />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className=" font-mono text-xs uppercase tracking-[0.3em] text-rust">
          <div>
            <span>Lot 02</span>
            <h2>New Arrivals</h2>
          </div>
          <Link>View all</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
