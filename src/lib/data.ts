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
};

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
];

export const socials = [
  { name: "Instagram", url: "https://instagram.com", handle: "@4knottskreativ" },
  { name: "LinkedIn", url: "https://linkedin.com", handle: "/4knottskreativ" },
  { name: "Facebook", url: "https://facebook.com", handle: "/4knottskreativ" },
  { name: "YouTube", url: "https://youtube.com", handle: "@4knottskreativ" },
  { name: "Behance", url: "https://behance.net", handle: "/4knottskreativ" },
];
