export const STANDARDS = [
  { code: "API 650", label: "Welded tanks for oil storage" },
  { code: "API 653", label: "Tank inspection and repair" },
  { code: "ASME B31.3", label: "Process piping" },
  { code: "API 1104", label: "Welding of pipelines" },
  { code: "AISC 360", label: "Structural steel buildings" },
  { code: "ISO 9001", label: "Quality management" },
  { code: "ISO 14001", label: "Environmental management" },
  { code: "ISO 45001", label: "Occupational health and safety" },
];

export const PHASES = [
  "Engineering",
  "Procurement",
  "Fabrication",
  "Construction",
  "Maintenance",
  "Inspection",
  "Testing",
  "Commissioning",
].map((name, i) => ({
  n: String(i + 1).padStart(2, "0"),
  name,
}));

export const DIVISIONS = [
  {
    num: "01",
    title: "Storage Tanks",
    shortDesc:
      "Atmospheric tanks built, inspected and repaired — fixed and floating roof.",
    longDesc:
      "Engineering, construction and maintenance of atmospheric storage tanks — external and internal floating roof, cone and dome roof.",
    tags: ["API 650", "API 653"],
    href: "/storage-tanks",
    photoLabelHome: "photo — tank erection",
    photoLabelServices: "photo — storage tank",
    photoVariant: "a",
  },
  {
    num: "02",
    title: "Piping & Pipeline",
    servicesTitle: "Piping & Pipelines",
    shortDesc:
      "Process and utility piping inside the plant, pipelines between facilities.",
    longDesc:
      "Process and utility piping inside plant boundaries, and above-ground or buried pipelines between facilities.",
    tags: ["ASME B31.3", "API 1104"],
    href: "/piping-and-pipelines",
    photoLabelHome: "photo — pipe rack",
    photoLabelServices: "photo — pipe rack",
    photoVariant: "b",
  },
  {
    num: "03",
    title: "Steel Structures",
    shortDesc:
      "Pipe racks, platforms and industrial buildings, fabricated and erected.",
    longDesc:
      "Design, shop fabrication and site erection of pipe racks, platforms, pipe bridges and industrial buildings.",
    tags: ["AISC 360", "AWS D1.1"],
    href: "/steel-structures",
    photoLabelHome: "photo — steel erection",
    photoLabelServices: "photo — steel structure",
    photoVariant: "a",
  },
];
