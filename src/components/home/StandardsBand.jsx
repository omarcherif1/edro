import { STANDARDS } from "../../data/home";

export default function StandardsBand() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(28px,3.5vw,44px)] flex flex-col gap-6">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            Compliant with
          </span>
          <div className="flex-1 h-px bg-line min-w-[40px]" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-s border-t border-line">
          {STANDARDS.map((s) => (
            <div
              key={s.code}
              className="p-[20px_18px] flex flex-col gap-1.5 border-e border-b border-line transition-colors duration-150 hover:bg-panel-3"
            >
              <span className="font-mono text-[17px] tabular-nums text-fg">
                {s.code}
              </span>
              <span className="text-[12px] leading-[1.5] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
