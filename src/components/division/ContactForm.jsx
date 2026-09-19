export default function ContactForm({ heading, desc, messagePlaceholder, scopeOptions }) {
  return (
    <section id="contact" className="border-b border-line bg-panel">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] py-[clamp(56px,8vw,120px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-12 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="font-serif font-normal text-[clamp(32px,4.2vw,56px)] leading-[1.05] tracking-[-0.01em] m-0 text-fg">
            {heading[0]}
            <br />
            {heading[1]}
          </h2>
          <p className="text-[16px] leading-[1.7] text-muted max-w-[46ch] m-0">
            {desc}
          </p>
          <div className="flex items-center gap-3.5 max-w-[320px]">
            <div className="w-12 h-0.5 bg-accent" />
            <div className="flex-1 h-px bg-line" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              Head office
            </span>
            <span className="text-[15px] leading-[1.7] text-fg">
              Bu Atni — Al-Silini, Benghazi, Libya
            </span>
            <span className="font-mono text-[14px] text-muted tabular-nums">
              [ phone ]
            </span>
            <span className="font-mono text-[14px] text-muted">[ email ]</span>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="border border-line bg-ink p-[clamp(24px,3vw,40px)] flex flex-col gap-[22px]"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                Company
              </span>
              <input
                type="text"
                placeholder="Company name"
                className="h-12 bg-panel border border-line text-fg px-3.5 font-sans text-[15px] outline-none w-full focus:border-fg focus:bg-panel-3"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                Email
              </span>
              <input
                type="text"
                placeholder="name@company.com"
                className="h-12 bg-panel border border-line text-fg px-3.5 font-sans text-[15px] outline-none w-full focus:border-fg focus:bg-panel-3"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Scope
            </span>
            <select className="h-12 bg-panel border border-line text-fg px-3.5 font-sans text-[15px] outline-none w-full">
              {scopeOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
              Message
            </span>
            <textarea
              placeholder={messagePlaceholder}
              className="h-[120px] bg-panel border border-line text-fg p-3.5 font-sans text-[15px] outline-none resize-y w-full focus:border-fg focus:bg-panel-3"
            />
          </label>
          <div className="border border-dashed border-line bg-panel p-[22px] flex flex-col items-center gap-2 transition-colors duration-150 hover:border-accent">
            <span className="text-[14px] text-fg">
              Attach drawings or tender documents
            </span>
            <span className="font-mono text-[11px] text-muted">
              PDF · DWG · XLSX — max 20 MB
            </span>
          </div>
          <button
            type="submit"
            className="h-[52px] bg-accent text-white border-0 font-mono text-[12px] tracking-[0.12em] uppercase cursor-pointer transition-colors duration-100 hover:bg-accent-hover active:bg-accent-active"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  );
}
