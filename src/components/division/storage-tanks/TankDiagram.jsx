import { useState } from "react";
import SectionHeader from "../SectionHeader";

const pad = (n) => String(n + 1).padStart(2, "0");

export default function TankDiagram({ data }) {
  const [active, setActive] = useState("roof");

  const parts = data.parts;
  const activeEntry = parts.find((p) => p[0] === active) ?? parts[0];
  const activeIndex = parts.findIndex((p) => p[0] === active);

  const stroke = (key) => (key === active ? "#E32219" : "#9A9A9A");
  const width = (key) => (key === active ? 4 : 2);

  return (
    <section className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num={data.sectionNum} title={data.title} intro={data.intro} />

        <div className="flex flex-wrap gap-8 items-stretch">
          <div className="border border-line bg-ink p-4 min-w-[min(300px,100%)] flex-[3_1_620px]">
            <svg
              viewBox="0 0 900 520"
              className="w-full h-auto block overflow-visible"
              role="img"
              aria-label="Sectional view of an external floating roof tank"
            >
              <rect x="0" y="0" width="900" height="520" fill="#0A0A0A" />
              <line x1="120" y1="470" x2="800" y2="470" stroke="#2A2A2A" strokeWidth="1" />
              <line x1="140" y1="452" x2="780" y2="452" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="3 5" />
              <text x="124" y="490" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="18">
                FOUNDATION / RING WALL
              </text>

              <line x1="200" y1="300" x2="700" y2="300" stroke="#2A2A2A" strokeWidth="1" strokeDasharray="4 6" />
              <text x="712" y="304" fill="#5A5A5A" fontFamily="'IBM Plex Mono', monospace" fontSize="18">
                PRODUCT LEVEL
              </text>

              <g onMouseEnter={() => setActive("shell")} onClick={() => setActive("shell")} className="cursor-pointer">
                <line x1="200" y1="140" x2="200" y2="440" stroke="transparent" strokeWidth="22" />
                <line x1="700" y1="140" x2="700" y2="440" stroke="transparent" strokeWidth="22" />
                <line x1="200" y1="140" x2="200" y2="440" stroke={stroke("shell")} strokeWidth={width("shell")} />
                <line x1="700" y1="140" x2="700" y2="440" stroke={stroke("shell")} strokeWidth={width("shell")} />
                <line x1="200" y1="240" x2="700" y2="240" stroke="#1C1C1C" strokeWidth="1" />
                <line x1="200" y1="340" x2="700" y2="340" stroke="#1C1C1C" strokeWidth="1" />
                <text x="210" y="392" fill={stroke("shell")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">01</text>
              </g>

              <g onMouseEnter={() => setActive("annular")} onClick={() => setActive("annular")} className="cursor-pointer">
                <rect x="180" y="432" width="70" height="16" fill="transparent" />
                <rect x="650" y="432" width="70" height="16" fill="transparent" />
                <rect x="188" y="436" width="58" height="7" fill={stroke("annular")} />
                <rect x="654" y="436" width="58" height="7" fill={stroke("annular")} />
                <text x="120" y="432" fill={stroke("annular")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">02</text>
              </g>

              <g onMouseEnter={() => setActive("bottom")} onClick={() => setActive("bottom")} className="cursor-pointer">
                <rect x="246" y="428" width="408" height="20" fill="transparent" />
                <rect x="246" y="437" width="408" height="5" fill={stroke("bottom")} />
                <text x="440" y="466" fill={stroke("bottom")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">03</text>
              </g>

              <g onMouseEnter={() => setActive("roof")} onClick={() => setActive("roof")} className="cursor-pointer">
                <rect x="210" y="280" width="480" height="34" fill="transparent" />
                <rect x="212" y="296" width="476" height="7" fill={stroke("roof")} />
                <rect x="212" y="283" width="86" height="20" fill="none" stroke={stroke("roof")} strokeWidth={width("roof")} />
                <rect x="602" y="283" width="86" height="20" fill="none" stroke={stroke("roof")} strokeWidth={width("roof")} />
                <text x="440" y="276" fill={stroke("roof")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">04</text>
              </g>

              <g onMouseEnter={() => setActive("girder")} onClick={() => setActive("girder")} className="cursor-pointer">
                <rect x="150" y="158" width="60" height="26" fill="transparent" />
                <rect x="690" y="158" width="60" height="26" fill="transparent" />
                <path d="M200 168 L164 168 L164 178" fill="none" stroke={stroke("girder")} strokeWidth={width("girder")} />
                <path d="M700 168 L736 168 L736 178" fill="none" stroke={stroke("girder")} strokeWidth={width("girder")} />
                <text x="738" y="160" fill={stroke("girder")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">05</text>
              </g>

              <g onMouseEnter={() => setActive("drain")} onClick={() => setActive("drain")} className="cursor-pointer">
                <path d="M450 300 L450 340 L520 390 L520 437 L700 437" fill="none" stroke="transparent" strokeWidth="20" />
                <path d="M450 300 L450 340 L520 390 L520 437 L700 437" fill="none" stroke={stroke("drain")} strokeWidth={width("drain")} />
                <circle cx="450" cy="340" r="4" fill={stroke("drain")} />
                <circle cx="520" cy="390" r="4" fill={stroke("drain")} />
                <text x="530" y="360" fill={stroke("drain")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">06</text>
              </g>

              <g onMouseEnter={() => setActive("seal")} onClick={() => setActive("seal")} className="cursor-pointer">
                <rect x="188" y="276" width="30" height="34" fill="transparent" />
                <rect x="682" y="276" width="30" height="34" fill="transparent" />
                <path d="M200 286 Q208 280 212 292" fill="none" stroke={stroke("seal")} strokeWidth={width("seal")} />
                <path d="M700 286 Q692 280 688 292" fill="none" stroke={stroke("seal")} strokeWidth={width("seal")} />
                <text x="150" y="290" fill={stroke("seal")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">07</text>
              </g>

              <g onMouseEnter={() => setActive("nozzles")} onClick={() => setActive("nozzles")} className="cursor-pointer">
                <rect x="150" y="396" width="56" height="26" fill="transparent" />
                <rect x="694" y="356" width="56" height="26" fill="transparent" />
                <path d="M200 408 L160 408 M164 400 L164 416" fill="none" stroke={stroke("nozzles")} strokeWidth={width("nozzles")} />
                <path d="M700 368 L740 368 M736 360 L736 376" fill="none" stroke={stroke("nozzles")} strokeWidth={width("nozzles")} />
                <text x="748" y="372" fill={stroke("nozzles")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">08</text>
              </g>

              <g onMouseEnter={() => setActive("stair")} onClick={() => setActive("stair")} className="cursor-pointer">
                <path d="M700 440 L790 160" fill="none" stroke="transparent" strokeWidth="26" />
                <path d="M702 440 L790 168" fill="none" stroke={stroke("stair")} strokeWidth={width("stair")} />
                <path d="M716 440 L804 168" fill="none" stroke={stroke("stair")} strokeWidth="1" />
                <path d="M730 400 L742 400 M742 360 L754 360 M754 320 L766 320 M766 280 L778 280 M778 240 L790 240" fill="none" stroke={stroke("stair")} strokeWidth="1" />
                <text x="806" y="300" fill={stroke("stair")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">09</text>
              </g>

              <g onMouseEnter={() => setActive("rail")} onClick={() => setActive("rail")} className="cursor-pointer">
                <rect x="180" y="96" width="120" height="48" fill="transparent" />
                <rect x="600" y="96" width="120" height="48" fill="transparent" />
                <path d="M200 140 L200 108 M240 140 L240 108 M280 140 L280 108 M196 108 L296 108 M196 122 L296 122" fill="none" stroke={stroke("rail")} strokeWidth={width("rail")} />
                <path d="M700 140 L700 108 M660 140 L660 108 M620 140 L620 108 M604 108 L704 108 M604 122 L704 122" fill="none" stroke={stroke("rail")} strokeWidth={width("rail")} />
                <text x="308" y="112" fill={stroke("rail")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">10</text>
              </g>

              <g onMouseEnter={() => setActive("foam")} onClick={() => setActive("foam")} className="cursor-pointer">
                <rect x="120" y="186" width="86" height="34" fill="transparent" />
                <path d="M200 202 L166 202" fill="none" stroke={stroke("foam")} strokeWidth={width("foam")} />
                <rect x="136" y="192" width="30" height="20" fill="none" stroke={stroke("foam")} strokeWidth={width("foam")} />
                <text x="120" y="184" fill={stroke("foam")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">11</text>
              </g>

              <g onMouseEnter={() => setActive("gauge")} onClick={() => setActive("gauge")} className="cursor-pointer">
                <rect x="404" y="252" width="80" height="46" fill="transparent" />
                <path d="M420 296 L420 264 M456 296 L456 264 M414 264 L462 264" fill="none" stroke={stroke("gauge")} strokeWidth={width("gauge")} />
                <text x="470" y="262" fill={stroke("gauge")} fontFamily="'IBM Plex Mono', monospace" fontSize="22" fontWeight="500">12</text>
              </g>
            </svg>
          </div>

          <div className="flex flex-col gap-6 min-w-[min(280px,100%)] flex-[1_1_320px]">
            <div className="border border-accent bg-ink p-7 flex flex-col gap-3.5 min-h-[200px]">
              <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase tabular-nums">
                {pad(activeIndex < 0 ? 0 : activeIndex)} · Component
              </span>
              <span className="font-serif text-[clamp(26px,3vw,34px)] leading-[1.15] text-fg">
                {activeEntry[1]}
              </span>
              <span className="text-[15px] leading-[1.7] text-muted">
                {activeEntry[2]}
              </span>
            </div>
            <div className="flex flex-col border-s border-t border-line">
              {parts.map(([key, name], i) => (
                <button
                  key={key}
                  type="button"
                  onMouseEnter={() => setActive(key)}
                  onClick={() => setActive(key)}
                  className={`text-start bg-ink px-3.5 py-3 flex items-center gap-2.5 cursor-pointer border-e border-b border-line ${
                    key === active ? "shadow-[inset_2px_0_0_0_#e32219]" : ""
                  }`}
                >
                  <span className="font-mono text-[10px] text-muted-2 tabular-nums">
                    {pad(i)}
                  </span>
                  <span className={`text-[13px] ${key === active ? "text-fg" : "text-muted"}`}>
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
