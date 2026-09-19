export default function NumberedGrid({ items, minWidth = 240 }) {
  return (
    <div
      className="grid border-s border-t border-line"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))` }}
    >
      {items.map(([name, note], i) => (
        <div
          key={name}
          className="p-[24px_22px] flex flex-col gap-3 border-e border-b border-line min-h-[148px] transition-colors duration-150 hover:bg-panel"
        >
          <span className="font-mono text-[11px] text-accent tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[17px] font-medium leading-[1.3]">{name}</span>
          <span className="text-[13px] leading-[1.6] text-muted">{note}</span>
        </div>
      ))}
    </div>
  );
}
