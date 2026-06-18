import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./logo";

const COLS = [
  { title: "Shop", links: [["New Arrivals", "/category/new-arrivals"], ["Shirts", "/category/shirts"], ["T-Shirts", "/category/t-shirts"], ["Jeans", "/category/jeans"], ["Jackets", "/category/jackets"], ["Footwear", "/category/footwear"], ["Sale", "/sale"]] },
  { title: "Help", links: [["Track Order", "/account"], ["Shipping & Delivery", "/"], ["Returns & Exchange", "/"], ["Size Guide", "/"], ["FAQs", "/"], ["Contact Us", "/"]] },
  { title: "Company", links: [["About Style Daddy", "/"], ["Our Story", "/"], ["Careers", "/"], ["Press", "/"], ["Loyalty Program", "/"], ["Gift Cards", "/"]] },
  { title: "Legal", links: [["Privacy Policy", "/"], ["Terms of Service", "/"], ["Cookie Policy", "/"], ["Accessibility", "/"]] },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-royal text-royal-foreground">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide">JOIN THE KINGDOM</h3>
            <p className="text-white/70 mt-2 text-sm">Get 10% off your first order plus early access to drops, sales & members-only perks.</p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-gold"
            />
            <button className="bg-gradient-crown text-royal font-semibold px-6 rounded-md hover:opacity-90 transition">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Logo size={56} />
          <p className="text-sm text-white/70 mt-4 leading-relaxed">
            Premium menswear crafted for the modern king. Sharp tailoring, royal aesthetics, uncompromising quality.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/_style_daddy_/" target="_blank" rel="noreferrer" className="p-2 bg-white/10 hover:bg-gold hover:text-royal rounded-full transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-white/10 hover:bg-gold hover:text-royal rounded-full transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="p-2 bg-white/10 hover:bg-gold hover:text-royal rounded-full transition"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-base tracking-widest text-gold mb-4">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map(([label, href]) => (
                <li key={label}><Link to={href} className="text-sm text-white/70 hover:text-white transition">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact strip */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 grid sm:grid-cols-3 gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Address: <span className="text-white/60">[paste from Instagram bio]</span></div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +91 00000 00000</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> hello@styledaddy.com</div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Style Daddy. All rights reserved.</span>
          <span>Crafted with 👑 for the modern king.</span>
        </div>
      </div>
    </footer>
  );
}
