// src/components/home/StyleQuiz.tsx

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Shirt,
  Crown,
  Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

type StyleType =
  | "Minimal"
  | "Streetwear"
  | "Luxury"
  | "Business"
  | "Casual";

const QUESTIONS = [
  {
    id: 1,
    question: "Choose your preferred outfit",
    options: [
      { label: "Oversized Tee", type: "Streetwear" as StyleType },
      { label: "Premium Shirt", type: "Business" as StyleType },
      { label: "Luxury Polo", type: "Luxury" as StyleType },
      { label: "Basic Tee", type: "Minimal" as StyleType },
    ],
  },
  {
    id: 2,
    question: "Pick your favorite color palette",
    options: [
      { label: "Black & White", type: "Minimal" as StyleType },
      { label: "Earth Tones", type: "Casual" as StyleType },
      { label: "Bold Graphics", type: "Streetwear" as StyleType },
      { label: "Gold & Navy", type: "Luxury" as StyleType },
    ],
  },
  {
    id: 3,
    question: "Weekend plan?",
    options: [
      { label: "Cafe Hopping", type: "Casual" as StyleType },
      { label: "Business Event", type: "Business" as StyleType },
      { label: "Luxury Dinner", type: "Luxury" as StyleType },
      { label: "Shopping & Sneakers", type: "Streetwear" as StyleType },
    ],
  },
];

const RESULTS: Record<
  StyleType,
  {
    title: string;
    description: string;
    category: string;
  }
> = {
  Streetwear: {
    title: "Urban Street King 👑",
    description:
      "Oversized tees, cargos, sneakers and statement pieces perfectly match your personality.",
    category: "t-shirts",
  },
  Luxury: {
    title: "Luxury Gentleman ✨",
    description:
      "Premium polos, tailored shirts and sophisticated essentials define your look.",
    category: "shirts",
  },
  Business: {
    title: "Executive Elite 💼",
    description:
      "Sharp formal shirts and elevated basics suit your professional lifestyle.",
    category: "shirts",
  },
  Casual: {
    title: "Effortlessly Cool ☕",
    description:
      "Relaxed fits and everyday essentials are your perfect wardrobe companions.",
    category: "t-shirts",
  },
  Minimal: {
    title: "Minimal Modern 🖤",
    description:
      "Clean silhouettes, neutral colors and timeless fashion are your signature.",
    category: "t-shirts",
  },
};

export function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<StyleType[]>([]);

  const finished = step >= QUESTIONS.length;

  const result = useMemo(() => {
    if (!finished) return null;

    const counts = new Map<StyleType, number>();

    answers.forEach((item) => {
      counts.set(item, (counts.get(item) ?? 0) + 1);
    });

    const winner =
      [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ??
      "Casual";

    return RESULTS[winner];
  }, [answers, finished]);

  function choose(type: StyleType) {
    setAnswers((prev) => [...prev, type]);
    setStep((prev) => prev + 1);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[40px] border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          {!finished ? (
            <>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                  AI STYLE QUIZ
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
                Find Your Signature Style
              </h2>

              <p className="mt-4 text-zinc-300">
                Answer 3 quick questions and discover the perfect
                Style Daddy collection for you.
              </p>

              {/* Progress */}
              <div className="mt-8 h-3 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-500"
                  style={{
                    width: `${(step / QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-white">
                  {QUESTIONS[step].question}
                </h3>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {QUESTIONS[step].options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => choose(option.type)}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-yellow-400 hover:bg-yellow-400/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">
                          {option.label}
                        </span>

                        <ArrowRight className="h-5 w-5 text-yellow-400 transition group-hover:translate-x-1" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500">
                <Crown className="h-12 w-12 text-black" />
              </div>

              <h2 className="mt-8 text-center text-5xl font-black text-white">
                {result?.title}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-zinc-300">
                {result?.description}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Feature
                  icon={<Check className="h-5 w-5" />}
                  text="Personalized Picks"
                />

                <Feature
                  icon={<Shirt className="h-5 w-5" />}
                  text="Premium Collection"
                />

                <Feature
                  icon={<Zap className="h-5 w-5" />}
                  text="Latest Trends"
                />
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link
                  to="/category/$slug"
                  params={{
                    slug: result?.category ?? "t-shirts",
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 font-bold text-black transition hover:scale-105"
                >
                  Shop My Style
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <button
                  onClick={restart}
                  className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Retake Quiz
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 p-5">
      <div className="text-yellow-400">{icon}</div>

      <span className="font-medium text-white">{text}</span>
    </div>
  );
}