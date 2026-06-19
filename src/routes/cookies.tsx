// src/routes/cookies.tsx

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: CookiesPolicyPage,
});

function CookiesPolicyPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-yellow-700">
          Style Daddy
        </span>

        <h1 className="mt-5 text-5xl font-black">
          Cookie Policy
        </h1>

        <p className="mt-4 text-muted-foreground">
          Learn how Style Daddy uses cookies and similar
          technologies to improve your browsing experience.
        </p>
      </div>

      <div className="space-y-8">
        {/* What are Cookies */}
        <section className="rounded-2xl border p-6">
          <h2 className="mb-3 text-2xl font-bold">
            What Are Cookies?
          </h2>

          <p className="text-muted-foreground leading-7">
            Cookies are small text files stored on your device
            when you visit our website. They help remember your
            preferences, improve functionality, and provide a
            personalized shopping experience.
          </p>
        </section>

        {/* How We Use */}
        <section className="rounded-2xl border p-6">
          <h2 className="mb-3 text-2xl font-bold">
            How We Use Cookies
          </h2>

          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Keep you signed in to your account.</li>
            <li>Remember items in your shopping cart.</li>
            <li>Save wishlist and browsing preferences.</li>
            <li>Measure website performance and analytics.</li>
            <li>Improve security and prevent fraudulent activity.</li>
            <li>Personalize recommendations and promotions.</li>
          </ul>
        </section>

        {/* Types */}
        <section className="rounded-2xl border p-6">
          <h2 className="mb-3 text-2xl font-bold">
            Types of Cookies We Use
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-muted p-4">
              <h3 className="font-semibold">
                Essential Cookies
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Required for core website functionality such as
                login, checkout, and security.
              </p>
            </div>

            <div className="rounded-xl bg-muted p-4">
              <h3 className="font-semibold">
                Performance Cookies
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Help us understand visitor behavior and improve
                website performance.
              </p>
            </div>

            <div className="rounded-xl bg-muted p-4">
              <h3 className="font-semibold">
                Functional Cookies
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Remember your preferences like language and saved
                settings.
              </p>
            </div>

            <div className="rounded-xl bg-muted p-4">
              <h3 className="font-semibold">
                Marketing Cookies
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Used to provide relevant offers and personalized
                advertisements.
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="rounded-2xl border p-6">
          <h2 className="mb-3 text-2xl font-bold">
            Managing Cookies
          </h2>

          <p className="leading-7 text-muted-foreground">
            Most web browsers allow you to control or disable
            cookies through their settings. Disabling cookies may
            affect certain features such as login sessions,
            shopping carts, and personalized recommendations.
          </p>
        </section>

        {/* Updates */}
        <section className="rounded-2xl border p-6">
          <h2 className="mb-3 text-2xl font-bold">
            Policy Updates
          </h2>

          <p className="leading-7 text-muted-foreground">
            We may update this Cookie Policy from time to time to
            reflect changes in technology or legal requirements.
            Please review this page periodically for updates.
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-yellow-300 bg-yellow-50 p-6">
          <h2 className="mb-3 text-2xl font-bold">
            Contact Us
          </h2>

          <p className="leading-7 text-muted-foreground">
            If you have any questions regarding our Cookie Policy,
            please contact the Style Daddy customer support team.
          </p>
        </section>
      </div>
    </div>
  );
}