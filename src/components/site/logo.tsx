
import { Link } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import logo from "@/assets/logo-user.png";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export function Logo({
  size = 56,
  showText = true,
}: LogoProps) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-4 select-none"
    >
      {/* Logo Icon */}
      <div
        className="
          relative flex shrink-0 items-center justify-center
          overflow-hidden rounded-full
          border border-yellow-400/30
          bg-gradient-to-br
          from-yellow-400/10
          via-white
          to-yellow-300/10
          shadow-2xl
          transition-all
          duration-500
          group-hover:scale-105
          group-hover:rotate-3
        "
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

        <img
          src={logo}
          alt="Style Daddy"
          className="relative z-10 h-[82%] w-[82%] object-contain"
        />

        <div className="absolute -top-1 -right-1 rounded-full bg-black p-1 shadow-lg">
          <Crown className="h-3.5 w-3.5 text-yellow-400" />
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="hidden sm:flex flex-col leading-none">
          <span
            className="
              bg-gradient-to-r
              from-yellow-500
              via-yellow-300
              to-yellow-500
              bg-clip-text
              text-2xl
              font-extrabold
              tracking-[0.28em]
              text-transparent
            "
          >
            STYLE DADDY
          </span>

          <span
            className="
              mt-1
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-zinc-500
            "
          >
            Premium Menswear
          </span>
        </div>
      )}
    </Link>
  );
}
