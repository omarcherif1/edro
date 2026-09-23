import { useEffect, useState } from "react";

export default function MobileCarousel({ items, autoAdvanceMs = 5000 }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [index, count, autoAdvanceMs]);

  if (count === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-400 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 flex items-center justify-center border border-line text-fg shrink-0"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to item ${i + 1}`}
                className={`h-1.5 transition-all duration-200 ${
                  i === index ? "w-5 bg-accent" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 flex items-center justify-center border border-line text-fg shrink-0"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
