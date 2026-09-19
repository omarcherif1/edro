export default function Commitment({ data }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(40px,5vw,72px)]">
        <div className="border border-accent bg-ink p-[clamp(28px,4vw,52px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 items-center">
          <div className="flex flex-col gap-[18px]">
            <span className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase">
              {data.badge}
            </span>
            <span className="font-serif text-[clamp(24px,3vw,38px)] leading-[1.2] text-fg text-pretty">
              {data.headline}
            </span>
          </div>
          <div className="flex flex-col gap-3.5">
            <span className="text-[16px] leading-[1.7] text-muted">
              {data.body}
            </span>
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-0.5 bg-accent" />
              <div className="flex-1 h-px bg-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
