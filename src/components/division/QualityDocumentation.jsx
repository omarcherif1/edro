import SectionHeader from "./SectionHeader";

export default function QualityDocumentation({ num, dossiers }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader
          num={num}
          title="Quality Documentation"
          intro="Every stage is recorded. The dossier is issued to the client at handover."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-8 items-start">
          {dossiers.map(([title, items]) => (
            <div
              key={title}
              className="border border-line bg-ink p-[clamp(24px,3vw,40px)] flex flex-col gap-[22px]"
            >
              <div className="flex items-center gap-3">
                <span className="w-[9px] h-2.5 bg-accent shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                <span className="font-serif text-[clamp(24px,2.6vw,32px)] leading-[1.15] text-fg">
                  {title}
                </span>
              </div>
              <div className="flex flex-col border-t border-line">
                {items.map((label, i) => (
                  <div
                    key={label}
                    className="flex gap-4 items-baseline py-3.5 border-b border-line"
                  >
                    <span className="font-mono text-[11px] text-muted-2 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-[1.5] text-fg">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
