import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../lib/LanguageContext";
import { DIVISION_FILTERS, PROJECTS } from "../data/projects";

function divLabel(div) {
  return DIVISION_FILTERS.find((d) => d[0] === div)?.[1] ?? "";
}
function divShort(div) {
  return DIVISION_FILTERS.find((d) => d[0] === div)?.[2] ?? "";
}

export default function Projects() {
  const { dir } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);

  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.div === filter);
  const openProject = openId ? PROJECTS.find((p) => p.id === openId) : null;

  return (
    <div dir={dir} className="bg-ink text-fg font-sans min-h-screen flex flex-col">
      <Header />

      <section className="border-b border-line bg-ink">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(48px,7vw,96px)] flex flex-col gap-8">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            <span className="w-[7px] h-2 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            <span className="text-fg">Projects</span>
          </div>
          <h1 className="font-serif font-normal text-[clamp(40px,6vw,84px)] leading-[1.03] tracking-[-0.02em] m-0 text-fg">
            Project References
          </h1>
          <p className="text-[16px] leading-[1.65] text-muted max-w-[62ch] m-0">
            Executed work by division. A full reference list with client
            contacts is issued on request as part of the prequalification
            pack.
          </p>
          <div className="flex flex-wrap mt-2">
            {DIVISION_FILTERS.map(([key, label]) => {
              const count =
                key === "all"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.div === key).length;
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setFilter(key);
                    setOpenId(null);
                  }}
                  className={`px-6 py-4 cursor-pointer border border-line border-s-0 flex items-center gap-2.5 transition-colors duration-150 ${
                    active ? "bg-accent" : "bg-ink"
                  }`}
                >
                  <span
                    className={`font-mono text-[12px] tracking-[0.1em] uppercase ${
                      active ? "text-white" : "text-muted"
                    }`}
                  >
                    {label}
                  </span>
                  <span
                    className={`font-mono text-[11px] tabular-nums ${
                      active ? "text-white/[78%]" : "text-muted-2"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {openProject ? (
        <section className="border-b border-line bg-ink flex-1">
          <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(32px,4vw,56px)] pb-[clamp(56px,8vw,112px)] flex flex-col gap-9">
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="flex items-center gap-3 cursor-pointer self-start"
            >
              <span className="font-mono text-[14px] text-accent">&#8592;</span>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
                Back to projects
              </span>
            </button>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-10 items-start">
              <div className="flex flex-col gap-3">
                <div className="aspect-[3/2] border border-line bg-[repeating-linear-gradient(135deg,#1c1c1c_0_8px,#151515_8px_16px)] flex items-end p-[18px]">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-muted-2 uppercase">
                    [ photo 1 — main view ]
                  </span>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-3">
                  {[2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`aspect-square border border-line flex items-end p-2 ${
                        n % 2 === 0
                          ? "bg-[repeating-linear-gradient(135deg,#191919_0_8px,#131313_8px_16px)]"
                          : "bg-[repeating-linear-gradient(135deg,#1c1c1c_0_8px,#151515_8px_16px)]"
                      }`}
                    >
                      <span className="font-mono text-[8px] text-muted-2">
                        [ {n} ]
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[26px]">
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                  {divLabel(openProject.div)}
                </span>
                <h2 className="font-serif font-normal text-[clamp(30px,3.6vw,46px)] leading-[1.1] tracking-[-0.01em] m-0 text-fg">
                  {openProject.name}
                </h2>
                <div className="flex flex-col border-t border-line">
                  {[
                    ["Client", "[ client name — to be confirmed ]"],
                    ["Location", "[ location — to be confirmed ]"],
                    ["Year", "[ year ]"],
                    ["Division", divLabel(openProject.div)],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[140px_1fr] gap-5 py-3.5 border-b border-line"
                    >
                      <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                        {label}
                      </span>
                      <span className="text-[15px] text-fg">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-fg uppercase">
                    Scope of work
                  </span>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 border-t border-line">
                    {openProject.scope.map((label) => (
                      <div
                        key={label}
                        className="flex gap-3.5 items-baseline py-3 border-b border-line"
                      >
                        <span className="w-[7px] h-2 bg-accent shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                        <span className="text-[14px] leading-[1.5] text-fg">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {openProject.codes.map((code) => (
                    <span
                      key={code}
                      className="border border-line px-3 py-1.5 font-mono text-[12px] tabular-nums text-muted"
                    >
                      {code}
                    </span>
                  ))}
                </div>
                <a
                  href="/#contact"
                  className="h-12 px-[26px] border border-fg text-fg inline-flex items-center self-start font-mono text-[12px] tracking-[0.12em] uppercase hover:bg-fg hover:text-ink transition-colors"
                >
                  Request similar scope
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : list.length > 0 ? (
        <section className="border-b border-line bg-ink flex-1">
          <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(40px,5vw,64px)] pb-[clamp(56px,8vw,112px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6 items-start">
            {list.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setOpenId(p.id)}
                className="text-start border border-line bg-panel flex flex-col cursor-pointer transition-colors duration-150 hover:border-accent"
              >
                <div className="aspect-[4/3] bg-[repeating-linear-gradient(135deg,#1c1c1c_0_8px,#151515_8px_16px)] flex items-end justify-between p-4">
                  <span className="font-mono text-[9px] tracking-[0.14em] text-muted-2 uppercase">
                    [ photo 1 / {p.shots} ]
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.14em] text-muted-2 uppercase">
                    {divShort(p.div)}
                  </span>
                </div>
                <div className="p-[26px] flex flex-col gap-3.5">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                    {divLabel(p.div)}
                  </span>
                  <span className="text-[20px] font-medium leading-[1.3]">
                    {p.name}
                  </span>
                  <div className="flex flex-col gap-2 border-t border-line pt-3.5">
                    {[
                      ["Client", "[ client name ]"],
                      ["Location", "[ location ]"],
                      ["Year", "[ year ]"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex gap-4 justify-between">
                        <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                          {label}
                        </span>
                        <span className="text-[13px] text-fg text-end">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-line px-[26px] py-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase">
                    Open project
                  </span>
                  <span className="font-mono text-[14px] text-accent">
                    &#8594;
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="border-b border-line bg-ink flex-1">
          <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,112px)]">
            <div className="border border-line bg-panel p-[clamp(32px,5vw,72px)] flex flex-col items-center gap-6 text-center">
              <div className="w-14 h-[62px] bg-line [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] p-px flex">
                <div className="flex-1 bg-panel [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              </div>
              <span className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.2] max-w-[28ch] text-fg">
                Reference records for {divLabel(filter)} are being compiled
              </span>
              <span className="text-[15px] leading-[1.7] text-muted max-w-[52ch]">
                Executed work in this division is documented in the project
                dossiers. Client names and locations are released once
                written approval is in place.
              </span>
              <div className="flex gap-4 flex-wrap justify-center pt-2">
                <a
                  href="/#contact"
                  className="h-12 px-[26px] bg-accent text-white flex items-center font-mono text-[12px] tracking-[0.12em] uppercase hover:bg-accent-hover hover:text-white transition-colors"
                >
                  Request the reference list
                </a>
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className="h-12 px-[26px] border border-fg text-fg flex items-center font-mono text-[12px] tracking-[0.12em] uppercase cursor-pointer hover:bg-fg hover:text-ink transition-colors"
                >
                  View all divisions
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
