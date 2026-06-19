import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="company-newsletter">
      <h2 className="text-3xl font-bold">Newsletter</h2>
      <p className="mt-4 text-sm text-muted-foreground">Subscribe for updates and exclusive drops.</p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
        />
        <button className="rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-royal">Subscribe</button>
      </form>
    </section>
  );
}
