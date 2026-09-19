import SectionHeader from "../SectionHeader";

export default function Software({ data }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num={data.sectionNum} title={data.title} intro={data.intro} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {data.tools.map(([name, desc]) => (
            <div
              key={name}
              className="border border-line bg-ink p-[26px] flex flex-col gap-3 transition-colors duration-150 hover:border-accent"
            >
              <span className="font-mono text-[16px] tracking-[0.02em] text-fg">
                {name}
              </span>
              <span className="text-[13px] leading-[1.6] text-muted">
                {desc}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-0.5 bg-accent" />
          <span className="text-[14px] text-muted">{data.note}</span>
          <div className="flex-1 h-px bg-line" />
        </div>
      </div>
    </section>
  );
}
