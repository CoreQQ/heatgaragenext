export const SERVICES = {
  service: {
    label: '🔧 Servicing',
    items: [
      { title: 'Full Service / Oil Change', desc: 'Oil and filter change, air and cabin filter replacement, all fluid level checks. Service interval reset via ISTA. Full inspection report included.', price: 'from €200' },
      { title: 'Brake System', desc: 'Brake pad and disc replacement, brake fluid flush, ABS/DSC diagnostics. OEM and quality aftermarket options available to suit all budgets.', price: 'from €300' },
      { title: 'Suspension & Steering', desc: 'Shock absorbers, springs, bushings, control arms, ball joints and tie rod ends. Wheel alignment check after every replacement.', price: 'from €400' },
      { title: 'Cooling & Climate', desc: 'Thermostat, radiator, water pump and expansion tank replacement. AC regas and diagnostics. Cooling system leak diagnosis and repair.', price: 'from €85' },
      { title: 'Exhaust System', desc: 'Catalytic converter, flexi pipe, silencer and lambda sensor replacement. Sport exhaust fitting. Smoke and unusual noise diagnosis.', price: 'from €250' },
      { title: 'Electrics & Wiring', desc: 'Short circuit tracing, sensor replacement, fuse and relay work. CAN/LIN/MOST bus diagnostics. FRM, CAS, ECU and Junction Box work.', price: 'from €50' },
    ],
  },
  diagnostics: {
    label: '💻 Diagnostics',
    items: [
      { title: 'Full ISTA Diagnostics', desc: 'Scan of all modules using official BMW ISTA+. Fault code reading and interpretation, live data analysis from all sensors across the car.', price: 'from €65' },
      { title: 'Engine Diagnostics', desc: 'Compression test, fuel system analysis, injector and HPFP diagnostics. VANOS and VALVETRONIC live data monitoring and fault tracing.', price: 'from €75' },
      { title: 'Gearbox Diagnostics', desc: 'Automatic and DCT gearbox scanning. Adaptation reads, hydraulic unit and mechatronic checks. Reset and relearn procedures where required.', price: 'from €75' },
      { title: 'Suspension Diagnostics', desc: 'Damper, bearing, bushing and arm assessment. Vibration plate testing. Identifying the source of knocks, rattles and vague steering.', price: 'from €60' },
      { title: 'Electrical Diagnostics', desc: 'Short circuit, open circuit and parasitic drain tracing. Oscilloscope signal analysis. FRM, CAS, LM and Junction Box fault finding.', price: 'from €80' },
      { title: 'Pre-Purchase Inspection', desc: 'Comprehensive check before buying a used BMW. VIN history, mileage and hidden fault verification. Written report with photos and video.', price: 'from €110' },
    ],
  },
  coding: {
    label: '⚙️ Coding',
    items: [
      { title: 'Hidden Feature Activation', desc: 'Unlock factory options: video in motion, welcome lights, Auto Start-Stop off by default, Comfort mode, folding mirror speed and much more.', price: 'from €60' },
      { title: 'ECU / DME Programming', desc: 'Flash engine control unit (DME/DDE) to the latest software via ISTA-P. Resolve software faults and update to the current BMW release.', price: 'from €90' },
      { title: 'Japan to EU Conversion', desc: 'Full conversion of Japanese-spec BMW to EU/Irish specification. Speedometer, lighting, language settings, module recoding and compliance check.', price: 'from €150' },
      { title: 'Adaptation Reset & Relearn', desc: 'Gearbox, throttle body and EGS adaptation reset. Steering rack and pedal initialisation. New module coding after replacement.', price: 'from €50' },
      { title: 'Key Programming (CAS)', desc: 'New key coding, CAS/CAS3+ repair, EWS sync, reflash after total key loss. E60, E90, F10, F30 and other platforms all covered.', price: 'from €150' },
      { title: 'Performance Tuning', desc: 'EGR, DPF and lambda delete. Stage 1 and Stage 2 maps via Bootmod3, BM3 and Xede. Proven power and torque gains on every map.', price: 'from €250' },
    ],
  },
  engine: {
    label: '🔩 Engine',
    items: [
      { title: 'Timing Chain Replacement', desc: 'Full chain, tensioner and guide replacement on N47, N57, N20, N52 and S54 engines. Video kept on file throughout the job.', price: 'from €1,000' },
      { title: 'Valve Stem Seal Replacement', desc: 'Fix oil consumption on N46, N52 and M54 engines. Seals replaced without removing the cylinder head where possible.', price: 'from €500' },
      { title: 'Turbo Rebuild', desc: 'Full turbocharger rebuild or replacement on petrol and diesel BMW engines. Oil feed inspection, boost pressure test and post-fit road test.', price: 'from €350' },
      { title: 'Rocker Cover Gasket', desc: 'Fix oil leaks from the cam cover. Gasket and bolt seal replacement on N42, N46, N52, N54 and other engines. Fast turnaround.', price: 'from €300' },
      { title: 'Piston Ring Replacement', desc: 'Fix excessive oil consumption and smoking. Piston ring replacement and cylinder honing on N46, N52, M52TU and other engines.', price: 'from €1,100' },
      { title: 'Full Engine Rebuild', desc: 'Complete strip, bore, hone, bearing, piston and ring replacement. M, N and B series all covered. Fully documented throughout.', price: 'from €1,900' },
    ],
  },
  detailing: {
    label: '✨ Detailing',
    items: [
      { title: 'Exterior Hand Wash & Dry', desc: 'Full hand wash with pH-neutral shampoo, wheel cleaning, door shuts, glass clean and hand dry. No swirl marks, ever.', price: 'from €50' },
      { title: 'Interior Deep Clean', desc: 'Full vacuum, dash and trim wipe-down, leather clean and condition, carpet shampoo, glass clean and odour treatment.', price: 'from €150' },
      { title: 'Paint Decontamination & Clay', desc: 'Iron fallout removal, full clay bar treatment and panel wipe-down. Prepares the surface for polishing or ceramic coating.', price: 'from €120' },
      { title: 'Paint Correction', desc: 'Machine polish to remove swirls, light scratches, water spots and oxidation. Single or two-stage depending on defect depth.', price: 'from €450' },
      { title: 'Ceramic Coating', desc: 'Professional-grade ceramic coating for long-lasting paint protection, hydrophobic finish and deep gloss. Full decontamination prep included.', price: 'from €550' },
      { title: 'Engine Bay Detail', desc: 'Safe degreasing, agitation and rinse. Plastics and rubbers dressed and protected. Great for pre-sale or post-repair presentation.', price: 'from €80' },
    ],
  },
} as const

export type ServiceTab = keyof typeof SERVICES

export const ADVANTAGES = [
  { icon: 'shield', title: 'BMW Only', desc: '100% focus on BMW across all series and generations — no compromises' },
  { icon: 'grid', title: 'ISTA / NCS Expert', desc: 'Official BMW diagnostic software for precise fault reading and coding' },
  { icon: 'star', title: '5-Star Rated', desc: 'Consistently rated 5 stars by BMW owners across Dublin and surrounding areas' },
  { icon: 'users', title: '10+ Years Experience', desc: 'Every technician is a narrow BMW specialist with years of hands-on experience' },
  { icon: 'dollar', title: 'Transparent Pricing', desc: 'Cost agreed before work begins. No hidden charges, ever' },
  { icon: 'clock', title: '24/7 Available', desc: "We're always here — reach us any time, any day of the week" },
]

export const STEPS = [
  { num: '01', title: 'Booking', desc: 'Choose your slot online or call us — available 24/7' },
  { num: '02', title: 'Check-In', desc: 'We inspect the car and document its full condition' },
  { num: '03', title: 'Diagnostics', desc: 'Full ISTA scan — we find everything, not just the obvious' },
  { num: '04', title: 'Quote', desc: 'We call you, explain the faults and confirm the price' },
  { num: '05', title: 'Repair', desc: 'Work carried out using OEM or quality-approved parts' },
  { num: '06', title: 'Quality Check', desc: 'Test drive and control scan of all repaired systems' },
  { num: '07', title: 'Hand-Back', desc: 'Collect with a full job sheet detailing all work done' },
  { num: '08', title: 'After Care', desc: "We stay available for any questions after the repair" },
]

export const GALLERY = [
  { label: 'Timing Chain', overlay: 'Before / After' },
  { label: 'F30 Coding', overlay: 'Coding' },
  { label: 'Paint Correction', overlay: 'Detailing' },
  { label: 'Turbo Rebuild', overlay: 'Engine' },
  { label: 'Ceramic Coating', overlay: 'Detailing' },
  { label: 'ISTA Diagnostic', overlay: 'Diagnostics' },
]

export const REVIEWS = [
  {
    text: "Brought my E90 in with a rattling timing chain. The lads diagnosed it quickly, gave a clear quote with no surprises. Chain done in two days. Car drives like new — won't go anywhere else in Dublin.",
    author: 'Alex M.',
    initials: 'AM',
    car: 'BMW 320d E90 · Dublin 6',
  },
  {
    text: 'Had my F30 coded — video in motion, Auto Start-Stop off by default, welcome lights enabled. Done in under an hour. Fair price and their BMW knowledge is genuinely impressive.',
    author: 'Sean K.',
    initials: 'SK',
    car: 'BMW 330i F30 · Sandyford',
  },
  {
    text: 'Used them for a pre-purchase inspection on an X5. They uncovered faults the seller never mentioned. Saved me a serious amount of money. The written report with photos was thorough — absolutely worth it.',
    author: 'David V.',
    initials: 'DV',
    car: 'BMW X5 F15 · Dún Laoghaire',
  },
]

export const BMW_MODELS = [
  'BMW 1 Series (E87, F20, F40)',
  'BMW 2 Series (F22, F44, G42)',
  'BMW 3 Series (E90, F30, G20)',
  'BMW 4 Series (F32, G22)',
  'BMW 5 Series (E60, F10, G30)',
  'BMW 7 Series (E65, F01, G11)',
  'BMW X1 (E84, F48, U11)',
  'BMW X3 (E83, F25, G01)',
  'BMW X5 (E53, E70, F15, G05)',
  'BMW X6 (E71, F16, G06)',
  'BMW M Series',
]

export const SERVICE_TYPES = [
  'Full Service / Oil Change',
  'Diagnostics',
  'Coding / Programming',
  'Japan to EU Conversion',
  'Engine Repair / Turbo',
  'Brake System',
  'Suspension',
  'Electrics',
  'Detailing',
  'Pre-Purchase Inspection',
  'Other',
]
