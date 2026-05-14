"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "500+ Active Members",
    desc: "A growing community pushing limits every day.",
  },
  {
    title: "20+ Professional Machines",
    desc: "Modern equipment for strength and endurance.",
  },
  {
    title: "Certified Trainers",
    desc: "Expert guidance to maximize your results.",
  },
  {
    title: "Custom Workout Plans",
    desc: "Programs tailored to your fitness goals.",
  },
];

export default function ScrollCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${(cards.length * 100) + 150}svh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        {cards.map((card, index) => (
          <Card key={index} card={card} index={index} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

function Card({ card, index, scrollYProgress }: { card: typeof cards[0]; index: number; scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const sectionStart = 0.15; // delay before first card
const availableRange = 1 - sectionStart;

const start =
  sectionStart + (index / cards.length) * availableRange;

const end =
  sectionStart +
  ((index + 1) / cards.length) * availableRange;

  // Fade In
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );

  // Slight movement
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [50, -50]
  );

  const scale = useTransform(
  scrollYProgress,
  [start, start + 0.2],
  [0.8, 1]
);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute z-10 transform-gpu flex w-[90%] max-w-2xl flex-col items-center rounded-3xl border border-primary/20 bg-white/10 p-10 text-center -translate-y-10 backdrop-blur-md"
    >
      <h2 className="mb-4 text-5xl font-bold text-primary">
        {card.title}
      </h2>

      <p className="text-lg text-white/80">
        {card.desc}
      </p>
    </motion.div>
  );
}