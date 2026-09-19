import { Link, useLocation } from "react-router-dom";
import logo from "../assets/EDRO.png";
import { DIVISIONS } from "../data/home";

const COMPANY_LINKS = [
  ["About", "/about"],
  ["HSE & Quality", "/hse-quality"],
  // ["Projects", "/projects"], // hidden until real project data is ready
  ["Careers", "/"],
];
const CERTS = ["ISO 9001", "ISO 14001", "ISO 45001"];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="bg-ink">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,4vw,40px)] pt-[clamp(48px,6vw,80px)] pb-7 flex flex-col gap-12">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="ERDO Libya" className="w-12 h-12 block" />
            <span className="font-serif text-[22px] tracking-[0.04em] text-fg">
              ERDO LIBYA
            </span>
            <span className="text-[14px] leading-[1.65] text-muted max-w-[34ch]">
              Metal industries and mechanical works for the oil and gas
              sector. Benghazi, Libya.
            </span>
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-fg uppercase">
              Divisions
            </span>
            {DIVISIONS.map((d) => (
              <Link
                key={d.title}
                to={d.href}
                className={`text-[14px] ${pathname === d.href ? "text-fg" : "text-muted"}`}
              >
                {d.servicesTitle ?? d.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-fg uppercase">
              Company
            </span>
            {COMPANY_LINKS.map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className={`text-[14px] ${pathname === href ? "text-fg" : "text-muted"}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="font-mono text-[11px] tracking-[0.2em] text-fg uppercase">
              Head Office
            </span>
            <span className="text-[14px] leading-[1.6] text-muted">
              Bu Atni — Al-Silini
              <br />
              Benghazi, Libya
            </span>
            <span className="font-mono text-[13px] text-muted tabular-nums">
              [ phone 1 ]
            </span>
            <span className="font-mono text-[13px] text-muted">
              [ email ]
            </span>
          </div>
        </div>

        <div className="flex gap-2.5 items-center flex-wrap pt-5 border-t border-line">
          {CERTS.map((cert) => (
            <span
              key={cert}
              className="border border-line px-2.5 py-1.5 font-mono text-[11px] text-muted tabular-nums"
            >
              {cert}
            </span>
          ))}
          <span className="ms-auto font-mono text-[11px] text-muted-2 tracking-[0.1em]">
            &#169; 2026 ERDO LIBYA
          </span>
        </div>
      </div>
    </footer>
  );
}
