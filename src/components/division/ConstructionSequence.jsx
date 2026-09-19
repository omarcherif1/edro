import { useState } from "react";
import SectionHeader from "./SectionHeader";

const pad = (n) => String(n + 1).padStart(2, "0");

export default function ConstructionSequence({ num, steps }) {
  const [active, setActive] = useState(0);
  const [name, tasks] = steps[active];

  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader
          num={num}
          title="Construction Sequence"
          intro={`${steps.length === 7 ? "Seven" : "Eight"} controlled stages from engineering to mechanical completion. Select a stage to see its activities.`}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-s border-t border-line">
          {steps.map(([stepName], i) => (
            <button
              key={stepName}
              type="button"
              onClick={() => setActive(i)}
              className={`text-start p-[20px_18px] flex flex-col gap-3 border-e border-b border-line min-h-[116px] cursor-pointer ${
                i === active ? "bg-panel-3 shadow-[inset_0_2px_0_0_#e32219]" : "bg-panel"
              }`}
            >
              <span
                className={`font-mono text-[12px] tabular-nums ${i === active ? "text-accent" : "text-muted-2"}`}
              >
                {pad(i)}
              </span>
              <span
                className={`text-[14px] leading-[1.4] font-medium ${i === active ? "text-fg" : "text-muted"}`}
              >
                {stepName}
              </span>
            </button>
          ))}
        </div>

        <div className="border border-line bg-ink p-[clamp(24px,4vw,44px)] flex flex-col gap-7">
          <div className="flex gap-5 items-baseline flex-wrap">
            <span className="font-mono text-[clamp(28px,4vw,44px)] text-accent tabular-nums leading-none">
              {pad(active)}
            </span>
            <span className="font-serif text-[clamp(26px,3.4vw,40px)] leading-[1.1] text-fg">
              {name}
            </span>
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase ms-auto">
              {pad(tasks.length - 1)} activities
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-8">
            {tasks.map((task) => (
              <div
                key={task}
                className="flex gap-3.5 items-baseline py-3 border-b border-line"
              >
                <span className="w-[7px] h-2 bg-accent shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                <span className="text-[15px] leading-[1.5] text-fg">
                  {task}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
