export type Category = {
  slug: string;
  name: string;
  children?: { slug: string; name: string }[];
};

export const CATEGORIES: Category[] = [
  { slug: "new-arrivals", name: "New Arrivals" },
  {
    slug: "shirts",
    name: "Shirts",
    children: [
      { slug: "formal", name: "Formal Shirts" },
      { slug: "casual", name: "Casual Shirts" },
      { slug: "linen", name: "Linen Shirts" },
      { slug: "oxford", name: "Oxford Shirts" },
      { slug: "printed", name: "Printed Shirts" },
      { slug: "denim", name: "Denim Shirts" },
      { slug: "oversized", name: "Oversized Shirts" },
      { slug: "slim-fit", name: "Slim Fit Shirts" },
    ],
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    children: [
      { slug: "solid", name: "Solid Tees" },
      { slug: "graphic", name: "Graphic Tees" },
      { slug: "polo", name: "Polo T-Shirts" },
      { slug: "oversized", name: "Oversized Tees" },
      { slug: "henley", name: "Henleys" },
      { slug: "full-sleeve", name: "Full Sleeve Tees" },
      { slug: "muscle-fit", name: "Muscle Fit" },
    ],
  },
  {
    slug: "jeans",
    name: "Jeans",
    children: [
      { slug: "skinny", name: "Skinny" },
      { slug: "slim", name: "Slim" },
      { slug: "straight", name: "Straight" },
      { slug: "relaxed", name: "Relaxed" },
      { slug: "bootcut", name: "Bootcut" },
      { slug: "distressed", name: "Distressed" },
    ],
  },
  { slug: "trousers", name: "Trousers" },
  { slug: "chinos", name: "Chinos" },
  { slug: "cargo-pants", name: "Cargo Pants" },
  { slug: "joggers", name: "Joggers" },
  { slug: "shorts", name: "Shorts" },
  { slug: "blazers", name: "Blazers" },
  { slug: "suits", name: "Suits" },
  {
    slug: "jackets",
    name: "Jackets",
    children: [
      { slug: "bomber", name: "Bomber" },
      { slug: "denim", name: "Denim" },
      { slug: "leather", name: "Leather" },
      { slug: "puffer", name: "Puffer" },
      { slug: "varsity", name: "Varsity" },
    ],
  },
  { slug: "hoodies", name: "Hoodies & Sweatshirts" },
  { slug: "sweaters", name: "Sweaters" },
  {
    slug: "ethnic",
    name: "Ethnic Wear",
    children: [
      { slug: "kurtas", name: "Kurtas" },
      { slug: "kurta-sets", name: "Kurta Sets" },
      { slug: "nehru-jackets", name: "Nehru Jackets" },
    ],
  },
  { slug: "activewear", name: "Activewear" },
  { slug: "innerwear", name: "Innerwear" },
  { slug: "sleepwear", name: "Sleepwear" },
  {
    slug: "footwear",
    name: "Footwear",
    children: [
      { slug: "sneakers", name: "Sneakers" },
      { slug: "loafers", name: "Loafers" },
      { slug: "formal-shoes", name: "Formal Shoes" },
      { slug: "boots", name: "Boots" },
      { slug: "sandals", name: "Sandals" },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    children: [
      { slug: "watches", name: "Watches" },
      { slug: "belts", name: "Belts" },
      { slug: "wallets", name: "Wallets" },
      { slug: "caps", name: "Caps" },
      { slug: "sunglasses", name: "Sunglasses" },
      { slug: "bags", name: "Bags" },
      { slug: "backpacks", name: "Backpacks" },
      { slug: "socks", name: "Socks" },
      { slug: "ties", name: "Ties" },
      { slug: "bracelets", name: "Bracelets" },
      { slug: "perfumes", name: "Perfumes" },
    ],
  },
  { slug: "premium-brands", name: "Premium Brands" },
  { slug: "sale", name: "Sale" },
];

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  mrp: number;
  image: string;
  images?: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  fabric: string;
  fit: string;
};

const IMG: Record<string, string[]> = {
  shirts: [
    "/MEN-NAVY-STRIPE-FULL-SLEEVES-CASUAL-SHIRT.jpeg",
    "/MEN-NAVY-STRIPE-FULL-SLEEVES-CASUAL-SHIRT-2.jpeg",
    "/NAVY-BLUE-MANDARIN-COLLAR-SHIRT.jpeg",
    "/NAVY-BLUE-MANDARIN-COLLAR-SHIRT-2.jpeg",
    "/SMART-FIT-COTTON-SHIRT-FOR-MEN-REDTAPE.jpeg",
    "/SMART-FIT-COTTON-SHIRT-FOR-MEN-REDTAPE-2.jpeg",
    "/TOMMY-JEANS-FLEECE-LINED-CHECK-SHIRT-GREEN.jpeg",
    "/TOMMY-JEANS-PRE-OWNED=SHIRT-OLIVE.jpeg",
  ],
  "t-shirts": [
    "/BLACK-TS-BP.jpeg",
    "/BLUE-OVERSIZE-T-SHIRT.jpeg",
    "/BLACK-OS-TS.jpeg",
    "/MAROON-OS-TS.jpeg",
    "/TRI-TS-BP.jpeg",
    "/TRI-TS-BP2.jpeg",
    "/WHITE-TS-OF.jpeg",
    "/WHITE-OS-TS-BP.jpeg",
  ],
  jeans: [
    "/PT-WIDE-LEG-BP.jpeg",
    "/LENIN-BLACK.jpeg",
    "/LENIN-BLUE.jpeg",
    "/LENIN-GREY.jpeg",
    "/LENIN-BROWN.jpeg",
    "/LENIN-ASH.jpeg",
  ],
  trousers: [
    "/Leninshirt-pant.jpeg",
    "/OS-FIT-TIMELESS-EDGE.jpeg",
  ],
  chinos: [
    "/LENIN-LIGHT-BLUE.jpeg",
    "/LENIN-LIGHT-GREY.jpeg",
    "/LENIN-LIGHT-PINK.jpeg",
  ],
  "cargo-pants": [
    "/PT-WIDE-LEG-BP.jpeg",
    "/Leninshirt-pant.jpeg",
  ],
  joggers: [
    "/LENIN-PINK.jpeg",
    "/LENIN-ROSEY.jpeg",
  ],
  shorts: [
    "/LENIN-WHITE.jpeg",
    "/LENIN-PURE-BLACK.jpeg",
  ],
  blazers: [
    "/OS-FIT-TIMELESS-EDGE.jpeg",
    "/Black-TS.jpeg",
  ],
  suits: [
    "/Leninshirt-pant.jpeg",
    "/TOMMY-HILFIGER-BOYS WHITE-STRIPED-DOWN.jpeg",
  ],
  jackets: [
    "/TOMMY-HILFIGER-BOYS WHITE-STRIPED-DOWN.jpeg",
    "/TOMMY-JEANS-FLEECE-LINED-CHECK-SHIRT-GREEN.jpeg",
    "/TOMMY-JEANS-PRE-OWNED=SHIRT-OLIVE.jpeg",
  ],
  hoodies: [
    "/BLACK-OS-TS.jpeg",
    "/BLUE-OVERSIZE-T-SHIRT.jpeg",
  ],
  sweaters: [
    "/LENIN-ASH.jpeg",
    "/LENIN-BROWN.jpeg",
  ],
  ethnic: [
    "/LENIN-PINK.jpeg",
    "/LENIN-ROSEY.jpeg",
  ],
  activewear: [
    "/BLACK-TS-BP.jpeg",
    "/WHITE-OS-TS-BP.jpeg",
  ],
  innerwear: [
    "/WHITE-TS-OF.jpeg",
    "/LENIN-WHITE.jpeg",
  ],
  sleepwear: [
    "/LENIN-PURE-BLACK.jpeg",
    "/LENIN-LIGHT-GREY.jpeg",
  ],
  footwear: [
    "/product-1.jpg",
    "/product-2.jpg",
    "/product-3.jpg",
    "/product-4.jpg",
    "/product-5.jpg",
    "/product-6.jpg",
  ],
  accessories: [
    "/Gold-Bracelet.jpeg",
    "/Gold-bracelet-diamond.jpeg",
    "/Royal-Style-stainless-steel-bracelet.jpeg",
    "/1.jpeg",
    "/2.jpeg",
  ],
};

const BRANDS = ["Style Daddy", "Royal Crown", "Urban Lion", "Maison Noir", "Atelier 9", "King's Court"];
const COLORS = ["Navy", "Black", "White", "Olive", "Burgundy", "Charcoal", "Cream", "Indigo"];
const SIZES = ["S", "M", "L", "XL", "XXL"];
const FABRICS = ["100% Cotton", "Linen Blend", "Premium Wool", "Stretch Denim", "Polyester Mix", "Pure Silk"];
const FITS = ["Slim Fit", "Regular Fit", "Relaxed Fit", "Tailored Fit", "Oversized"];

function pseudo(seed: number) { return Math.abs(Math.sin(seed) * 10000) % 1; }

function generate(): Product[] {
  const products: Product[] = [];
  let id = 1;
  for (const cat of CATEGORIES) {
    if (cat.slug === "new-arrivals" || cat.slug === "sale" || cat.slug === "premium-brands") continue;
    const imgs = IMG[cat.slug] || IMG.shirts;
    const count = cat.children ? 8 : 4;
    for (let i = 0; i < count; i++) {
      const s = id;
      const mrp = Math.round(1499 + pseudo(s) * 6000);
      const disc = 0.15 + pseudo(s + 1) * 0.5;
      const price = Math.round(mrp * (1 - disc));
      const img = imgs[i % imgs.length];
      products.push({
        id: `p${id}`,
        name: `${["Royal", "Heritage", "Noir", "Crown", "Regal", "Imperial", "Monarch", "Prestige"][i % 8]} ${cat.name.replace(/s$/, "")}`,
        brand: BRANDS[Math.floor(pseudo(s + 2) * BRANDS.length)],
        category: cat.slug,
        price,
        mrp,
        image: img,
        images: imgs,
        colors: [COLORS[i % COLORS.length], COLORS[(i + 2) % COLORS.length], COLORS[(i + 4) % COLORS.length]],
        sizes: SIZES,
        rating: 3.8 + pseudo(s + 3) * 1.2,
        reviews: Math.floor(20 + pseudo(s + 4) * 480),
        isNew: pseudo(s + 5) > 0.7,
        isSale: disc > 0.35,
        description: `Crafted for the modern man, this ${cat.name.toLowerCase()} piece blends premium materials with sharp tailoring. A wardrobe essential built to last and turn heads.`,
        fabric: FABRICS[i % FABRICS.length],
        fit: FITS[i % FITS.length],
      });
      id++;
    }
  }
  return products;
}

export const PRODUCTS: Product[] = generate();

export function getProduct(id: string) { return PRODUCTS.find(p => p.id === id); }
export function getByCategory(slug: string) {
  if (slug === "new-arrivals") return PRODUCTS.filter(p => p.isNew);
  if (slug === "sale") return PRODUCTS.filter(p => p.isSale);
  if (slug === "premium-brands") return PRODUCTS.filter(p => ["Maison Noir", "Atelier 9"].includes(p.brand));
  const parent = CATEGORIES.find(c => c.slug === slug);
  if (parent?.children) return PRODUCTS.filter(p => p.category === slug);
  return PRODUCTS.filter(p => p.category === slug);
}
