import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <p>
            We collect information such as your name, phone number,
            email address, shipping address, and order details to
            provide our services.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to process orders, improve our
            services, provide customer support, and communicate
            important updates.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">
            Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your
            personal information from unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">
            Contact
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy,
            please contact our support team.
          </p>
        </section>
      </div>
    </div>
  );
}