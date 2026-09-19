import { PHASES } from "../../data/home";

export default function Execution() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            Execution
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4.2vw,56px)] leading-[1.1] tracking-[-0.01em] m-0 text-fg">
            End-to-End Project Execution
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-s border-t border-line">
          {PHASES.map((p) => (
            <div
              key={p.n}
              className="p-[22px_18px] flex flex-col gap-3.5 border-e border-b border-line min-h-[112px] transition-colors duration-150 hover:bg-panel-3"
            >
              <span className="font-mono text-[12px] tabular-nums text-accent">
                {p.n}
              </span>
              <span className="text-[15px] font-medium leading-[1.35] text-fg">
                {p.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[clamp(17px,2vw,22px)] font-light leading-[1.6] text-fg max-w-[58ch] m-0 text-pretty">
          An integrated system from engineering to commissioning, managed by
          one team with unified responsibility for quality execution.
        </p>
      </div>
    </section>
  );
}
