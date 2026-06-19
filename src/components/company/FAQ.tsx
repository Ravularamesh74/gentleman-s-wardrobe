interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  { question: 'What is Style Daddy?', answer: 'A premium menswear brand.' },
  { question: 'How do I contact support?', answer: 'Use the contact form or email us.' },
];

export function FAQ() {
  return (
    <section className="company-faq">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <div className="mt-6 space-y-4">
        {FAQ_DATA.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold">{item.question}</h3>
            <p className="text-sm text-muted-foreground mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
