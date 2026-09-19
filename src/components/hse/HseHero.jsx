export default function HseHero({ hero }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,6vw,88px)] flex flex-col gap-7">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
          <span className="w-[7px] h-2 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
          <span className="text-fg">{hero.crumb}</span>
        </div>
        <h1 className="font-serif font-normal text-[clamp(40px,6vw,84px)] leading-[1.03] tracking-[-0.02em] m-0 max-w-[22ch] text-fg">
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
