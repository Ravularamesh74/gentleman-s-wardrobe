interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  { question: 'How do I track my order?', answer: 'Use the tracking form above with your order number.' },
  { question: 'Can I return an item?', answer: 'Yes, within 30 days of delivery with tags attached.' },
];

export function FAQAccordion() {
  return (
    <section className="support-faq-accordion">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
