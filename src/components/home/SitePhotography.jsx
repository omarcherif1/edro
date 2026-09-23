import { useEffect, useState } from "react";
import piping1 from "../../assets/edro/piping1.jpeg";
import piping3 from "../../assets/edro/piping3.jpeg";
import piping4 from "../../assets/edro/piping4.jpeg";
import steelstructure1 from "../../assets/edro/steelstructure1.jpeg";
import steelstructure4 from "../../assets/edro/steelstructure4.jpeg";
import steelstructure6 from "../../assets/edro/steelstructure6.png";

const PHOTOS = [
  piping1,
  piping3,
  piping4,
  steelstructure1,
  steelstructure4,
  steelstructure6,
];

const AUTO_ADVANCE_MS = 4500;

export default function SitePhotography() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setIndex((i) => (i + 1) % PHOTOS.length);

  return (
    <section className="border-b border-line bg-ink">
      {/* Desktop / tablet: static grid */}
      <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {PHOTOS.map((src, i) => (
          <div
            key={src}
            className={`relative aspect-[4/3] overflow-hidden ${
              i < PHOTOS.length - 1 ? "border-e border-ink" : ""
            }`}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile: one photo, arrows, auto-advance */}
      <div className="md:hidden relative aspect-[4/3] overflow-hidden">
        {PHOTOS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute top-1/2 start-3 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-ink/60 border border-line text-fg"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute top-1/2 end-3 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-ink/60 border border-line text-fg"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2">
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 transition-all duration-200 ${
                i === index ? "w-5 bg-accent" : "w-1.5 bg-fg/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
