import SectionHeader from "../division/SectionHeader";

export default function Workshop({ equipment }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader
          num="03"
          title="Workshop & Equipment"
          intro="Fabrication, blasting and coating are carried out in our own facility in Benghazi before delivery to site."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {equipment.map(([name, note, slot]) => (
            <div
              key={name}
              className="border border-line bg-ink p-7 flex flex-col gap-4 transition-colors duration-150 hover:border-accent"
            >
              <span className="w-[9px] h-2.5 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="text-[19px] font-medium leading-[1.3]">
                {name}
              </span>
              <span className="text-[13px] leading-[1.6] text-muted">
                {note}
              </span>
              <div className="border border-dashed border-line px-3.5 py-3 flex flex-col gap-1 mt-auto">
                <span className="font-mono text-[9px] tracking-[0.18em] text-muted-2 uppercase">
                  Capacity
                </span>
                <span className="font-mono text-[12px] text-muted tabular-nums">
                  [ {slot} — to be confirmed ]
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-0.5 bg-accent" />
          <span className="text-[14px] text-muted">
            Machine list with capacities is issued on request as part of the
            prequalification pack.
          </span>
          <div className="flex-1 h-px bg-line min-w-[20px]" />
        </div>
      </div>
    </section>
  );
}
