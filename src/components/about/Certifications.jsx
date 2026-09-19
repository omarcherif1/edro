import SectionHeader from "../division/SectionHeader";

export default function Certifications({ certs }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num="04" title="Certifications" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {certs.map(([code, label]) => (
            <div
              key={code}
              className="border border-line bg-panel flex flex-col transition-colors duration-150 hover:border-accent"
            >
              <div className="aspect-[1/1.35] bg-[repeating-linear-gradient(135deg,#1c1c1c_0_8px,#151515_8px_16px)] flex items-center justify-center p-6">
                <span className="font-mono text-[10px] tracking-[0.14em] text-muted-2 text-center uppercase">
                  [ certificate scan ]
                </span>
              </div>
              <div className="p-6 flex flex-col gap-2 border-t border-line">
                <span className="font-mono text-[20px] tabular-nums text-fg">
                  {code}
                </span>
                <span className="text-[14px] leading-[1.6] text-muted">
                  {label}
                </span>
                <span className="font-mono text-[11px] text-muted-2 tabular-nums">
                  [ certificate no. · valid to ]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
