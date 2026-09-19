export default function SectionHeader({ num, title, intro }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
        Section {num}
      </span>
      <h2 className="font-serif font-normal text-[clamp(32px,4.2vw,56px)] leading-[1.1] tracking-[-0.01em] m-0 text-fg">
        {title}
      </h2>
      {intro && (
        <p className="text-[16px] leading-[1.65] text-muted max-w-[62ch] m-0">
          {intro}
        </p>
      )}
    </div>
  );
}
