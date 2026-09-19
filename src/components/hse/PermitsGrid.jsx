import SectionHeader from "../division/SectionHeader";
import NumberedGrid from "../common/NumberedGrid";

export default function PermitsGrid({ permits }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader
          num="01"
          title="Permits & Procedures"
          intro="Twelve controlled documents. Each one is raised, approved and closed out on the project record."
        />
        <NumberedGrid items={permits} />
      </div>
    </section>
  );
}
