import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Acceptance
          </h2>
          <p>
            By accessing or using Style Daddy, you agree to comply with
            these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Orders
          </h2>
          <p>
            All orders are subject to availability and confirmation.
            We reserve the right to cancel or refuse any order.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Pricing
          </h2>
          <p>
            Prices may change without prior notice. Applicable taxes
            and shipping charges will be added during checkout.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Intellectual Property
          </h2>
          <p>
            All content, logos, images, and branding belong to Style
            Daddy and may not be reproduced without permission.
          </p>
        </section>
      </div>
    </div>
  );
}