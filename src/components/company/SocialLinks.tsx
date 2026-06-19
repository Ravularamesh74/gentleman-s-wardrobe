import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
];

export function SocialLinks() {
  return (
    <section className="company-social-links">
      <h2 className="text-3xl font-bold">Social Links</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {SOCIALS.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/5">
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
