import SectionHeader from "../division/SectionHeader";

export default function VisionMission({ vision, mission }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-12">
        <SectionHeader num="01" title="Vision & Mission" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8 items-start">
          <div className="border border-accent bg-ink p-[clamp(28px,3vw,44px)] flex flex-col gap-5">
            <span className="font-mono text-[10px] tracking-[0.22em] text-accent uppercase">
              Vision
            </span>
            <span className="font-serif text-[clamp(24px,2.8vw,34px)] leading-[1.25] text-fg text-pretty">
              {vision}
            </span>
          </div>
          <div className="border border-line bg-ink p-[clamp(28px,3vw,44px)] flex flex-col gap-5">
            <span className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Mission
            </span>
            <div className="flex flex-col border-t border-line">
              {mission.map((label, i) => (
                <div
                  key={label}
                  className="flex gap-4 items-baseline py-[15px] border-b border-line"
                >
                  <span className="font-mono text-[11px] text-accent tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] leading-[1.5] text-fg">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
