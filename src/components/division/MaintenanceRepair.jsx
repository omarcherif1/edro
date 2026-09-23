import SectionHeader from "./SectionHeader";
import MobileCarousel from "../common/MobileCarousel";

function GroupCard({ groupTitle, groupItems, gi }) {
  return (
    <div className="border border-line bg-panel p-7 flex flex-col gap-[18px] h-full transition-colors duration-150 hover:border-accent">
      <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase tabular-nums">
        {String(gi + 1).padStart(2, "0")}
      </span>
      <span className="text-[21px] font-medium leading-[1.25] text-fg">
        {groupTitle}
      </span>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-8 border-t border-line">
        {groupItems.map((label) => (
          <div
            key={label}
            className="flex gap-3 items-baseline py-[11px] border-b border-line"
          >
            <span className="w-1.5 h-[7px] bg-muted-2 shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            <span className="text-[14px] leading-[1.5] text-muted">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MaintenanceRepair({ num, title, intro, items }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader num={num} title={title} intro={intro} />

        <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 items-start">
          {items.map(([groupTitle, groupItems], gi) => (
            <GroupCard
              key={groupTitle}
              groupTitle={groupTitle}
              groupItems={groupItems}
              gi={gi}
            />
          ))}
        </div>

        <MobileCarousel
          items={items.map(([groupTitle, groupItems], gi) => (
            <GroupCard
              key={groupTitle}
              groupTitle={groupTitle}
              groupItems={groupItems}
              gi={gi}
            />
          ))}
        />
      </div>
    </section>
  );
}
