// Mock product catalogue for NOVA MARKET
const img = (seed, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const categories = [
  "Apparel",
  "Footwear",
  "Tech",
  "Home",
  "Accessories",
];

export const products = [
  {
    id: "nm-001",
    name: "Fieldwork Overshirt",
    category: "Apparel",
    price: 78,
    originalPrice: 98,
    sku: "AP-0231",
    rating: 4.6,
    reviews: 128,
    colors: ["#14213D", "#7C9885", "#C1440E"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A boxy, brushed-cotton overshirt built for layering. Reinforced elbow panels and a hidden interior pocket make it as useful as it is worn-in.",
    images: [img("nm001a"), img("nm001b"), img("nm001c")],
    isNew: true,
  },
  {
    id: "nm-002",
    name: "Runner Low Sneaker",
    category: "Footwear",
    price: 112,
    sku: "FW-1042",
    rating: 4.8,
    reviews: 341,
    colors: ["#F7F3EC", "#14213D"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description:
      "A low-profile trainer with a recycled-foam midsole and a knit upper that breaks in fast and breathes all day.",
    images: [img("nm002a"), img("nm002b"), img("nm002c")],
  },
  {
    id: "nm-003",
    name: "Desk Lamp No. 4",
    category: "Home",
    price: 64,
    sku: "HM-0087",
    rating: 4.4,
    reviews: 76,
    colors: ["#E8A33D", "#1B1B1B"],
    description:
      "A weighted-base task lamp with a three-step dimmer and a warm 2700K bulb included. Ships flat, assembles in two minutes.",
    images: [img("nm003a"), img("nm003b"), img("nm003c")],
  },
  {
    id: "nm-004",
    name: "Wireless Earbuds Mk II",
    category: "Tech",
    price: 129,
    originalPrice: 149,
    sku: "TC-2210",
    rating: 4.5,
    reviews: 512,
    colors: ["#1B1B1B", "#F7F3EC"],
    description:
      "28-hour total battery life, active noise cancellation, and a case that charges off any USB-C cable you already own.",
    images: [img("nm004a"), img("nm004b"), img("nm004c")],
    isNew: true,
  },
  {
    id: "nm-005",
    name: "Canvas Tote, Large",
    category: "Accessories",
    price: 38,
    sku: "AC-0459",
    rating: 4.7,
    reviews: 203,
    colors: ["#F7F3EC", "#7C9885", "#14213D"],
    description:
      "14oz waxed canvas with a leather base guard. Fits a 16-inch laptop plus a week of groceries without complaint.",
    images: [img("nm005a"), img("nm005b"), img("nm005c")],
  },
  {
    id: "nm-006",
    name: "Pleated Trouser",
    category: "Apparel",
    price: 86,
    sku: "AP-0344",
    rating: 4.3,
    reviews: 64,
    colors: ["#1B1B1B", "#14213D"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "A relaxed straight-leg trouser in mid-weight twill, cut with a deep pleat and a hem long enough to break just once.",
    images: [img("nm006a"), img("nm006b"), img("nm006c")],
  },
  {
    id: "nm-007",
    name: "Ceramic Pour-Over Set",
    category: "Home",
    price: 52,
    sku: "HM-0129",
    rating: 4.9,
    reviews: 91,
    colors: ["#F7F3EC", "#C1440E"],
    description:
      "A dripper, server, and two cups thrown from the same stoneware batch, so the glaze never quite matches twice.",
    images: [img("nm007a"), img("nm007b"), img("nm007c")],
    isNew: true,
  },
  {
    id: "nm-008",
    name: "Trail Mid Boot",
    category: "Footwear",
    price: 148,
    sku: "FW-1187",
    rating: 4.6,
    reviews: 158,
    colors: ["#14213D", "#7C9885"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description:
      "Waterproof suede upper, a lugged rubber outsole, and a gusseted tongue to keep the trail where it belongs.",
    images: [img("nm008a"), img("nm008b"), img("nm008c")],
  },
  {
    id: "nm-009",
    name: "Mechanical Keyboard 65%",
    category: "Tech",
    price: 139,
    sku: "TC-2288",
    rating: 4.7,
    reviews: 234,
    colors: ["#1B1B1B", "#F7F3EC"],
    description:
      "Hot-swappable switches, a gasket-mounted plate, and PBT keycaps that won't shine after a year of typing.",
    images: [img("nm009a"), img("nm009b"), img("nm009c")],
  },
  {
    id: "nm-010",
    name: "Wool Scarf, Herringbone",
    category: "Accessories",
    price: 44,
    sku: "AC-0512",
    rating: 4.5,
    reviews: 47,
    colors: ["#E8A33D", "#14213D", "#1B1B1B"],
    description:
      "Lambswool woven in a fine herringbone, finished with a hand-knotted fringe on both ends.",
    images: [img("nm010a"), img("nm010b"), img("nm010c")],
  },
  {
    id: "nm-011",
    name: "Linen Shirt, Relaxed",
    category: "Apparel",
    price: 68,
    sku: "AP-0398",
    rating: 4.4,
    reviews: 89,
    colors: ["#F7F3EC", "#7C9885"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "European flax linen, garment-washed for softness, cut for room to move through the shoulders.",
    images: [img("nm011a"), img("nm011b"), img("nm011c")],
  },
  {
    id: "nm-012",
    name: "Cast Iron Skillet 10in",
    category: "Home",
    price: 46,
    sku: "HM-0176",
    rating: 4.9,
    reviews: 312,
    colors: ["#1B1B1B"],
    description:
      "Pre-seasoned and machined smooth, this skillet goes from stovetop to broiler to table without a second thought.",
    images: [img("nm012a"), img("nm012b"), img("nm012c")],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelated = (product, count = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
