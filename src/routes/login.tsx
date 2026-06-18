import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Crown } from "lucide-react";
import { useShop } from "@/lib/store";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Style Daddy" }, { name: "description", content: "Sign in with your phone number." }] }),
  component: LoginPage,
});

function LoginPage() {
  const { login } = useShop();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="text-center">
        <div className="inline-flex p-3 bg-gradient-crown rounded-full"><Crown className="w-8 h-8 text-royal" /></div>
        <h1 className="font-display text-4xl tracking-wide mt-4">Welcome, King</h1>
        <p className="text-sm text-muted-foreground mt-2">Sign in or create your royal account.</p>
      </div>

      <div className="mt-10 border rounded-lg p-6 bg-card">
        {step === "phone" ? (
          <form onSubmit={(e) => { e.preventDefault(); if (phone.length >= 10) setStep("otp"); }} className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold">Phone Number</span>
              <div className="mt-1.5 flex items-center border rounded-md focus-within:border-accent">
                <span className="px-3 py-3 text-muted-foreground border-r"><Phone className="w-4 h-4" /></span>
                <span className="px-2 text-sm text-muted-foreground">+91</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="10-digit mobile"
                  className="flex-1 bg-transparent px-2 py-3 outline-none"
                />
              </div>
            </label>
            <button type="submit" disabled={phone.length < 10} className="w-full bg-royal text-royal-foreground py-3 rounded-md font-semibold disabled:opacity-50">
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if (otp.length === 4) { login("+91" + phone); navigate({ to: "/account" }); } }} className="space-y-4">
            <p className="text-sm text-muted-foreground">OTP sent to <strong>+91 {phone}</strong>. <button type="button" onClick={() => setStep("phone")} className="text-accent underline">Change</button></p>
            <label className="block">
              <span className="text-sm font-semibold">Enter OTP (any 4 digits)</span>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                placeholder="• • • •"
                className="mt-1.5 w-full border rounded-md px-3 py-3 text-center text-2xl tracking-[0.5em] outline-none focus:border-accent"
              />
            </label>
            <button type="submit" disabled={otp.length !== 4} className="w-full bg-gradient-crown text-royal py-3 rounded-md font-semibold disabled:opacity-50">
              Verify & Sign In
            </button>
          </form>
        )}
        <p className="text-xs text-muted-foreground text-center mt-4">
          By continuing you agree to our <Link to="/" className="underline">Terms</Link> & <Link to="/" className="underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
