import SectionHeader from "../division/SectionHeader";
import NumberedGrid from "../common/NumberedGrid";

export default function OrgStructure({ org }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-10">
        <SectionHeader
          num="02"
          title="Organizational Structure"
          intro="Twelve defined functions. Each one is a named responsibility on the project organisation chart issued with the contract."
        />
        <NumberedGrid items={org} />
      </div>
    </section>
  );
}
