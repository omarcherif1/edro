export default function DownloadCTA({ title }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(48px,6vw,88px)]">
        <div className="border border-line bg-panel p-[clamp(28px,4vw,48px)] flex gap-8 items-center flex-wrap">
          <div className="w-16 h-[72px] bg-accent shrink-0 p-px flex [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
            <div className="flex-1 bg-panel flex items-center justify-center [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
              <span className="font-mono text-[10px] text-accent tracking-[0.08em]">
                PDF
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 min-w-[240px] flex-1 basis-[320px]">
            <span className="text-[clamp(19px,2.2vw,26px)] font-medium leading-[1.3] text-fg">
              {title}
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              PDF · EN / AR · [ file size ] · [ revision ]
            </span>
          </div>
          <a
            href="#contact"
            className="h-12 px-[26px] border border-fg text-fg flex items-center font-mono text-[12px] tracking-[0.12em] uppercase shrink-0 hover:bg-fg hover:text-ink transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
