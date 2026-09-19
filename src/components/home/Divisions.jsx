import { Link } from "react-router-dom";
import { DIVISIONS } from "../../data/home";
import storageTankPhoto from "../../assets/edro/storagetank3.jpeg";
import pipelinePhoto from "../../assets/edro/piping5.png";
import steelStructurePhoto from "../../assets/edro/steelstructure2.jpeg";

const PHOTOS = {
  "Storage Tanks": storageTankPhoto,
  "Piping & Pipeline": pipelinePhoto,
  "Steel Structures": steelStructurePhoto,
};

export default function Divisions() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            Divisions
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4.2vw,56px)] leading-[1.1] tracking-[-0.01em] m-0 text-fg">
            Three Divisions, One Contract
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 items-stretch">
          {DIVISIONS.map((d) => (
            <Link
              key={d.title}
              to={d.href}
              className="group border border-line bg-panel flex flex-col text-fg transition-colors duration-150 hover:border-accent hover:text-fg"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={PHOTOS[d.title]}
                  alt={d.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-7 flex flex-col gap-3.5 flex-1">
                <span className="font-serif text-[30px] leading-[1.1]">
                  {d.title}
                </span>
                <span className="text-[14px] leading-[1.65] text-muted">
                  {d.shortDesc}
                </span>
                <div className="flex gap-2 flex-wrap mt-auto pt-2.5">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line px-2.5 py-1.5 font-mono text-[11px] tabular-nums text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-line px-7 py-4 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.12em] uppercase">
                  View division
                </span>
                <span className="font-mono text-[14px] text-accent">
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
