import { Link } from "react-router-dom";

export default function DivisionHero({ hero, photo }) {
  return (
    <section
      id="top"
      className={`relative border-b border-line ${photo ? "" : "bg-[repeating-linear-gradient(118deg,#171717_0_10px,#121212_10px_20px)]"}`}
    >
      {photo && (
        <img
          src={photo}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.62)_0%,rgba(10,10,10,0.86)_100%)]" />
      {!photo && (
        <div className="absolute top-4 end-5 font-mono text-[9px] tracking-[0.14em] text-muted-2 uppercase">
          [ {hero.photoLabel} ]
        </div>
      )}
      <div className="relative max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(72px,12vw,168px)] pb-[clamp(48px,6vw,88px)] flex flex-col gap-8">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted flex-wrap">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform duration-150 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Divisions
          </Link>
          <span className="w-[7px] h-2 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
          <span className="text-fg">{hero.crumb}</span>
        </div>
        <h1 className="font-serif font-normal text-[clamp(44px,7vw,96px)] leading-[1.0] tracking-[-0.02em] m-0 text-fg">
          {hero.title}
        </h1>
        <p className="text-[clamp(17px,2vw,24px)] font-light text-fg m-0 tracking-[0.01em]">
          {hero.subtitle}
        </p>
        <div className="flex gap-5 flex-wrap items-stretch pt-2">
          <div className="border border-accent bg-[rgba(20,20,20,0.7)] px-6 py-[18px] flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase">
              Compliant
            </span>
            <span className="font-mono text-[clamp(18px,2.4vw,26px)] tabular-nums text-fg">
              {hero.compliantValue}
            </span>
          </div>
          <div className="border border-line bg-[rgba(20,20,20,0.7)] px-6 py-[18px] flex flex-col gap-2 max-w-[42ch]">
            <span className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Scope
            </span>
            <span className="text-[15px] leading-[1.6] text-muted">
              {hero.scopeText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
