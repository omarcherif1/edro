import SectionHeader from "../SectionHeader";

export default function Comparison({ data }) {
  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num={data.sectionNum} title={data.title} intro={data.intro} />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-8">
          <div className="border border-accent bg-ink p-7 flex flex-col gap-5">
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
              Inside the site
            </span>
            <span className="font-serif text-[clamp(24px,2.6vw,32px)] leading-[1.15] text-fg">
              Process Piping
            </span>
            <svg viewBox="0 0 420 170" className="w-full h-auto block">
              <rect x="1" y="1" width="418" height="168" fill="none" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="6 6" />
              <text x="12" y="22" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="11">PLANT BATTERY LIMIT</text>
              <line x1="40" y1="150" x2="40" y2="60" stroke="#9A9A9A" strokeWidth="3" />
              <line x1="180" y1="150" x2="180" y2="60" stroke="#9A9A9A" strokeWidth="3" />
              <line x1="320" y1="150" x2="320" y2="60" stroke="#9A9A9A" strokeWidth="3" />
              <line x1="30" y1="70" x2="330" y2="70" stroke="#9A9A9A" strokeWidth="2" />
              <line x1="30" y1="88" x2="330" y2="88" stroke="#9A9A9A" strokeWidth="2" />
              <line x1="30" y1="106" x2="330" y2="106" stroke="#9A9A9A" strokeWidth="2" />
              <path d="M330 70 L370 70 L370 130" fill="none" stroke="#E32219" strokeWidth="3" />
              <circle cx="370" cy="142" r="12" fill="none" stroke="#E32219" strokeWidth="2" />
              <path d="M362 118 L378 118 M370 118 L370 112" fill="none" stroke="#E32219" strokeWidth="2" />
              <line x1="20" y1="150" x2="400" y2="150" stroke="#2A2A2A" strokeWidth="1" />
              <text x="20" y="166" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="11">RACK · SUPPORTS · EQUIPMENT TIE-IN</text>
            </svg>
          </div>

          <div className="border border-line bg-ink p-7 flex flex-col gap-5">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
              Between sites
            </span>
            <span className="font-serif text-[clamp(24px,2.6vw,32px)] leading-[1.15] text-fg">
              Pipeline
            </span>
            <svg viewBox="0 0 420 170" className="w-full h-auto block">
              <text x="12" y="22" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="11">ROUTE — KILOMETRES</text>
              <line x1="10" y1="96" x2="410" y2="96" stroke="#2A2A2A" strokeWidth="1" />
              <path d="M10 70 L120 70 L170 110 L280 110 L330 70 L410 70" fill="none" stroke="#9A9A9A" strokeWidth="4" />
              <line x1="120" y1="70" x2="120" y2="52" stroke="#2A2A2A" strokeWidth="1" />
              <line x1="330" y1="70" x2="330" y2="52" stroke="#2A2A2A" strokeWidth="1" />
              <rect x="106" y="34" width="28" height="18" fill="none" stroke="#E32219" strokeWidth="2" />
              <rect x="316" y="34" width="28" height="18" fill="none" stroke="#E32219" strokeWidth="2" />
              <text x="96" y="28" fill="#E32219" fontFamily="'IBM Plex Mono', monospace" fontSize="11">VALVE STN</text>
              <text x="300" y="28" fill="#E32219" fontFamily="'IBM Plex Mono', monospace" fontSize="11">VALVE STN</text>
              <path d="M150 130 L290 130" fill="none" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="4 4" />
              <text x="150" y="150" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="11">BURIED SECTION</text>
              <text x="14" y="64" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="11">ABOVE GROUND</text>
            </svg>
          </div>
        </div>

        <div className="border border-line bg-ink p-[clamp(24px,3vw,40px)] overflow-x-auto">
          <div className="grid grid-cols-[minmax(120px,1fr)_minmax(120px,1.2fr)_minmax(120px,1.2fr)] gap-6 pb-3.5 border-b border-line min-w-[560px]">
            <span className="font-mono text-[11px] tracking-[0.14em] text-muted-2 uppercase">
              Criterion
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
              Process piping
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-fg uppercase">
              Pipeline
            </span>
          </div>
          {data.rows.map(([criterion, process, pipeline]) => (
            <div
              key={criterion}
              className="grid grid-cols-[minmax(120px,1fr)_minmax(120px,1.2fr)_minmax(120px,1.2fr)] gap-6 py-[15px] border-b border-line items-baseline min-w-[560px]"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                {criterion}
              </span>
              <span className="text-[15px] leading-[1.5] text-fg">{process}</span>
              <span className="text-[15px] leading-[1.5] text-fg">{pipeline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
