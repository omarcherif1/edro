import SectionHeader from "../division/SectionHeader";

export default function Certifications({ certs }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num="03" title="Certifications" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {certs.map(([code, label]) => (
            <div
              key={code}
              className="border border-line bg-panel p-8 flex flex-col gap-3.5 transition-colors duration-150 hover:border-accent"
            >
              <span className="font-mono text-[22px] tabular-nums text-fg">
                {code}
              </span>
              <span className="text-[14px] leading-[1.6] text-muted">
                {label}
              </span>
              <span className="font-mono text-[11px] text-muted-2 tabular-nums">
                [ certificate no. · valid to ]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
