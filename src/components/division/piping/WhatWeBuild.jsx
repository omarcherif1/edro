import SectionHeader from "../SectionHeader";
import MobileCarousel from "../../common/MobileCarousel";

function FamilyCard({ fam }) {
  return (
    <div
      className={`border bg-panel p-8 flex flex-col gap-5 h-full transition-colors duration-150 ${
        fam.highlighted ? "border-accent" : "border-line hover:border-accent"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`w-[9px] h-2.5 shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] ${
            fam.highlighted ? "bg-accent" : "bg-muted-2"
          }`}
        />
        <span
          className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
            fam.highlighted ? "text-accent" : "text-muted"
          }`}
        >
          {fam.badge}
        </span>
      </div>
      <span className="text-[24px] font-medium leading-[1.25]">{fam.title}</span>
      <span className="text-[14px] leading-[1.7] text-muted">{fam.desc}</span>
      <div className="flex flex-col border-t border-line">
        {fam.items.map((item) => (
          <div
            key={item}
            className="flex gap-3 items-baseline py-[11px] border-b border-line"
          >
            <span
              className={`shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] ${
                fam.highlighted ? "w-[7px] h-2 bg-accent" : "w-1.5 h-[7px] bg-muted-2"
              }`}
            />
            <span
              className={`text-[14px] leading-[1.5] ${fam.highlighted ? "text-fg" : "text-muted"}`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaterialsCard({ materials }) {
  return (
    <div className="border border-line bg-panel p-8 flex flex-col gap-5 h-full">
      <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
        {materials.badge}
      </span>
      <span className="text-[24px] font-medium leading-[1.25]">
        {materials.title}
      </span>
      <div className="flex flex-col border-t border-line">
        {materials.rows.map(([name, spec]) => (
          <div
            key={name}
            className="flex gap-4 items-baseline py-3.5 border-b border-line justify-between"
          >
            <span className="text-[15px] text-fg">{name}</span>
            <span className="font-mono text-[11px] text-muted text-end">
              {spec}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhatWeBuild({ data }) {
  const carouselItems = [
    ...data.families.map((fam) => <FamilyCard key={fam.title} fam={fam} />),
    <MaterialsCard key="materials" materials={data.materials} />,
  ];

  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-12">
        <SectionHeader num={data.sectionNum} title={data.title} intro={data.intro} />

        <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6 items-start">
          {data.families.map((fam) => (
            <FamilyCard key={fam.title} fam={fam} />
          ))}
          <MaterialsCard materials={data.materials} />
        </div>

        <MobileCarousel items={carouselItems} />
      </div>
    </section>
  );
}
