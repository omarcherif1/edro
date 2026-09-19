export const HERO = {
  crumb: "Storage Tanks",
  title: "Storage Tanks",
  subtitle: "Engineering, Construction & Maintenance",
  photoLabel: "photo — tank under erection, night, no persons",
  compliantValue: "API 650 / API 653",
  scopeText:
    "New tank construction, in-service inspection, repair and reconstruction. Shop fabrication in Benghazi, erection on client site.",
};

export const WHAT_WE_BUILD = {
  sectionNum: "01",
  title: "What We Build",
  intro:
    "Four atmospheric tank types, designed and erected to API 650. Roof selection follows product vapour pressure and emission requirements.",
  items: [
    {
      title: "External Floating Roof",
      desc: "Pontoon or double-deck roof floating directly on the product. Rim seal, articulated roof drain and wind girder. Our reference scope in tank construction and floating roof repair.",
      tags: ["API 650", "API 2000"],
      highlighted: true,
    },
    {
      title: "Internal Floating Roof",
      desc: "Floating deck inside a fixed roof tank. Circulation vents and seal system limit vapour loss on volatile products.",
    },
    {
      title: "Cone Roof",
      desc: "Fixed conical roof, self-supporting or column-supported. For products with low vapour pressure and heated service.",
    },
    {
      title: "Dome Roof",
      desc: "Self-supporting spherical roof. Suits higher internal pressure and larger clear spans without internal columns.",
    },
  ],
};

export const DIAGRAM = {
  sectionNum: "02",
  title: "External Floating Roof — Sectional View",
  intro:
    "Select a component to read its function. Schematic only — not a construction drawing.",
  parts: [
    [
      "shell",
      "Shell",
      "Rolled and welded plate courses forming the tank wall. Plate thickness reduces course by course following the API 650 design calculation.",
    ],
    [
      "annular",
      "Annular Plate",
      "Thicker plate ring under the shell-to-bottom joint. Distributes shell load to the foundation and carries the critical corner weld.",
    ],
    [
      "bottom",
      "Bottom Plate",
      "Lapped plate floor welded on the prepared pad. Laid to a defined slope so the tank drains toward the sump.",
    ],
    [
      "roof",
      "Floating Roof",
      "Pontoon or double-deck roof resting directly on the product. Rises and falls with the level, reducing vapour space and evaporation loss.",
    ],
    [
      "girder",
      "Wind Girder",
      "Stiffening ring on the upper shell. Maintains roundness of the open top under wind load.",
    ],
    [
      "drain",
      "Roof Drain System",
      "Articulated or flexible pipe collecting rainwater from the deck and discharging through the shell. Valved and tested before handover.",
    ],
    [
      "seal",
      "Rim Seal",
      "Primary and secondary seal closing the annular gap between deck rim and shell. Replaceable during a shutdown.",
    ],
    [
      "nozzles",
      "Nozzles",
      "Reinforced shell and bottom connections for inlet, outlet, drain, mixer and instrumentation. Set out and tested to the approved drawing.",
    ],
    [
      "stair",
      "Stairway",
      "Spiral stairway fixed to the shell, giving access to the top platform. Treads and stringers welded to AWS D1.1.",
    ],
    [
      "rail",
      "Handrail",
      "Guardrail on the top curb and on the roof platform. Continuous protection at all working levels.",
    ],
    [
      "foam",
      "Foam Chamber",
      "Fixed foam injection at the rim, part of the tank fire protection arrangement. Sized with the client HSE scheme.",
    ],
    [
      "gauge",
      "Gauge Hatch",
      "Access point for manual gauging and product sampling, with sealed cover.",
    ],
  ],
};

export const STANDARDS = [
  ["API 650", "Welded tanks for oil storage"],
  ["API 653", "Tank inspection, repair, alteration, reconstruction"],
  ["API 620", "Low-pressure welded storage tanks"],
  ["API 575", "Inspection of atmospheric and low-pressure tanks"],
  ["API 651", "Cathodic protection of tanks"],
  ["API 652", "Tank bottom lining"],
  ["API 2000", "Venting, pressure and vacuum relief"],
  ["API 2350", "Overfill protection"],
  ["ASME IX", "Welding and brazing qualification"],
  ["AWS D1.1", "Structural welding code — steel"],
  ["NACE", "Corrosion control and coating inspection"],
  ["SSPC", "Surface preparation standards"],
  ["ISO 9001", "Quality management"],
  ["ISO 14001", "Environmental management"],
  ["ISO 45001", "Occupational health and safety"],
  ["NFPA 30", "Flammable and combustible liquids code"],
];

export const STEPS = [
  [
    "Engineering",
    [
      "Client Requirements",
      "Design Review",
      "Tank Calculations",
      "Material Selection",
      "Material Procurement",
      "Shop Drawings",
      "ITP Approval",
    ],
  ],
  [
    "Procurement",
    ["Steel Plates", "Structural Steel", "Nozzles", "Valves", "Welding Consumables", "Coating Materials"],
  ],
  [
    "Fabrication",
    [
      "Material Receiving",
      "Material Identification",
      "Plate Cutting",
      "Edge Preparation",
      "Plate Rolling",
      "Assembly",
      "Welding",
      "Dimensional Inspection",
    ],
  ],
  [
    "Site Construction",
    [
      "Foundation Inspection",
      "Bottom Installation",
      "Shell Erection",
      "Floating Roof Assembly",
      "Floating Roof Installation",
      "Accessories Installation",
    ],
  ],
  [
    "Welding & Inspection",
    ["WPS", "PQR", "WPQ", "Fit-Up Inspection", "Welding Inspection", "NDT", "Dimensional Check"],
  ],
  [
    "Testing & Commissioning",
    [
      "Vacuum Box Test",
      "Hydrostatic Test",
      "Roof Drain Test",
      "Settlement Monitoring",
      "Floating Roof Operation Test",
      "Leak Test",
      "Final Inspection",
    ],
  ],
  [
    "Painting & Coating",
    ["Surface Preparation", "Sandblasting", "Primer", "Intermediate Coat", "Finish Coat", "DFT", "Holiday Test"],
  ],
  [
    "Mechanical Completion",
    ["Punch List", "Final Inspection", "Client Walkdown", "Documentation", "Handover"],
  ],
];

export const MAINT = [
  ["Tank Shutdown", ["Isolation", "Draining", "Cleaning", "Gas Free", "LOTO"]],
  [
    "Inspection",
    ["External Inspection", "Internal Inspection", "Thickness Survey", "Settlement Survey", "Roof Inspection", "Floating Roof Inspection"],
  ],
  ["Damage Assessment", ["Corrosion", "Cracks", "Pitting", "Settlement", "Leakage"]],
  [
    "Repair Activities",
    [
      "Bottom Replacement",
      "Shell Replacement",
      "Roof Replacement",
      "Nozzle Replacement",
      "Floating Roof Repair",
      "Rim Seal Replacement",
      "Foundation Repair",
    ],
  ],
];

export const DOSSIERS = [
  [
    "QA/QC Dossier",
    [
      "Inspection & Test Plan",
      "WPS / PQR / WPQ",
      "Material Test Certificates",
      "NDT Reports",
      "Hydrotest Report",
      "Painting Report",
      "Calibration Certificates",
    ],
  ],
  [
    "Maintenance Reports",
    [
      "Inspection Report",
      "Corrosion Report",
      "Thickness Report",
      "Repair Report",
      "Daily Report",
      "Weekly Progress Report",
      "Final Report",
    ],
  ],
];

export const CONTACT = {
  heading: ["Send us your", "tank scope"],
  desc: "Drawings, data sheets or an inspection report are enough to start. We reply with a technical clarification list and a commercial proposal.",
  messagePlaceholder: "Tank type, service, location, required codes",
  scopeOptions: [
    "New tank construction",
    "Tank inspection (API 653)",
    "Repair & reconstruction",
    "Floating roof works",
    "Painting & coating",
  ],
};

export const DOWNLOAD_TITLE = "Download the Storage Tanks Capability Statement";
