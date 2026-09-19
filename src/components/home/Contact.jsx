const HOURS = [
  { days: "Sunday — Thursday", time: "08:00 — 17:00", closed: false },
  { days: "Friday — Saturday", time: "Closed", closed: true },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] flex flex-col gap-12">
        <div className="flex flex-col gap-6 max-w-[640px]">
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            Contact
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4.2vw,56px)] leading-[1.05] tracking-[-0.01em] m-0 text-fg">
            Talk to our
            
            engineering team
          </h2>
         
          <div className="flex items-center gap-3.5 max-w-[320px]">
            <div className="w-12 h-0.5 bg-accent" />
            <div className="flex-1 h-px bg-line" />
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6 items-stretch">
          <div className="border border-line bg-ink p-[clamp(24px,3vw,40px)] flex flex-col">
            <div className="flex flex-col gap-2 pb-5 border-b border-line">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                Head office
              </span>
              <span className="text-[16px] leading-[1.7] text-fg">
                Bu Atni — Al-Silini
                <br />
                Benghazi, Libya
              </span>
            </div>
            <div className="flex flex-col gap-2 py-5 border-b border-line">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                Telephone
              </span>
              <span className="font-mono text-[16px] text-fg tabular-nums">
                +218 0945125211
              </span>
              <span className="font-mono text-[16px] text-fg tabular-nums">
                +218 0931962495
              </span>
            </div>
            <div className="flex flex-col gap-2 py-5 border-b border-line">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                Email
              </span>
              <span className="font-mono text-[16px] text-fg">
                [ email — to be confirmed ]
              </span>
            </div>
            <div className="flex flex-col gap-3 pt-5">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                Working hours
              </span>
              {HOURS.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between gap-4 pb-2.5 border-b border-line last:border-b-0 last:pb-0"
                >
                  <span
                    className={`text-[15px] ${h.closed ? "text-muted" : "text-fg font-medium"}`}
                  >
                    {h.days}
                  </span>
                  <span
                    className={`font-mono text-[14px] tabular-nums ${h.closed ? "text-muted" : "text-fg font-medium"}`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative border border-line min-h-[320px] flex flex-col overflow-hidden">
            <iframe
              title="ERDO Libya — Head office map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216355.79898351635!2d19.970188872334138!3d32.08116482749769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13831c55479eee2b%3A0xe497dfce76d293e0!2sBenghazi%2C%20Libye!5e0!3m2!1sfr!2stn!4v1787781777178!5m2!1sfr!2stn"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
            <div className="relative mt-auto p-5 pointer-events-none">
              <div className="inline-flex items-center gap-2.5 border border-line bg-ink/90 px-4 py-2.5">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-mono text-[11px] tracking-[0.08em] text-fg uppercase">
                  ERDO Libya — Head office
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
