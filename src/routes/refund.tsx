import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        Refund & Return Policy
      </h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Returns
          </h2>
          <p>
            Eligible products can be returned within 7 days of
            delivery, provided they are unused, unwashed, and in their
            original condition with tags attached.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Refunds
          </h2>
          <p>
            Once the returned item passes quality inspection, the
            refund will be processed to the original payment method
            within 5–7 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Non-Returnable Items
          </h2>
          <p>
            Personalized products, innerwear, gift cards, and damaged
            items caused by misuse may not be eligible for return or
            refund.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Support
          </h2>
          <p>
            For any refund or return assistance, please contact our
            customer support team with your order details.
          </p>
        </section>
      </div>
    </div>
  );
}