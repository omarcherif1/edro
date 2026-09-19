export const HERO = {
  crumb: "Piping & Pipelines",
  title: "Piping & Pipelines",
  subtitle: "Engineering, Fabrication & Installation",
  photoLabel: "photo — pipe rack under installation, no persons",
  compliantValue: "ASME B31.3 / API 1104",
  scopeText:
    "Process and utility piping inside plant boundaries, and above-ground or buried pipelines between facilities. Spool fabrication in Benghazi, erection and tie-in on client site.",
};

export const WHAT_WE_BUILD = {
  sectionNum: "01",
  title: "What We Build",
  intro:
    "Two families of work under one division. Piping is contained within a site; pipelines run between them.",
  families: [
    {
      badge: "Family 01",
      title: "Piping Systems",
      desc: "In-plant systems fabricated as spools and erected on racks and supports. Designed to ASME B31.3.",
      items: [
        "Process Piping",
        "Utility Piping",
        "Fire Water",
        "Steam",
        "Fuel Gas",
        "Cooling Water",
        "Compressed Air",
      ],
      highlighted: true,
    },
    {
      badge: "Family 02",
      title: "Pipelines",
      desc: "Cross-country and in-field lines, welded to API 1104 and designed to the applicable ASME B31 section.",
      items: [
        "Above Ground",
        "Buried",
        "Gathering Lines",
        "Transmission Lines",
        "Distribution Lines",
      ],
    },
  ],
  materials: {
    badge: "Materials",
    title: "Materials Handled",
    rows: [
      ["Carbon Steel", "API 5L, ASTM"],
      ["Stainless Steel", "ASTM"],
      ["Alloy Steel", "ASTM"],
      ["HDPE", "fusion jointed"],
    ],
  },
};

export const COMPARISON = {
  sectionNum: "02",
  title: "Process Piping vs. Long-Distance Pipeline",
  intro:
    "Both are welded steel carrying fluid. The design code, the joining regime and the testing regime are not the same.",
  rows: [
    ["Extent", "Within a plant boundary", "Between facilities, along a route"],
    ["Design code", "ASME B31.3", "ASME B31.4 / B31.8 / B31.12"],
    ["Welding", "ASME IX", "API 1104"],
    ["Line pipe", "Fittings, flanges, valves", "API 5L line pipe, field bends"],
    ["Support", "Racks, shoes, spring hangers", "Sleepers, berms, buried cover"],
    ["Fabrication", "Shop spools, isometric controlled", "Field string welding, tie-ins"],
    ["Testing", "Hydrostatic or pneumatic per line class", "Hydrostatic, pigging, drying"],
    ["In-service", "API 570 inspection", "Corrosion monitoring, leak detection"],
  ],
};

export const STANDARDS = [
  ["API 1104", "Welding of pipelines and related facilities"],
  ["ASME B31.3", "Process piping"],
  ["API 5L", "Line pipe"],
  ["API 570", "Piping inspection, repair, alteration, rerating"],
  ["ASME B31.1", "Power piping"],
  ["ASME B31.4", "Liquid pipeline transportation systems"],
  ["ASME B31.8", "Gas transmission and distribution piping"],
  ["ASME B31.12", "Hydrogen piping and pipelines"],
  ["ASME IX", "Welding and brazing qualification"],
  ["AWS D1.1", "Structural welding code — steel"],
  ["ASTM", "Material specifications"],
  ["SSPC", "Surface preparation standards"],
  ["ISO 9001", "Quality management"],
  ["ISO 14001", "Environmental management"],
  ["ISO 45001", "Occupational health and safety"],
  ["NFPA 30", "Flammable and combustible liquids code"],
];

export const STEPS = [
  [
    "Engineering",
    ["Design Basis", "P&ID Review", "Line List", "Stress Analysis", "Material Selection", "Isometrics", "Fabrication Drawings"],
  ],
  [
    "Procurement",
    ["Pipes", "Fittings", "Gaskets", "Valves", "Welding Consumables", "Supports"],
  ],
  [
    "Fabrication",
    ["Material Receiving", "Pipe Cutting", "Beveling", "Fit-up", "Welding", "NDT", "Spool Fabrication", "Painting"],
  ],
  [
    "Site Installation",
    ["Pipe Rack Installation", "Pipe Support", "Spool Erection", "Field Welding", "Alignment", "Valve Installation"],
  ],
  [
    "Welding & Inspection",
    ["WPS", "PQR", "WPQ", "Fit-Up Inspection", "Welding Inspection", "NDT", "Dimensional Check"],
  ],
  [
    "Testing & Commissioning",
    ["Flushing", "Air Blowing", "Hydrostatic Test", "Pneumatic Test", "Drying", "Leak Test", "Commissioning"],
  ],
  [
    "Painting & Coating",
    ["Surface Preparation", "Sandblasting", "Primer", "Intermediate Coat", "Finish Coat", "DFT", "Holiday Test"],
  ],
  [
    "Mechanical Completion",
    ["Punch List", "As-built Drawings", "Test Packages", "Client Acceptance", "Handover"],
  ],
];

export const MAINT = [
  [
    "Maintenance",
    ["Visual Inspection", "Thickness Measurement", "Corrosion Monitoring", "Leak Detection", "Valve Maintenance", "Pigging"],
  ],
  ["Failure Assessment", ["Corrosion", "Erosion", "Fatigue", "Cracking", "Leakage", "Vibration"]],
  ["Repair Methods", ["Clamp Repair", "Sleeve Repair", "Pipe Replacement", "Weld Repair", "Hot Tapping"]],
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
  heading: ["Send us your", "line list"],
  desc: "Isometrics, a line list or an inspection report are enough to start. We reply with a technical clarification list and a commercial proposal.",
  messagePlaceholder: "Line class, service, quantity, location, required codes",
  scopeOptions: [
    "Process piping fabrication & installation",
    "Pipeline construction",
    "Piping inspection (API 570)",
    "Repair & replacement",
    "Painting & coating",
  ],
};

export const DOWNLOAD_TITLE = "Download the Piping & Pipelines Capability Statement";
