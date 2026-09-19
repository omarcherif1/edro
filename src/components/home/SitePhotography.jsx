import piping1 from "../../assets/edro/piping1.jpeg";
import piping3 from "../../assets/edro/piping3.jpeg";
import piping4 from "../../assets/edro/piping4.jpeg";
import steelstructure1 from "../../assets/edro/steelstructure1.jpeg";
import steelstructure4 from "../../assets/edro/steelstructure4.jpeg";
import steelstructure6 from "../../assets/edro/steelstructure6.png";

const PHOTOS = [
  piping1,
  piping3,
  piping4,
  steelstructure1,
  steelstructure4,
  steelstructure6,
];

export default function SitePhotography() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {PHOTOS.map((src, i) => (
          <div
            key={src}
            className={`relative aspect-[4/3] overflow-hidden ${
              i < PHOTOS.length - 1 ? "border-e border-ink" : ""
            }`}
          >
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
