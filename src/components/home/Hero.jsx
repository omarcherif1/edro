import { Link } from "react-router-dom";
import heroPhoto from "../../assets/edro/storagetank2.jpeg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-line min-h-[78vh] flex"
    >
      <img
        src={heroPhoto}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.60)_0%,rgba(10,10,10,0.88)_100%)]" />
      <div className="relative max-w-[1440px] mx-auto w-full px-[clamp(20px,4vw,40px)] pt-[clamp(72px,12vw,160px)] pb-[clamp(56px,7vw,96px)] flex flex-col justify-center gap-9">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted flex-wrap">
          <span className="w-[7px] h-2 bg-accent [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
          <span>Benghazi, Libya</span>
        </div>
        <h1 className="font-serif font-normal text-[clamp(36px,5.4vw,78px)] leading-[1.04] tracking-[-0.02em] m-0 max-w-[24ch] text-fg text-pretty">
          Engineering, Construction &amp; Maintenance for Libya's Oil &amp; Gas
          Sector
        </h1>
        <p className="font-mono text-[clamp(12px,1.4vw,15px)] tracking-[0.14em] uppercase text-fg m-0">
          Piping &amp; Pipeline · Steel Structures · Storage Tanks
        </p>
        <div className="flex gap-4 flex-wrap pt-2">
          <Link
            to="/services"
            className="h-[52px] px-7 bg-accent text-white flex items-center font-mono text-[12px] tracking-[0.12em] uppercase transition-colors duration-100 hover:bg-accent-hover hover:text-white active:bg-accent-active"
          >
            Our Capabilities
          </Link>
          <a
            href="#contact"
            className="h-[52px] px-7 border border-fg text-fg flex items-center font-mono text-[12px] tracking-[0.12em] uppercase transition-colors duration-100 hover:bg-fg hover:text-ink"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
