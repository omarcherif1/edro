import SectionHeader from "../division/SectionHeader";

export default function QaqcChain({ qaqc }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader
          num="02"
          title="QA/QC System"
          intro="Six linked stages. Nothing advances to the next stage until the previous one is signed off."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] border-s border-t border-line">
          {qaqc.map(([name, note], i) => (
            <div
              key={name}
              className="p-[26px_22px] flex flex-col gap-3.5 border-e border-b border-line min-h-[190px] bg-ink transition-colors duration-150 hover:bg-panel"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[12px] text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-line" />
                <span className="w-2 h-[9px] bg-accent shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              </div>
              <span className="text-[17px] font-medium leading-[1.3]">
                {name}
              </span>
              <span className="text-[13px] leading-[1.6] text-muted">
                {note}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[15px] leading-[1.7] text-muted max-w-[62ch] m-0">
          Records from every stage are compiled in the QA/QC dossier issued at
          handover.
        </p>
      </div>
    </section>
  );
}
