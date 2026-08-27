const words = [
  "Apparel",
  "Footwear",
  "Tech",
  "Home",
  "Accessories",
  "New Arrivals",
  "Best Sellers",
  "Free Returns",
  "Restocked",
];

const CategoryTicker = () => {
  const line = words.join(" /u2022  ");
  return (
    <div className=" bg-charcoal text-bone overflow-hidden border-y border-bone/10">
      <div className=" flex whitespace-nowrap py-2.5 marquee-track">
        <span className="font-mono text-xs uppercase teacking-[0.2em] px-4">
          {line}{" "}
        </span>
        <span className="font-mono text-xs uppercase teacking-[0.2em] px-4">
          {line}
        </span>
      </div>
    </div>
  );
};

export default CategoryTicker;
