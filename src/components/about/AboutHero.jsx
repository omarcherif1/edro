import workshopPhoto from "../../assets/workshop.jpg";

export default function AboutHero({ hero }) {
  return (
    <section className="border-b border-line bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(48px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-12 items-center">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            <span className="w-[7px] h-2 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            <span className="text-fg">{hero.crumb}</span>
          </div>
          <h1 className="font-serif font-normal text-[clamp(40px,6vw,84px)] leading-[1.03] tracking-[-0.02em] m-0 text-fg">
            {hero.title}
          </h1>
          <p className="text-[clamp(17px,1.9vw,22px)] font-light leading-[1.65] text-fg max-w-[52ch] m-0 text-pretty">
            {hero.intro}
          </p>
          <div className="flex flex-col gap-2.5 border-t border-line pt-6">
            <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
              Head office
            </span>
            <span className="text-[16px] leading-[1.7] text-fg">
              Bu Atni — Al-Silini
              <br />
              Benghazi, Libya
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[min(380px,100%)] aspect-[1/1.12] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] overflow-hidden">
            <img
              src={workshopPhoto}
              alt={hero.photoLabel}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
