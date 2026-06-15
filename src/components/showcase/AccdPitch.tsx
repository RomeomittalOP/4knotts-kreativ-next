import Image from "next/image";

const ACCD = "/projects/accd";
const LOGO = `${ACCD}/logo.png`;
const MASTER = `${ACCD}/gallery/Master Template.png`;
const SHOT_1 = `${ACCD}/gallery/Screenshot 2026-05-21 211317.png`;
const SHOT_2 = `${ACCD}/gallery/Screenshot 2026-05-25 004505.png`;

const INSTAGRAM = [
  `${ACCD}/instagram/ChatGPT Image May 19, 2026, 04_55_19 PM.png`,
  `${ACCD}/instagram/ChatGPT Image May 19, 2026, 04_55_22 PM.png`,
  `${ACCD}/instagram/ChatGPT Image May 19, 2026, 04_55_25 PM.png`,
  `${ACCD}/instagram/ChatGPT Image May 19, 2026, 04_55_27 PM.png`,
  `${ACCD}/instagram/ChatGPT Image May 19, 2026, 04_55_29 PM.png`,
  `${ACCD}/instagram/ChatGPT Image May 19, 2026, 04_55_31 PM.png`,
];

const NAVY = "#0a1628";
const NAVY_DEEP = "#050b14";
const GOLD = "#c9a25a";
const GOLD_SOFT = "#e8c98a";
const PAPER = "#f4ede0";

const SECTIONS = [
  { id: "cover", n: "01", label: "Cover" },
  { id: "summary", n: "02", label: "Executive Summary" },
  { id: "identity", n: "03", label: "Brand Identity" },
  { id: "website", n: "04", label: "Website Experience" },
  { id: "social", n: "05", label: "Social Media Strategy" },
  { id: "system", n: "06", label: "Visual Design System" },
  { id: "deliverables", n: "07", label: "Key Deliverables" },
  { id: "why", n: "08", label: "Why This Works" },
  { id: "future", n: "09", label: "Future Opportunities" },
  { id: "closing", n: "10", label: "Closing" },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span
        className="text-xs tracking-[0.4em] font-mono"
        style={{ color: GOLD }}
      >
        {n}
      </span>
      <span className="h-px w-12" style={{ background: GOLD }} />
      <span
        className="text-xs tracking-[0.35em] uppercase"
        style={{ color: PAPER, opacity: 0.7 }}
      >
        {label}
      </span>
    </div>
  );
}

export default function AccdPitch() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: NAVY_DEEP, color: PAPER }}
    >
      {/* Top meta bar */}
      <div
        className="sticky top-0 z-30 backdrop-blur-md border-b"
        style={{
          background: `${NAVY_DEEP}cc`,
          borderColor: `${GOLD}33`,
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between text-[11px] tracking-[0.3em] uppercase">
          <span style={{ color: GOLD }}>4 Knotts Kreativ</span>
          <span style={{ color: PAPER, opacity: 0.6 }}>
            ACCD · Confidential Pitch Document
          </span>
          <span style={{ color: PAPER, opacity: 0.6 }}>2026</span>
        </div>
      </div>

      {/* ============ 01 COVER ============ */}
      <section
        id="cover"
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-8 py-24"
        style={{
          background: `radial-gradient(ellipse at center, ${NAVY} 0%, ${NAVY_DEEP} 70%)`,
        }}
      >
        <div className="text-center max-w-3xl">
          <div className="mb-12 inline-block">
            <Image
              src={LOGO}
              alt="ACCD"
              width={220}
              height={220}
              className="mx-auto"
              priority
            />
          </div>
          <p
            className="text-[11px] tracking-[0.45em] uppercase mb-6"
            style={{ color: GOLD }}
          >
            A Digital Transformation Proposal
          </p>
          <h1
            className="font-display text-5xl md:text-7xl leading-[1.05] font-light mb-8"
            style={{ color: PAPER }}
          >
            Positioning ACCD as the definitive digital voice of India&rsquo;s
            air cargo community.
          </h1>
          <div
            className="mx-auto w-24 h-px mb-8"
            style={{ background: GOLD }}
          />
          <div className="text-sm tracking-[0.2em] uppercase space-y-2 opacity-80">
            <p>Prepared by &mdash; 4 Knotts Kreativ</p>
            <p>For &mdash; Air Cargo Club of Delhi</p>
            <p style={{ color: GOLD }}>
              Office of the President &amp; Executive Committee
            </p>
          </div>
          <p
            className="mt-16 text-[10px] tracking-[0.4em] uppercase"
            style={{ color: PAPER, opacity: 0.4 }}
          >
            Confidential &mdash; For ACCD leadership review
          </p>
        </div>
      </section>

      {/* ============ 02 EXECUTIVE SUMMARY ============ */}
      <section
        id="summary"
        className="px-8 py-32"
        style={{ background: NAVY_DEEP }}
      >
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel n="02" label="Executive Summary" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-12 max-w-3xl">
            The Air Cargo Club of Delhi sits at the intersection of policy,
            trade, and the people who move India&rsquo;s economy by air.
          </h2>
          <p className="text-lg leading-relaxed opacity-85 mb-8 max-w-3xl">
            Its digital presence should carry the same weight. This proposal
            presents a completed brand and digital framework engineered for
            ACCD &mdash; a unified website, identity system, and social media
            language that reflect the Club&rsquo;s authority within the air
            cargo and logistics sector.
          </p>
          <p className="text-lg leading-relaxed opacity-85 mb-12 max-w-3xl">
            The work has been built to do three things:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                k: "01",
                t: "Establish Authority",
                d: "Position ACCD as the recognised industry forum for air cargo professionals in the National Capital Region.",
              },
              {
                k: "02",
                t: "Strengthen Trust",
                d: "Build member confidence through a consistent, executive-grade brand voice across every touchpoint.",
              },
              {
                k: "03",
                t: "Own the Platform",
                d: "Create a publishing platform for industry insight, events, advocacy, and member engagement &mdash; owned by ACCD.",
              },
            ].map((it) => (
              <div
                key={it.k}
                className="p-8 border"
                style={{
                  borderColor: `${GOLD}40`,
                  background: `${NAVY}80`,
                }}
              >
                <p
                  className="text-xs tracking-[0.4em] font-mono mb-4"
                  style={{ color: GOLD }}
                >
                  {it.k}
                </p>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: GOLD_SOFT }}
                >
                  {it.t}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-80"
                  dangerouslySetInnerHTML={{ __html: it.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 BRAND IDENTITY ============ */}
      <section
        id="identity"
        className="px-8 py-32"
        style={{ background: NAVY }}
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel n="03" label="Brand Identity" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            An identity engineered for boardrooms, ministries, and global cargo
            forums.
          </h2>
          <p className="text-lg opacity-80 mb-16 max-w-2xl">
            Refined to operate at the level ACCD&rsquo;s membership expects.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="aspect-square flex items-center justify-center rounded-sm"
              style={{
                background: `linear-gradient(135deg, ${NAVY_DEEP}, ${NAVY})`,
                border: `1px solid ${GOLD}30`,
              }}
            >
              <Image
                src={LOGO}
                alt="ACCD logo"
                width={320}
                height={320}
                className="opacity-95"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  t: "Logo System",
                  d: "A primary mark for corporate use and a refined variant for digital and merchandise applications.",
                },
                {
                  t: "Palette",
                  d: "Deep aviation blue, gold accents, and neutral greys &mdash; authoritative, professional, unmistakably aviation.",
                },
                {
                  t: "Typography",
                  d: "Corporate serif for headlines paired with a clean sans-serif for body. Legible at scale, dignified in tone.",
                },
                {
                  t: "Voice",
                  d: "Measured, informed, member-first. Never promotional. Always credible.",
                },
              ].map((it) => (
                <div
                  key={it.t}
                  className="border-l pl-6"
                  style={{ borderColor: GOLD }}
                >
                  <h3
                    className="font-display text-xl mb-2"
                    style={{ color: GOLD_SOFT }}
                  >
                    {it.t}
                  </h3>
                  <p
                    className="text-sm opacity-80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: it.d }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* palette swatches */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { c: NAVY_DEEP, n: "Aviation Navy" },
              { c: NAVY, n: "Cargo Blue" },
              { c: GOLD, n: "Industry Gold" },
              { c: PAPER, n: "Ivory" },
            ].map((s) => (
              <div key={s.n}>
                <div
                  className="h-24 mb-2"
                  style={{
                    background: s.c,
                    border: `1px solid ${GOLD}30`,
                  }}
                />
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-70">
                  {s.n}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 WEBSITE EXPERIENCE ============ */}
      <section
        id="website"
        className="px-8 py-32"
        style={{ background: NAVY_DEEP }}
      >
        <div className="max-w-[1300px] mx-auto">
          <SectionLabel n="04" label="Website Experience" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            The Club&rsquo;s digital headquarters.
          </h2>
          <p className="text-lg opacity-80 mb-12 max-w-2xl">
            One authoritative source for members, partners, government
            stakeholders, and the wider industry.
          </p>

          <div
            className="relative w-full overflow-hidden mb-16 rounded-sm"
            style={{ border: `1px solid ${GOLD}40` }}
          >
            <Image
              src={MASTER}
              alt="ACCD Website Master Template"
              width={2400}
              height={1500}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                t: "Industry-leading homepage",
                d: "Events, advocacy, and member voices on a single screen &mdash; ACCD&rsquo;s leadership communicated at first glance.",
              },
              {
                t: "Members&rsquo; section",
                d: "Directory, leadership, committees, verified communication. Designed for trust.",
              },
              {
                t: "Events &amp; engagements hub",
                d: "Conferences, networking evenings, training programs, and trade interactions in one place.",
              },
              {
                t: "Industry insights",
                d: "The Club speaking to the industry &mdash; on policy, trade, and operational priorities.",
              },
              {
                t: "Mobile-first responsive",
                d: "Built for executives consuming content between meetings and airport visits.",
              },
              {
                t: "The digital office",
                d: "Engineered to feel less like a community page and more like the digital office of an industry body.",
              },
            ].map((it) => (
              <div key={it.t} className="flex gap-4">
                <div
                  className="mt-2 w-2 h-2 rounded-full shrink-0"
                  style={{ background: GOLD }}
                />
                <div>
                  <h3
                    className="font-display text-lg mb-1"
                    style={{ color: GOLD_SOFT }}
                    dangerouslySetInnerHTML={{ __html: it.t }}
                  />
                  <p
                    className="text-sm opacity-75 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: it.d }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 05 SOCIAL MEDIA STRATEGY ============ */}
      <section
        id="social"
        className="px-8 py-32"
        style={{ background: NAVY }}
      >
        <div className="max-w-[1300px] mx-auto">
          <SectionLabel n="05" label="Social Media Strategy" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            Four pillars matched to the Club&rsquo;s actual mandate.
          </h2>
          <p className="text-lg opacity-80 mb-16 max-w-2xl">
            Not a generic agency content calendar. A publishing system designed
            for an industry body.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {INSTAGRAM.map((src, i) => (
              <div
                key={src}
                className="aspect-square overflow-hidden rounded-sm"
                style={{ border: `1px solid ${GOLD}30` }}
              >
                <Image
                  src={src}
                  alt={`ACCD social creative ${i + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                n: "01",
                t: "Industry Authority",
                d: "Policy commentary, cargo industry data, customs and trade updates &mdash; positioning ACCD as a thought leader, not a noticeboard.",
              },
              {
                n: "02",
                t: "Member Spotlight",
                d: "Recognising member firms, leaders, and milestones. Strengthening the sense of belonging that defines the Club.",
              },
              {
                n: "03",
                t: "Events &amp; Engagements",
                d: "Pre-event anticipation, live coverage, and post-event recall &mdash; extending impact well beyond the venue.",
              },
              {
                n: "04",
                t: "Behind the Cargo",
                d: "Humanising the industry &mdash; the operations, the people, the late nights at the airport. Engagement without losing stature.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="p-8"
                style={{
                  background: NAVY_DEEP,
                  border: `1px solid ${GOLD}40`,
                }}
              >
                <p
                  className="text-xs tracking-[0.4em] font-mono mb-3"
                  style={{ color: GOLD }}
                >
                  PILLAR {p.n}
                </p>
                <h3
                  className="font-display text-2xl mb-3"
                  style={{ color: GOLD_SOFT }}
                  dangerouslySetInnerHTML={{ __html: p.t }}
                />
                <p
                  className="text-sm leading-relaxed opacity-80"
                  dangerouslySetInnerHTML={{ __html: p.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 VISUAL DESIGN SYSTEM ============ */}
      <section
        id="system"
        className="px-8 py-32"
        style={{ background: NAVY_DEEP }}
      >
        <div className="max-w-[1300px] mx-auto">
          <SectionLabel n="06" label="Visual Design System" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            A documented system. No drift. No off-brand output.
          </h2>
          <p className="text-lg opacity-80 mb-16 max-w-2xl">
            The infrastructure that underpins everything ACCD will publish from
            this point forward.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div
              className="overflow-hidden rounded-sm"
              style={{ border: `1px solid ${GOLD}40` }}
            >
              <Image
                src={SHOT_1}
                alt="ACCD design system reference"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div
              className="overflow-hidden rounded-sm"
              style={{ border: `1px solid ${GOLD}40` }}
            >
              <Image
                src={SHOT_2}
                alt="ACCD design system reference"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                t: "Grid &amp; layout",
                d: "Consistent structure across web, social, presentations, and print.",
              },
              {
                t: "Imagery direction",
                d: "Aircraft, freight floors, GSE, cargo terminals, real people. Not stock.",
              },
              {
                t: "Iconography",
                d: "Custom set tuned to the cargo, customs, and logistics vocabulary.",
              },
              {
                t: "Templates",
                d: "Pre-built decks, event banners, member communication, social formats.",
              },
            ].map((it) => (
              <div
                key={it.t}
                className="p-6"
                style={{ background: NAVY, border: `1px solid ${GOLD}30` }}
              >
                <h3
                  className="font-display text-base mb-2"
                  style={{ color: GOLD_SOFT }}
                  dangerouslySetInnerHTML={{ __html: it.t }}
                />
                <p className="text-xs opacity-75 leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 07 KEY DELIVERABLES ============ */}
      <section
        id="deliverables"
        className="px-8 py-32"
        style={{ background: NAVY }}
      >
        <div className="max-w-[1100px] mx-auto">
          <SectionLabel n="07" label="Key Deliverables" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            What is on the table.
          </h2>
          <p className="text-lg opacity-80 mb-16 max-w-2xl">
            Every deliverable is owned by ACCD &mdash; full rights, full source
            files, full handover.
          </p>

          <div className="divide-y" style={{ borderColor: `${GOLD}30` }}>
            {[
              {
                w: "Brand Identity",
                d: "Refined logo system, palette, typography, voice guidelines",
              },
              {
                w: "Website",
                d: "Full design and build of the ACCD digital headquarters",
              },
              {
                w: "Social Media",
                d: "Strategy, content pillars, monthly publishing framework",
              },
              {
                w: "Visual System",
                d: "Master template, presentation decks, event collateral templates",
              },
              {
                w: "Member Communication",
                d: "Email templates, newsletter framework, official letter formats",
              },
              {
                w: "Governance",
                d: "Brand usage guidelines for committees, partners, and members",
              },
            ].map((row, i) => (
              <div
                key={row.w}
                className="grid grid-cols-12 gap-4 py-6 items-baseline"
                style={{ borderTop: i === 0 ? `1px solid ${GOLD}40` : "none", borderBottom: `1px solid ${GOLD}20` }}
              >
                <span
                  className="col-span-1 text-xs font-mono tracking-[0.3em]"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="col-span-4 font-display text-xl"
                  style={{ color: GOLD_SOFT }}
                >
                  {row.w}
                </h3>
                <p className="col-span-7 text-sm opacity-80 leading-relaxed">
                  {row.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 08 WHY THIS WORKS ============ */}
      <section
        id="why"
        className="px-8 py-32"
        style={{ background: NAVY_DEEP }}
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel n="08" label="Why This Works For ACCD" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            This is not a generic refresh.
          </h2>
          <p className="text-lg opacity-80 mb-16 max-w-2xl">
            Every decision was shaped by the realities of the air cargo
            industry and ACCD&rsquo;s specific position within it.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                t: "Executive-grade by default",
                d: "Reflects the seniority of ACCD&rsquo;s membership and the audiences it engages &mdash; ministries, regulators, airlines, freight forwarders, ground handlers, customs.",
              },
              {
                t: "Built for credibility, not virality",
                d: "Engineered to earn trust over years, not chase short-term reach.",
              },
              {
                t: "Operationally realistic",
                d: "Templates and systems designed for a Club secretariat &mdash; not a full-time marketing department.",
              },
              {
                t: "Industry-native",
                d: "Air cargo terminology, workflows, and stakeholder map are built into the structure &mdash; not bolted on.",
              },
              {
                t: "A platform, not a project",
                d: "What ACCD receives is a foundation that grows with the Club&rsquo;s agenda over the next decade.",
              },
              {
                t: "Member-first throughout",
                d: "From homepage to social grid, the experience is built around the people the Club exists to serve.",
              },
            ].map((it) => (
              <div
                key={it.t}
                className="p-8"
                style={{
                  background: NAVY,
                  border: `1px solid ${GOLD}40`,
                }}
              >
                <h3
                  className="font-display text-xl mb-3"
                  style={{ color: GOLD_SOFT }}
                  dangerouslySetInnerHTML={{ __html: it.t }}
                />
                <p
                  className="text-sm opacity-80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: it.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 09 FUTURE OPPORTUNITIES ============ */}
      <section
        id="future"
        className="px-8 py-32"
        style={{ background: NAVY }}
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel n="09" label="Future Opportunities" />
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6 max-w-3xl">
            Once the foundation is live, the Club extends into higher-impact
            territory.
          </h2>
          <p className="text-lg opacity-80 mb-16 max-w-2xl">
            Each module builds on the system already delivered.
          </p>

          <div className="space-y-6">
            {[
              {
                t: "ACCD Digital Yearbook",
                d: "An annual flagship publication archiving the Club&rsquo;s year, distributed digitally to the industry.",
              },
              {
                t: "Members-only Portal",
                d: "Gated access to advocacy papers, event recordings, leadership directories, and trade intelligence.",
              },
              {
                t: "ACCD Insights",
                d: "A quarterly industry brief positioning the Club as a primary commentator on Indian air cargo.",
              },
              {
                t: "Event Microsites",
                d: "Dedicated digital experiences for the Club&rsquo;s flagship conferences and recognition nights.",
              },
              {
                t: "Government &amp; Trade Liaison Toolkit",
                d: "Branded representation collateral for delegations, MoUs, and policy submissions.",
              },
              {
                t: "Multilingual Outreach",
                d: "Extending key communication into Hindi and regional languages for broader industry inclusion.",
              },
            ].map((it, i) => (
              <div
                key={it.t}
                className="grid grid-cols-12 gap-6 items-baseline py-6"
                style={{ borderTop: `1px solid ${GOLD}30` }}
              >
                <span
                  className="col-span-1 font-mono text-xs tracking-[0.3em]"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="col-span-4 font-display text-xl"
                  style={{ color: GOLD_SOFT }}
                  dangerouslySetInnerHTML={{ __html: it.t }}
                />
                <p
                  className="col-span-7 text-sm opacity-80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: it.d }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10 CLOSING ============ */}
      <section
        id="closing"
        className="relative min-h-[92vh] flex flex-col items-center justify-center px-8 py-32"
        style={{
          background: `radial-gradient(ellipse at center, ${NAVY} 0%, ${NAVY_DEEP} 70%)`,
        }}
      >
        <div className="text-center max-w-3xl">
          <Image
            src={LOGO}
            alt="ACCD"
            width={180}
            height={180}
            className="mx-auto mb-12 opacity-95"
          />
          <div
            className="mx-auto w-16 h-px mb-10"
            style={{ background: GOLD }}
          />
          <p
            className="font-display text-3xl md:text-5xl italic font-light leading-tight mb-16"
            style={{ color: PAPER }}
          >
            &ldquo;Built for the industry that keeps India moving.&rdquo;
          </p>

          <div className="space-y-3 mb-16">
            <p
              className="text-sm tracking-[0.4em] uppercase"
              style={{ color: GOLD }}
            >
              4 Knotts Kreativ
            </p>
            <p className="text-xs tracking-[0.35em] uppercase opacity-70">
              Brand &middot; Digital &middot; Strategy
            </p>
          </div>

          <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-2">
            For the attention of the
          </p>
          <p
            className="text-sm tracking-[0.3em] uppercase mb-12"
            style={{ color: GOLD_SOFT }}
          >
            ACCD Executive Committee
          </p>
          <p className="text-sm opacity-80">
            We look forward to taking this forward.
          </p>
        </div>
      </section>

      {/* Section index — desktop */}
      <nav
        aria-label="Sections"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-3"
      >
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span
              className="text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: GOLD_SOFT }}
            >
              {s.label}
            </span>
            <span
              className="w-6 h-px transition-all group-hover:w-10"
              style={{ background: GOLD }}
            />
          </a>
        ))}
      </nav>
    </main>
  );
}
