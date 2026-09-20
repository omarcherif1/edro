import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DIVISIONS } from "../data/home";
import storageTankPhoto from "../assets/edro/storagetank3.jpeg";
import steelStructurePhoto from "../assets/edro/steelstructure5.png";
import pipelinePhoto from "../assets/edro/piping2.jpeg";

const PHOTO_BG = {
  a: "bg-[repeating-linear-gradient(135deg,#1c1c1c_0_8px,#151515_8px_16px)]",
  b: "bg-[repeating-linear-gradient(135deg,#191919_0_8px,#131313_8px_16px)]",
};

const PHOTOS = {
  "Storage Tanks": storageTankPhoto,
  "Steel Structures": steelStructurePhoto,
  "Piping & Pipeline": pipelinePhoto,
};

export default function Services() {
  return (
    <div className="bg-ink text-fg font-sans min-h-screen flex flex-col">
      <Header />

      <section className="border-b border-line bg-ink">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(56px,8vw,112px)] pb-[clamp(40px,5vw,64px)] flex flex-col gap-7">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted flex-wrap">
            <span className="w-[7px] h-2 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            <span className="text-fg">Divisions</span>
          </div>
          <h1 className="font-serif font-normal text-[clamp(40px,6vw,84px)] leading-[1.03] tracking-[-0.02em] m-0 max-w-[20ch] text-fg">
            Capabilities
          </h1>
          <p className="text-[clamp(17px,1.9vw,22px)] font-light leading-[1.65] text-fg max-w-[60ch] m-0 text-pretty">
            ERDO Libya delivers engineering, fabrication, construction and
            maintenance for oil and gas facilities from its base in
            Benghazi. Work is organised in three divisions, each executed to
            the international code that governs it. One contract, one
            quality system, one point of responsibility.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-ink flex-1">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pb-[clamp(56px,8vw,120px)] flex flex-col gap-7">
          {DIVISIONS.map((d) => (
            <Link
              key={d.title}
              to={d.href}
              className="border border-line bg-panel grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] text-fg transition-colors duration-150 hover:border-accent hover:text-fg"
            >
              <div
                className={`relative min-h-[300px] overflow-hidden ${PHOTOS[d.title] ? "" : `flex items-end p-5 ${PHOTO_BG[d.photoVariant]}`}`}
              >
                {PHOTOS[d.title] ? (
                  <img
                    src={PHOTOS[d.title]}
                    alt={d.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-[10px] tracking-[0.16em] text-muted-2 uppercase">
                    [ {d.photoLabelServices} ]
                  </span>
                )}
              </div>
              <div className="p-[clamp(28px,4vw,56px)] flex flex-col gap-5 justify-center">
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase tabular-nums">
                  Division {d.num}
                </span>
                <span className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.08]">
                  {d.servicesTitle ?? d.title}
                </span>
                <span className="text-[16px] leading-[1.7] text-muted max-w-[44ch]">
                  {d.longDesc}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line px-3 py-1.5 font-mono text-[12px] tabular-nums text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3.5 pt-2">
                  <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
                    View division
                  </span>
                  <span className="font-mono text-[15px] text-accent">
                    &#8594;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
