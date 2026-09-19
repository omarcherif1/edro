export const DIVISION_FILTERS = [
  ["all", "All", "ALL"],
  ["tanks", "Storage Tanks", "TANKS"],
  ["piping", "Piping & Pipeline", "PIPING"],
  ["steel", "Steel Structures", "STEEL"],
];

// Project records are placeholders: client, location and year are released
// by ERDO once written approval is in place.
export const PROJECTS = [
  {
    id: "t1",
    div: "tanks",
    name: "Storage Tank Construction — [ reference ]",
    shots: 5,
    scope: [
      "Foundation inspection",
      "Bottom installation",
      "Shell erection",
      "Floating roof installation",
      "Hydrostatic test",
      "Painting & coating",
    ],
    codes: ["API 650", "ASME IX"],
  },
  {
    id: "t2",
    div: "tanks",
    name: "Tank Repair & Reconstruction — [ reference ]",
    shots: 4,
    scope: [
      "Internal inspection",
      "Thickness survey",
      "Bottom replacement",
      "Rim seal replacement",
      "Settlement monitoring",
    ],
    codes: ["API 653", "NACE"],
  },
  {
    id: "t3",
    div: "tanks",
    name: "Floating Roof Overhaul — [ reference ]",
    shots: 3,
    scope: [
      "Tank shutdown",
      "Gas free certification",
      "Pontoon repair",
      "Roof drain replacement",
      "Operation test",
    ],
    codes: ["API 653"],
  },
  {
    id: "s1",
    div: "steel",
    name: "Pipe Rack Fabrication & Erection — [ reference ]",
    shots: 4,
    scope: [
      "3D modelling",
      "Shop fabrication",
      "Blasting & coating",
      "Column erection",
      "Bolt torque check",
      "Final survey",
    ],
    codes: ["AISC 360", "AWS D1.1"],
  },
  {
    id: "s2",
    div: "steel",
    name: "Access Platforms & Stairways — [ reference ]",
    shots: 3,
    scope: [
      "Shop drawings",
      "Fabrication",
      "Handrail installation",
      "Dimensional check",
      "Repainting",
    ],
    codes: ["AISC 360"],
  },
];
