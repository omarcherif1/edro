import SectionHeader from "./SectionHeader";

const BG = { ink: "bg-ink", panel: "bg-panel" };

export default function CodesStandards({ num, standards, bg = "ink" }) {
  return (
    <section className={`border-b border-line ${BG[bg]}`}>
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num={num} title="Applicable Codes & Standards" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
          {standards.map(([code, label]) => (
            <div
              key={code}
              className="border border-line bg-panel px-5 py-[18px] flex flex-col gap-1.5 transition-colors duration-150 hover:border-accent"
            >
              <span className="font-mono text-[17px] tabular-nums text-fg">
                {code}
              </span>
              <span className="text-[12px] leading-[1.5] text-muted">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
