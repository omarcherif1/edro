import SectionHeader from "../SectionHeader";

export default function WhatWeBuild({ data }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-12">
        <SectionHeader num={data.sectionNum} title={data.title} intro={data.intro} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 items-stretch">
          {data.items.map((item) => (
            <div
              key={item.title}
              className="border border-line bg-panel p-8 flex flex-col gap-4 transition-colors duration-150 hover:border-accent"
            >
              <span className="w-[9px] h-2.5 bg-muted-2 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="text-[22px] font-medium leading-[1.25]">
                {item.title}
              </span>
              <span className="text-[14px] leading-[1.7] text-muted">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
