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
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
    "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800",
    "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800",
  ],
  "t-shirts": [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
  ],
  jeans: [
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
    "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800",
    "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800",
  ],
  trousers: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800"],
  chinos: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"],
  "cargo-pants": ["https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800"],
  joggers: ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800"],
  shorts: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800"],
  blazers: ["https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800", "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"],
  suits: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800", "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800"],
  jackets: [
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800",
  ],
  hoodies: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800", "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"],
  sweaters: ["https://images.unsplash.com/photo-1638332321009-ef94d8c45ee4?w=800"],
  ethnic: ["https://images.unsplash.com/photo-1610030181087-540017dc9d61?w=800", "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=800"],
  activewear: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"],
  innerwear: ["https://images.unsplash.com/photo-1620799139652-715e4d5b2c47?w=800"],
  sleepwear: ["https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800"],
  footwear: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
    "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?w=800",
    "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800",
  ],
  accessories: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
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
