export type ReelCard = {
  n: number;
  category: string;
  duration: string;
  title: string;
  hook: string;
};

export type GalleryItem = {
  ratio: "wide" | "tall" | "square";
  theme: string; // tailwind gradient classes (fallback if no image)
  label?: string;
  caption?: string;
  /**
   * Optional. Path under /public, e.g.
   *   "/projects/omega/gallery/01.jpg"
   * When provided, the gallery card renders this image instead of the gradient.
   */
  src?: string;
};

export type FrameSection =
  | { kind: "nav"; brand: string }
  | { kind: "hero"; title: string; subtitle?: string; cta?: string }
  | { kind: "splitImage"; title: string; body: string }
  | { kind: "grid"; items: { title: string; sub?: string }[] }
  | { kind: "feature"; title: string; body: string }
  | { kind: "marquee"; words: string[] }
  | { kind: "cta"; title: string; cta: string }
  | { kind: "footer"; brand: string };

export type Project = {
  slug: string;
  title: string;
  tag: string;
  shortIntro: string;
  longIntro: string;
  description: string;
  highlights: string[];
  year: string;
  accent: string; // bg gradient class
  themeBg: string; // inner-frame bg
  themePrimary: string; // inner-frame primary color hex
  themeAccent: string; // inner-frame accent color hex
  gallery: GalleryItem[];
  frame: FrameSection[];
  /**
   * Optional. Path to the project logo under /public, e.g.
   *   "/projects/omega/logo.png"
   * Shown on the home-page tile and on the showcase hero.
   */
  logoImage?: string;
  /**
   * Optional. Path to a wide cover image under /public, e.g.
   *   "/projects/omega/cover.jpg"
   * Used as the tile background and the showcase hero background.
   */
  coverImage?: string;
  /**
   * Optional. Paths to screenshots that get stacked vertically inside the
   * laptop + phone mockups and auto-scroll. Each image should be ~1280px wide.
   * Order matters — they're shown top-to-bottom.
   *   ["/projects/omega/preview/01.jpg", "/projects/omega/preview/02.jpg", ...]
   */
  previewImages?: string[];
  /**
   * Optional. A screen-recording of your live website that plays (muted, looped)
   * inside the LAPTOP mockup. Drop a file named `preview.mp4` (or .webm) in the
   * project folder and it's picked up automatically.
   *   "/projects/omega/preview.mp4"
   * Takes priority over previewImages for the laptop.
   */
  previewVideo?: string;
  /**
   * Optional. A screen-recording for the PHONE mockup (portrait). Drop a file
   * named `preview-mobile.mp4` (or .webm) in the project folder.
   *   "/projects/omega/preview-mobile.mp4"
   */
  previewVideoMobile?: string;

  // ---- Dummy Instagram page (shown inside the phone mockup) ----------------
  /**
   * Optional. Post images for the dummy Instagram profile. Drop them in
   *   /public/projects/<slug>/instagram/01.jpg, 02.jpg, ...
   * and they're picked up automatically (sorted by name). When present, the
   * phone shows a fake Instagram profile that auto-opens these posts on loop.
   */
  instagramPosts?: string[];
  /** Optional @handle for the dummy profile (default derived from title). */
  instagramHandle?: string;
  /** Optional display name (default = project title). */
  instagramName?: string;
  /** Optional bio line (default = shortIntro). */
  instagramBio?: string;
  /** Optional follower count label, e.g. "12.4k" (default is a stable number). */
  instagramFollowers?: string;
  /** Optional following count label (default "318"). */
  instagramFollowing?: string;

  /**
   * Optional. Reel scripts shown as a scrolling column inside the gallery wall.
   */
  reelScript?: ReelCard[];
};

export const omegaReelScript: ReelCard[] = [
  { n: 1, category: "Behind the Scenes", duration: "45–60s", title: "Factory Floor: How a Geometry Box Is Made", hook: "Do you know how your geometry box is actually made?" },
  { n: 2, category: "Behind the Scenes", duration: "45–55s", title: "The Quality Check Room Nobody Shows You", hook: "This is the room that decides if a product ships or gets rejected." },
  { n: 3, category: "Behind the Scenes", duration: "45–60s", title: "Packing an Export Order for Overseas", hook: "Packing 10,000 geometry boxes heading to the UAE tonight. 📦" },
  { n: 4, category: "Product Showcase", duration: "30–45s", title: "Satisfying Unboxing — Factory to Student", hook: "The geometry box every Indian student grew up with. 🗂️" },
  { n: 5, category: "Product Showcase", duration: "60s", title: "Bravo Pen vs 5 Brands — Durability Challenge", hook: "We challenged the Bravo gel pen against 5 competitors. ⚔️" },
  { n: 6, category: "Education", duration: "45–55s", title: "5 Geometry Hacks Your Teacher Never Told You", hook: "5 geometry hacks your teacher never taught you 🤯" },
  { n: 7, category: "Education", duration: "45s", title: "What's in a Geometry Box?", hook: "Your box has 7 tools. Do you know what ALL of them do? 🤔" },
  { n: 8, category: "Brand Story", duration: "45s", title: "Award Display — Plexconcil Export Awards", hook: "India's highest stationery exporter since 1978. 🏆" },
  { n: 9, category: "Behind the Scenes", duration: "50–60s", title: "3 Plants in One Reel — Mumbai, Daman & Baddi", hook: "3 cities. 1 brand. 60+ years. 🗺️" },
  { n: 10, category: "Engagement", duration: "35–45s", title: "Guess the Product — Mystery Reel", hook: "Can you name ALL 5? Most people get stuck on #3. 🤔" },
  { n: 11, category: "Engagement", duration: "40–50s", title: "My First Geometry Box vs Now", hook: "1990s vs 2024 — which one did YOU have? 👇" },
  { n: 12, category: "Engagement", duration: "40–50s", title: "Rate Your Desk Setup", hook: "Rate this desk setup out of 10. It's all Omega. 👇" },
  { n: 13, category: "Behind the Scenes", duration: "45–55s", title: "In-House Printing Facility Tour", hook: "Most companies outsource printing. We don't. 🖨️" },
  { n: 14, category: "Product Showcase", duration: "60s", title: "275 Products in 60 Seconds", hook: "60 seconds. 275 products. All made in India. ⏱️" },
];

export const stationeryReelScript: ReelCard[] = [
  { n: 1, category: "Funny · Relatable", duration: "15–20s", title: "POV: You entered for one pen…", hook: "I'm just buying one pen..." },
  { n: 2, category: "Satisfying · Aesthetic", duration: "12–15s", title: "The Smoothest Pen Test", hook: "POV: You finally found THAT pen." },
  { n: 3, category: "Trend · Relatable", duration: "15–20s", title: "Student Starter Pack", hook: "Student starter pack in 2026:" },
  { n: 4, category: "Comedy", duration: "15s", title: "Expectation vs Reality", hook: "Me after buying aesthetic stationery..." },
  { n: 5, category: "Viral · Satisfying", duration: "12–15s", title: "More Satisfying Than Therapy", hook: "Things more satisfying than therapy..." },
];

export const vrikshReelScript: ReelCard[] = [
  { n: 1, category: "Recipe", duration: "45–60s", title: "Dal Tadka in 15 Minutes", hook: "Ye dal hotel waali se bhi achhi kyun lagti hai?" },
  { n: 2, category: "Recipe", duration: "30–40s", title: "Perfect Jeera Rice — Every Grain Separated", hook: "8mm → 16mm. Asli Basmati ki pehchaan." },
  { n: 3, category: "Recipe", duration: "45–55s", title: "Aloo Paratha — Maa Ke Haath Jaisa", hook: "Maa ke haath ki roti ka raaz? Asli chakki atta." },
  { n: 4, category: "Recipe", duration: "30–35s", title: "Masala Chai in 5 Minutes — Morning Ritual", hook: "Subah ki chai sahi bane, toh din bhi sahi jaata hai. ☕" },
  { n: 5, category: "Behind the Product", duration: "55–70s", title: "Stone Chakki — Behind Our Atta", hook: "Ye hai woh chakki — jahaan se Vriksh Atta aata hai." },
  { n: 6, category: "Behind the Product", duration: "45–55s", title: "Cold Press Oil — Live Extraction", hook: "Zero heat. Zero chemicals. Sirf asli ras." },
  { n: 7, category: "Humour · Relatable", duration: "15–20s", title: "POV: Vriksh Masala Khola…", hook: "…aur poori building jaag gayi 🏢" },
  { n: 8, category: "Humour · Skit", duration: "25–35s", title: "Indian Maa vs Cold-Pressed Oil", hook: "When you try to be healthy at home 💪" },
  { n: 9, category: "Festival Campaign", duration: "45–55s", title: "Diwali Hamper — Gift Jo Dil Chhu Le", hook: "Is Diwali — gift something real. 🪔" },
  { n: 10, category: "Humour · Relatable", duration: "20–30s", title: "Zomato ₹280 vs Ghar Ka ₹35", hook: "Dal Chawal on Zomato… ₹280 😱" },
];

export const solidReelScript: ReelCard[] = [
  { n: 1, category: "Pain Point · Premium", duration: "30–35s", title: "Your Lighting Is Killing Your Interior", hook: "Acha interior bhi cheap lag sakta hai… sirf galat lighting ki wajah se." },
  { n: 2, category: "Compare · Viral", duration: "25s", title: "Cheap vs Premium Lighting", hook: "Difference dikha? Cheap lighting room ko destroy karti hai. SOLID creates atmosphere." },
  { n: 3, category: "Product · Cinematic", duration: "20–25s", title: "Track Light Cinematic Ad", hook: "Focus. Control. Precision. ⚡" },
  { n: 4, category: "Viral · Premium", duration: "25s", title: "If Apple Made Lights", hook: "Imagine if Apple made lighting." },
  { n: 5, category: "Transformation", duration: "35s", title: "The Showroom Transformation", hook: "Customers products nahi… experience buy karte hain." },
  { n: 6, category: "Commercial", duration: "30s", title: "Lights That Sell Products", hook: "Agar lighting sahi ho — products automatically premium lagte hain." },
  { n: 7, category: "B2B · Architect", duration: "20s", title: "Architect's Favorite", hook: "Every architect knows — lighting defines the space." },
  { n: 8, category: "Brand Story", duration: "25s", title: "Indian Brand. Global Feel.", hook: "Made in India. Built like global luxury brands." },
  { n: 9, category: "Product · Hero", duration: "15–18s", title: "Product Hero Reel", hook: "Anti-Glare · Precision Beam · Premium Finish." },
  { n: 10, category: "Viral Hook", duration: "25–30s", title: "Why Your Interior Looks Cheap", hook: "Your interior isn't bad. Your LIGHTING is." },
];

export const accdReelScript: ReelCard[] = [
  { n: 1, category: "Event Highlight", duration: "60s", title: "Annual Ball 2026 — Highlight Reel", hook: "The night Delhi's air cargo industry waits for all year." },
  { n: 2, category: "Leadership", duration: "30–45s", title: "Meet Our President", hook: "The person who leads 235 air cargo professionals in Delhi…" },
  { n: 3, category: "Community", duration: "30s", title: "A Day at the Monthly Lunch", hook: "Every month, Delhi's air cargo community comes together." },
  { n: 4, category: "Education", duration: "30s", title: "Cargo Tip in 30 Seconds", hook: "One cargo tip. 30 seconds. Every Wednesday." },
  { n: 5, category: "Community", duration: "45–60s", title: "Outstation Trip Diary", hook: "When the cargo industry takes a break…" },
  { n: 6, category: "Industry Stat", duration: "20–30s", title: "Did You Know? — Industry Stat", hook: "1,000,000 MT of cargo through Delhi Airport. Every year." },
  { n: 7, category: "Brand Story", duration: "45s", title: "Founders Day — 47 Years of History", hook: "1977. A group of Delhi's cargo professionals had a vision." },
  { n: 8, category: "Community", duration: "30s", title: "Dance Evening / Family Picnic", hook: "Delhi's cargo community knows how to have fun. 💃" },
];

export const projects: Project[] = [
  {
    slug: "4-knotts-stationery",
    title: "4 Knotts Stationery",
    tag: "Stationery Brand · Web Experience",
    shortIntro:
      "A premium stationery brand experience designed for tactile delight.",
    longIntro:
      "A modern and visually engaging stationery experience — every page treated like a layout in a print catalogue, with refined typography and rhythmic spacing that lets each product breathe.",
    description:
      "A modern and visually engaging website experience designed for a stationery brand.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2024",
    accent: "from-[#FF8FB1] via-[#B47BFF] to-[#6C63FF]",
    themeBg: "#1a1422",
    themePrimary: "#FF8FB1",
    themeAccent: "#6C63FF",
    // 👇 Drop your image paths here once files are in /public/projects/4-knotts-stationery/
    // logoImage: "/projects/4-knotts-stationery/logo.png",
    // coverImage: "/projects/4-knotts-stationery/cover.jpg",
    // previewImages: [
    //   "/projects/4-knotts-stationery/preview/01.jpg",
    //   "/projects/4-knotts-stationery/preview/02.jpg",
    //   "/projects/4-knotts-stationery/preview/03.jpg",
    // ],
    reelScript: stationeryReelScript,
    gallery: [
      // Add `src: "/projects/4-knotts-stationery/gallery/01.jpg"` to any item to use a real image.
      { ratio: "wide", theme: "from-[#FF8FB1] to-[#6C63FF]", label: "Notebook Series", caption: "Editorial product layout" },
      { ratio: "square", theme: "from-[#B47BFF] to-[#FF8FB1]", label: "Brand Colors" },
      { ratio: "square", theme: "from-[#2a1a35] to-[#6C63FF]", label: "Type System" },
      { ratio: "wide", theme: "from-[#6C63FF] to-[#FF8FB1]", label: "Collection Pages", caption: "Story-led shopping" },
    ],
    frame: [
      { kind: "nav", brand: "4K. Stationery" },
      {
        kind: "hero",
        title: "Crafted to hold ideas.",
        subtitle: "A modern stationery line, made for the everyday.",
        cta: "Shop the collection",
      },
      { kind: "marquee", words: ["NEW · Linen Notebooks", "Limited Drops", "Hand-bound", "Free shipping over ₹999"] },
      {
        kind: "grid",
        items: [
          { title: "Linen Notebook", sub: "₹ 899" },
          { title: "Brass Pen", sub: "₹ 1,499" },
          { title: "Card Set", sub: "₹ 499" },
          { title: "Journal Bundle", sub: "₹ 2,299" },
        ],
      },
      {
        kind: "splitImage",
        title: "Built around small daily rituals.",
        body: "Materials chosen with intent. Finishes you want to touch. Pages that make you want to write.",
      },
      { kind: "feature", title: "A studio behind every product.", body: "Designed in Delhi. Limited runs. Refilled with care." },
      { kind: "cta", title: "Find your everyday companion.", cta: "Explore collection" },
      { kind: "footer", brand: "4 Knotts Stationery" },
    ],
  },
  {
    slug: "omega",
    title: "Omega",
    tag: "Corporate · Brand Website",
    shortIntro:
      "A confident corporate presence, redesigned to match the brand's weight.",
    longIntro:
      "A complete redesign focused on creating a stronger digital presence — restrained, certain, and unmistakably modern.",
    description:
      "A complete redesign experience focused on creating a stronger digital presence.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2024",
    accent: "from-[#00E5FF] via-[#6C63FF] to-[#9B5CFF]",
    themeBg: "#0d1322",
    themePrimary: "#00E5FF",
    themeAccent: "#6C63FF",
    // 👇 Drop your image paths here once files are in /public/projects/omega/
    // logoImage: "/projects/omega/logo.png",
    // coverImage: "/projects/omega/cover.jpg",
    // previewImages: [
    //   "/projects/omega/preview/01.jpg",
    //   "/projects/omega/preview/02.jpg",
    //   "/projects/omega/preview/03.jpg",
    // ],
    reelScript: omegaReelScript,
    gallery: [
      // Add `src: "/projects/omega/gallery/01.jpg"` to any item to use a real image.
      { ratio: "wide", theme: "from-[#0e1a2c] to-[#00E5FF]", label: "Landing", caption: "Brand-led hero" },
      { ratio: "square", theme: "from-[#6C63FF] to-[#00E5FF]", label: "Capabilities" },
      { ratio: "square", theme: "from-[#0e1a2c] to-[#6C63FF]", label: "Case Studies" },
      { ratio: "wide", theme: "from-[#00E5FF] to-[#6C63FF]", label: "Investor Page", caption: "Quiet authority" },
    ],
    frame: [
      { kind: "nav", brand: "Ω OMEGA" },
      {
        kind: "hero",
        title: "Engineered for the long view.",
        subtitle: "Building infrastructure that scales with confidence.",
        cta: "Explore Omega",
      },
      {
        kind: "grid",
        items: [
          { title: "Infrastructure", sub: "Capability" },
          { title: "Energy", sub: "Capability" },
          { title: "Logistics", sub: "Capability" },
          { title: "Advisory", sub: "Capability" },
        ],
      },
      {
        kind: "splitImage",
        title: "A track record measured in decades.",
        body: "Across geographies, industries, and economic cycles — delivering projects of consequence.",
      },
      { kind: "marquee", words: ["Trusted by 120+ partners", "ISO 9001 · 14001", "Listed on NSE", "Operating across 14 states"] },
      { kind: "feature", title: "Leadership rooted in craft.", body: "Decades of operating experience guiding every engagement." },
      { kind: "cta", title: "Partner with Omega.", cta: "Start a conversation" },
      { kind: "footer", brand: "OMEGA · 2024" },
    ],
  },
  {
    slug: "vriksh",
    title: "Vriksh",
    tag: "Nature · Sustainability",
    shortIntro:
      "A visually rich storytelling platform celebrating regenerative ecosystems.",
    longIntro:
      "A platform built around sustainability and environmental awareness — soft greens, organic curves, and a slower scroll cadence that invites you to stay.",
    description:
      "A visually rich platform built around sustainability and environmental awareness.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2024",
    accent: "from-[#7CFFB2] via-[#00E5FF] to-[#6C63FF]",
    themeBg: "#0e1a16",
    themePrimary: "#7CFFB2",
    themeAccent: "#00E5FF",
    // 👇 Drop your image paths here once files are in /public/projects/vriksh/
    // logoImage: "/projects/vriksh/logo.png",
    // coverImage: "/projects/vriksh/cover.jpg",
    // previewImages: [
    //   "/projects/vriksh/preview/01.jpg",
    //   "/projects/vriksh/preview/02.jpg",
    //   "/projects/vriksh/preview/03.jpg",
    // ],
    reelScript: vrikshReelScript,
    gallery: [
      // Add `src: "/projects/vriksh/gallery/01.jpg"` to any item to use a real image.
      { ratio: "wide", theme: "from-[#0e1a16] to-[#7CFFB2]", label: "Story Hero", caption: "Cinematic intro" },
      { ratio: "square", theme: "from-[#7CFFB2] to-[#00E5FF]", label: "Tree of Impact" },
      { ratio: "square", theme: "from-[#0e1a16] to-[#00E5FF]", label: "Field Diaries" },
      { ratio: "wide", theme: "from-[#00E5FF] to-[#7CFFB2]", label: "Get Involved", caption: "Community pathways" },
    ],
    frame: [
      { kind: "nav", brand: "vriksh" },
      {
        kind: "hero",
        title: "Plant a future you can touch.",
        subtitle: "Stories from the people regenerating our forests.",
        cta: "Read the field diaries",
      },
      { kind: "marquee", words: ["42,000 trees planted", "Across 18 villages", "12 native species", "Powered by community"] },
      {
        kind: "grid",
        items: [
          { title: "Diary 01", sub: "Aravalli Foothills" },
          { title: "Diary 02", sub: "Western Ghats" },
          { title: "Diary 03", sub: "Sundarbans" },
          { title: "Diary 04", sub: "Himachal" },
        ],
      },
      {
        kind: "splitImage",
        title: "Quiet work, measurable impact.",
        body: "We work alongside local stewards — planting native species, restoring soil, and listening to land.",
      },
      { kind: "feature", title: "Funded by readers like you.", body: "Every diary you read sustains the next planting season." },
      { kind: "cta", title: "Join the next planting.", cta: "Get involved" },
      { kind: "footer", brand: "vriksh" },
    ],
  },
  {
    slug: "accd",
    title: "ACCD",
    tag: "Air Cargo Club of Delhi",
    shortIntro:
      "A dignified, future-forward digital home for an industry institution.",
    longIntro:
      "A premium digital presence for the Air Cargo Club of Delhi — editorial, considered, and built to host the conversations that move an industry.",
    description:
      "A premium digital presence designed for an organization with modern aesthetics and authority.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2024",
    accent: "from-[#F0B96A] via-[#6C63FF] to-[#00E5FF]",
    themeBg: "#0f0e1c",
    themePrimary: "#F0B96A",
    themeAccent: "#6C63FF",
    // 👇 Drop your image paths here once files are in /public/projects/accd/
    // logoImage: "/projects/accd/logo.png",
    // coverImage: "/projects/accd/cover.jpg",
    // previewImages: [
    //   "/projects/accd/preview/01.jpg",
    //   "/projects/accd/preview/02.jpg",
    //   "/projects/accd/preview/03.jpg",
    // ],
    reelScript: accdReelScript,
    gallery: [
      // Add `src: "/projects/accd/gallery/01.jpg"` to any item to use a real image.
      { ratio: "wide", theme: "from-[#0f0e1c] to-[#F0B96A]", label: "Members Hub", caption: "Authority by design" },
      { ratio: "square", theme: "from-[#F0B96A] to-[#6C63FF]", label: "Events" },
      { ratio: "square", theme: "from-[#0f0e1c] to-[#6C63FF]", label: "Press Room" },
      { ratio: "wide", theme: "from-[#6C63FF] to-[#F0B96A]", label: "Annual Report", caption: "Editorial layout" },
    ],
    frame: [
      { kind: "nav", brand: "ACCD" },
      {
        kind: "hero",
        title: "The voice of India's air cargo industry.",
        subtitle: "Shaping policy. Connecting members. Moving an industry forward.",
        cta: "Become a member",
      },
      {
        kind: "grid",
        items: [
          { title: "Members", sub: "320+" },
          { title: "Years", sub: "Since 1986" },
          { title: "Chapters", sub: "Delhi · NCR" },
          { title: "Events", sub: "Annual" },
        ],
      },
      {
        kind: "splitImage",
        title: "A forum for the industry, by the industry.",
        body: "Convening leaders, shaping standards, and championing the people who keep cargo moving.",
      },
      { kind: "marquee", words: ["Annual Convention · 2024", "Industry briefings", "Members-only research", "Policy advocacy"] },
      { kind: "feature", title: "Press, research and policy.", body: "An ongoing publication and member-only intelligence." },
      { kind: "cta", title: "Membership starts here.", cta: "Request invite" },
      { kind: "footer", brand: "Air Cargo Club of Delhi" },
    ],
  },
  {
    slug: "veloura",
    title: "Veloura by 4Knotts",
    tag: "Luxury Beauty · Brand & E-Commerce",
    shortIntro:
      "A luxury beauty house where science meets the soul of luxury.",
    longIntro:
      "Veloura is a premium beauty and skincare brand — pure ingredients, honest formulas, crafted in India. The experience turns an everyday routine into an intentional ritual, with deep-plum elegance, gold detailing, and tactile motion throughout.",
    description:
      "A premium digital flagship for a luxury beauty brand — elegant, sensorial, and conversion-focused.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2026",
    accent: "from-[#1A0A2E] via-[#B76E79] to-[#C9A96E]",
    themeBg: "#100619",
    themePrimary: "#C9A96E",
    themeAccent: "#B76E79",
    // 👇 Drop your image paths here once files are in /public/projects/veloura/
    // logoImage: "/projects/veloura/logo.png",
    // coverImage: "/projects/veloura/cover.jpg",
    // previewImages: [ "/projects/veloura/preview/01.jpg", ... ],
    gallery: [
      // Add `src: "/projects/veloura/gallery/01.jpg"` to any item to use a real image.
      { ratio: "wide", theme: "from-[#1A0A2E] to-[#C9A96E]", label: "Landing", caption: "Sensorial hero" },
      { ratio: "square", theme: "from-[#B76E79] to-[#C9A96E]", label: "Eau de Parfum" },
      { ratio: "square", theme: "from-[#100619] to-[#B76E79]", label: "The Ritual" },
      { ratio: "wide", theme: "from-[#C9A96E] to-[#1A0A2E]", label: "Collection", caption: "Shop experience" },
    ],
    frame: [
      { kind: "nav", brand: "VELOURA" },
      {
        kind: "hero",
        title: "Where science meets the soul of luxury.",
        subtitle: "Pure ingredients. Honest formulas. Crafted in India.",
        cta: "Shop the collection",
      },
      { kind: "marquee", words: ["Saffron · Rose · Sandalwood", "Dermatologist tested", "Crafted in India", "Free shipping over ₹2,999"] },
      {
        kind: "grid",
        items: [
          { title: "Eau de Parfum", sub: "₹ 4,250" },
          { title: "Vitamin C Serum", sub: "₹ 2,890" },
          { title: "Repair Cream", sub: "₹ 3,400" },
          { title: "Luxury Oils", sub: "₹ 3,950" },
        ],
      },
      {
        kind: "splitImage",
        title: "A ritual, not a routine.",
        body: "From the wax-sealed envelope to the first drop — every detail is designed to feel intentional.",
      },
      { kind: "feature", title: "Honest beauty, fully disclosed.", body: "Ethically sourced botanicals and clinically proven actives. Nothing hidden, nothing harsh." },
      { kind: "cta", title: "Begin your ritual.", cta: "Explore Veloura" },
      { kind: "footer", brand: "Veloura by 4 Knotts" },
    ],
  },
  {
    slug: "solid",
    title: "SOLID",
    tag: "Lighting Brand · Marketing Site",
    shortIntro:
      "An LED lighting manufacturer's brand site — clean, confident, conversion-led.",
    longIntro:
      "A static marketing experience for Solid State Lights (SOLID) — Indian LED indoor lighting since 2004. Catalog-led architecture across 34 product models with WhatsApp-first contact and architect-grade presentation.",
    description:
      "A premium marketing website for an Indian LED lighting brand, with a 34-model catalog and WhatsApp-first enquiries.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2026",
    accent: "from-[#0A1B2E] via-[#005AAA] to-[#FDB813]",
    themeBg: "#0A1B2E",
    themePrimary: "#FDB813",
    themeAccent: "#005AAA",
    // 👇 Drop files in /public/projects/solid/  (logo.png, cover.jpg, gallery/, preview/)
    reelScript: solidReelScript,
    gallery: [
      { ratio: "wide", theme: "from-[#0A1B2E] to-[#FDB813]", label: "Landing", caption: "Architect-grade hero" },
      { ratio: "square", theme: "from-[#005AAA] to-[#FDB813]", label: "Catalog" },
      { ratio: "square", theme: "from-[#0A1B2E] to-[#005AAA]", label: "Product Detail" },
      { ratio: "wide", theme: "from-[#FDB813] to-[#005AAA]", label: "WhatsApp Flow", caption: "Frictionless enquiry" },
    ],
    frame: [
      { kind: "nav", brand: "SOLID" },
      {
        kind: "hero",
        title: "Lighting Everything.",
        subtitle: "Indian LED indoor lighting since 2004. 34 product models. Architect-grade.",
        cta: "View catalog",
      },
      { kind: "marquee", words: ["Since 2004", "34 product models", "Made in India", "ISI-grade drivers"] },
      {
        kind: "grid",
        items: [
          { title: "COB Downlite", sub: "SL CB 01–31" },
          { title: "LED Panels", sub: "Backlit · Edge-lit" },
          { title: "Track Lights", sub: "Retail · Hospitality" },
          { title: "Surface Lights", sub: "Architectural" },
        ],
      },
      {
        kind: "splitImage",
        title: "Engineered for spaces that demand more.",
        body: "From COB downlights to architectural panels — built in India for residences, offices, and retail.",
      },
      { kind: "feature", title: "Quality you can specify.", body: "ISI standards. Industry-grade drivers. Five-year peace of mind." },
      { kind: "cta", title: "Let's plan your lighting.", cta: "Talk on WhatsApp" },
      { kind: "footer", brand: "SOLID · Solid State Lights" },
    ],
  },
  {
    slug: "clearmychallan",
    title: "ClearMyChallan",
    tag: "Legal-Tech · Full-Stack Platform",
    shortIntro:
      "Advocate-assisted vehicle challan resolution — pay less, with a lawyer on your side.",
    longIntro:
      "A full-stack legal-tech platform for resolving vehicle challans through advocate assistance — starting as low as 60% of the original fine. Secure, encrypted, refund-backed, with Razorpay UPI payments and an end-to-end audit trail.",
    description:
      "A premium legal-tech platform: React + Node + Mongo, JWT auth, Razorpay UPI, and a pluggable challan-provider integration.",
    highlights: [
      "Modern UI",
      "Responsive design",
      "Interactive experience",
      "Smooth animations",
      "User-friendly design",
    ],
    year: "2026",
    accent: "from-[#0B1B3F] via-[#1D4ED8] to-[#5E86FB]",
    themeBg: "#0B1B3F",
    themePrimary: "#5E86FB",
    themeAccent: "#1D4ED8",
    // 👇 Drop files in /public/projects/clearmychallan/  (logo.png, cover.jpg, gallery/, preview/)
    gallery: [
      { ratio: "wide", theme: "from-[#0B1B3F] to-[#1D4ED8]", label: "Landing", caption: "Confidence-first hero" },
      { ratio: "square", theme: "from-[#1D4ED8] to-[#5E86FB]", label: "Challan Check" },
      { ratio: "square", theme: "from-[#0B1B3F] to-[#5E86FB]", label: "Advocate Match" },
      { ratio: "wide", theme: "from-[#5E86FB] to-[#1D4ED8]", label: "Razorpay Flow", caption: "Frictionless UPI" },
    ],
    frame: [
      { kind: "nav", brand: "ClearMyChallan" },
      {
        kind: "hero",
        title: "Resolve your challan with an advocate.",
        subtitle: "Starting as low as 60% of the fine. Secure, encrypted, refund-backed.",
        cta: "Check your challan",
      },
      { kind: "marquee", words: ["Advocate-assisted", "Razorpay UPI", "End-to-end encrypted", "Refund-backed"] },
      {
        kind: "grid",
        items: [
          { title: "Check Challan", sub: "Instant lookup" },
          { title: "Pay Lower", sub: "Up to 40% off" },
          { title: "Advocate Help", sub: "Verified panel" },
          { title: "Refund Backed", sub: "Risk-free" },
        ],
      },
      {
        kind: "splitImage",
        title: "We fight your case. You save up to 40%.",
        body: "Legal expertise paired with a frictionless payment flow — built for modern India.",
      },
      { kind: "feature", title: "Built like a fintech. Run like a law firm.", body: "JWT auth, encrypted payloads, and a MongoDB-backed audit trail on every case." },
      { kind: "cta", title: "Don't pay full. Pay smart.", cta: "Get started" },
      { kind: "footer", brand: "ClearMyChallan" },
    ],
  },
];

export const socials = [
  { name: "Instagram", url: "https://instagram.com", handle: "@4knottskreativ" },
  { name: "LinkedIn", url: "https://linkedin.com", handle: "/4knottskreativ" },
  { name: "Facebook", url: "https://facebook.com", handle: "/4knottskreativ" },
  { name: "YouTube", url: "https://youtube.com", handle: "@4knottskreativ" },
  { name: "Behance", url: "https://behance.net", handle: "/4knottskreativ" },
];
