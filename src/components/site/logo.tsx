import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-user.png";

export function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div
        className="relative shrink-0 rounded-full bg-white p-1.5 ring-2 ring-gold/40 shadow-gold transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img src={logo} alt="Style Daddy" className="h-full w-full object-contain" />
      </div>
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.15em] text-foreground">STYLE DADDY</span>
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">King of Menswear</span>
      </div>
    </Link>
  );
}
