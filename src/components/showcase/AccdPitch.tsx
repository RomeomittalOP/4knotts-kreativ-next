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

const INK = "#05080f";
const NIGHT = "#0a1220";
const PAPER = "#f3ede0";
const GOLD = "#c8a35a";
const GOLD_SOFT = "#e0c489";
const MUTED = "rgba(243,237,224,0.55)";

function SectionHeader({
  n,
  kicker,
  title,
  intro,
}: {
  n: string;
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="flex items-center gap-5 mb-10">
        <span
          className="font-mono text-[10px] tracking-[0.5em]"
          style={{ color: GOLD }}
        >
          {n}
        </span>
        <span className="h-px w-16" style={{ background: GOLD }} />
        <span
          className="text-[10px] tracking-[0.45em] uppercase"
          style={{ color: MUTED }}
        >
          {kicker}
        </span>
      </div>
      <h2
        className="font-display font-light tracking-[-0.01em] text-[2.25rem] leading-[1.1] md:text-[3.5rem] md:leading-[1.05] max-w-[22ch]"
        style={{ color: PAPER }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {intro && (
        <p
          className="mt-8 max-w-2xl text-[1.05rem] leading-[1.7] md:text-[1.15rem]"
          style={{ color: MUTED }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function GoldRule({ width = "w-14" }: { width?: string }) {
  return <span className={`block h-px ${width}`} style={{ background: GOLD }} />;
}

export default function AccdPitch() {
  return (
    <div
      className="relative"
      style={{
        background: INK,
        color: PAPER,
        fontFeatureSettings: '"ss01","ss02","kern"',
      }}
    >
      {/* faint grain backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* ============ 01 COVER ============ */}
      <section
        id="cover"
        className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 py-24"
        style={{
          background: `radial-gradient(ellipse at 50% 35%, ${NIGHT} 0%, ${INK} 70%)`,
        }}
      >
        <div className="relative z-10 w-full max-w-4xl text-center">
          <p
            className="text-[10px] tracking-[0.55em] uppercase mb-12"
            style={{ color: GOLD }}
          >
            A Confidential Proposal
          </p>

          <div className="mb-14 inline-block">
            <Image
              src={LOGO}
              alt="ACCD"
              width={200}
              height={200}
              className="mx-auto"
              priority
            />
          </div>

          <h1
            className="font-display font-light leading-[1.02] tracking-[-0.02em] text-[2.5rem] md:text-[5rem]"
            style={{ color: PAPER }}
          >
            The digital voice of
            <br />
            <em
              className="not-italic"
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: GOLD_SOFT,
              }}
            >
              India&rsquo;s air cargo
            </em>
            <br />
            community.
          </h1>

          <div className="my-12 flex items-center justify-center gap-4">
            <GoldRule />
            <span
              className="text-[10px] tracking-[0.45em] uppercase"
              style={{ color: MUTED }}
            >
              A digital transformation
            </span>
            <GoldRule />
          </div>

          <div className="space-y-2 text-[11px] tracking-[0.35em] uppercase">
            <p style={{ color: MUTED }}>Prepared by</p>
            <p style={{ color: GOLD_SOFT }}>4 Knotts Kreativ</p>
            <p className="pt-3" style={{ color: MUTED }}>
              For
            </p>
            <p style={{ color: GOLD_SOFT }}>Air Cargo Club of Delhi</p>
            <p
              className="pt-1 text-[9px] tracking-[0.4em]"
              style={{ color: MUTED }}
            >
              Office of the President &amp; Executive Committee
            </p>
          </div>
        </div>

        {/* corner marks */}
        <CornerMarks />
      </section>

      {/* ============ 02 EXECUTIVE SUMMARY ============ */}
      <section id="summary" className="relative px-6 py-32 md:py-40">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            n="01"
            kicker="Executive Summary"
            title="The Air Cargo Club of Delhi sits at the intersection of policy, trade, and the people who move India&rsquo;s economy by air."
            intro="Its digital presence should carry the same weight. This proposal presents a completed brand and digital framework engineered for ACCD — a unified website, identity system, and social media language that reflect the Club&rsquo;s authority within the air cargo and logistics sector."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                n: "I",
                t: "Establish authority",
                d: "Position ACCD as the recognised industry forum for air cargo professionals across the National Capital Region.",
              },
              {
                n: "II",
                t: "Strengthen trust",
                d: "Build member confidence through a consistent, executive-grade brand voice across every touchpoint.",
              },
              {
                n: "III",
                t: "Own the platform",
                d: "Create a publishing platform for industry insight, events, advocacy, and member engagement — owned by ACCD.",
              },
            ].map((it) => (
              <div key={it.n} className="border-t pt-8" style={{ borderColor: `${GOLD}55` }}>
                <p
                  className="font-display text-xl mb-4"
                  style={{ color: GOLD_SOFT }}
                >
                  {it.n}
                </p>
                <h3
                  className="font-display text-lg mb-3 leading-snug"
                  style={{ color: PAPER }}
                >
                  {it.t}
                </h3>
                <p
                  className="text-sm leading-[1.7]"
                  style={{ color: MUTED }}
                >
                  {it.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02.5 BEFORE & AFTER ============ */}
      <section
        id="transformation"
        className="relative px-6 py-32 md:py-40"
        style={{ background: NIGHT }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="02"
            kicker="Before & After"
            title="The same Club. A <em style='color:#e0c489;font-style:italic;font-weight:300'>new</em> digital presence."
            intro="The Club's current site has served the membership for years. The proposed experience repositions ACCD for the next decade — executive in tone, contemporary in design, and engineered for the audiences the Club actually convenes."
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16">
            {/* BEFORE */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-[10px] tracking-[0.45em] uppercase"
                  style={{ color: MUTED }}
                >
                  Before
                </span>
                <span className="flex-1 h-px" style={{ background: `${PAPER}22` }} />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: MUTED }}
                >
                  accd.co.in
                </span>
              </div>
              <div
                className="overflow-hidden"
                style={{
                  background: INK,
                  border: `1px solid ${PAPER}20`,
                  boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
                }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: `${PAPER}15`, background: INK }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: "#555" }} />
                  <span className="h-2 w-2 rounded-full" style={{ background: "#555" }} />
                  <span className="h-2 w-2 rounded-full" style={{ background: "#555" }} />
                  <span
                    className="ml-3 text-[10px] tracking-[0.25em] uppercase truncate"
                    style={{ color: MUTED }}
                  >
                    accd.co.in
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://image.thum.io/get/width/1280/crop/900/https://accd.co.in"
                  alt="Current ACCD website"
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto block"
                  style={{ filter: "grayscale(0.35) brightness(0.85)" }}
                />
              </div>
              <p
                className="mt-5 text-[0.85rem] leading-[1.7]"
                style={{ color: MUTED }}
              >
                Functional, informational. A noticeboard that has served the
                membership for years.
              </p>
            </div>

            {/* AFTER */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-[10px] tracking-[0.45em] uppercase"
                  style={{ color: GOLD }}
                >
                  After
                </span>
                <span className="flex-1 h-px" style={{ background: GOLD }} />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: GOLD_SOFT }}
                >
                  Proposed
                </span>
              </div>
              <a
                href="https://accd-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  background: NIGHT,
                  border: `1px solid ${GOLD}50`,
                  boxShadow:
                    "0 40px 80px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(200,163,90,0.12)",
                }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: `${GOLD}30`, background: INK }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="h-2 w-2 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
                  <span
                    className="ml-3 text-[10px] tracking-[0.25em] uppercase truncate"
                    style={{ color: GOLD_SOFT }}
                  >
                    accd-six.vercel.app
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://image.thum.io/get/width/1280/crop/900/https://accd-six.vercel.app"
                  alt="Proposed ACCD website"
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </a>
              <p
                className="mt-5 text-[0.85rem] leading-[1.7]"
                style={{ color: MUTED }}
              >
                Editorial, executive-grade. A digital headquarters that mirrors
                ACCD&rsquo;s stature in Indian trade and aviation.{" "}
                <a
                  href="https://accd-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                  style={{ color: GOLD_SOFT }}
                >
                  View the live preview&nbsp;↗
                </a>
              </p>
            </div>
          </div>

          {/* comparison table */}
          <div className="mt-16">
            {[
              { label: "Tone", before: "Informational noticeboard", after: "Executive industry forum" },
              { label: "Structure", before: "Linked text and tabs", after: "Editorial sections with hierarchy" },
              { label: "Imagery", before: "Generic stock visuals", after: "Curated aviation & cargo imagery" },
              { label: "Member experience", before: "Static directory", after: "Trusted membership hub" },
              { label: "Mobile experience", before: "Desktop-first layout", after: "Mobile-first responsive" },
              { label: "Publishing", before: "Occasional updates", after: "Owned platform for insight & events" },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className="grid grid-cols-12 gap-3 md:gap-6 py-5 items-baseline text-[0.92rem]"
                style={{
                  borderTop: `1px solid ${GOLD}30`,
                  borderBottom:
                    i === arr.length - 1 ? `1px solid ${GOLD}30` : "none",
                }}
              >
                <span
                  className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: GOLD }}
                >
                  {row.label}
                </span>
                <span
                  className="col-span-12 md:col-span-4 leading-[1.6]"
                  style={{ color: MUTED }}
                >
                  {row.before}
                </span>
                <span
                  className="col-span-12 md:col-span-5 leading-[1.6]"
                  style={{ color: PAPER }}
                >
                  {row.after}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 BRAND IDENTITY ============ */}
      <section
        id="identity"
        className="relative px-6 py-32 md:py-40"
        style={{ background: INK }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="03"
            kicker="Brand Identity"
            title="An identity engineered for <em style='color:#e0c489;font-style:italic;font-weight:300'>boardrooms</em>, ministries, and global cargo forums."
            intro="Refined to operate at the level ACCD&rsquo;s membership expects."
          />

          <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
            <div className="md:col-span-5">
              <div
                className="aspect-square flex items-center justify-center rounded-sm"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${INK}, ${NIGHT})`,
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
            </div>
            <div className="md:col-span-7 space-y-10">
              {[
                {
                  t: "Logo System",
                  d: "Primary mark for corporate use, refined variant for digital and merchandise — each measured at the boardroom scale.",
                },
                {
                  t: "Palette",
                  d: "Aviation navy, restrained gold, and a neutral ivory. Authoritative, professional, unmistakably aviation.",
                },
                {
                  t: "Typography",
                  d: "Corporate serif for headlines, paired with a clean sans-serif for body. Legible at scale, dignified in tone.",
                },
                {
                  t: "Voice",
                  d: "Measured. Informed. Member-first. Never promotional. Always credible.",
                },
              ].map((it) => (
                <div key={it.t}>
                  <h3
                    className="font-display text-[1.15rem] mb-2 tracking-[-0.005em]"
                    style={{ color: GOLD_SOFT }}
                  >
                    {it.t}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.75] max-w-xl"
                    style={{ color: MUTED }}
                  >
                    {it.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* palette swatches — clean, no hex */}
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {[
              { c: INK, n: "Aviation Navy" },
              { c: NIGHT, n: "Cargo Blue" },
              { c: GOLD, n: "Industry Gold" },
              { c: PAPER, n: "Ivory" },
            ].map((s) => (
              <div key={s.n}>
                <div
                  className="aspect-[4/3]"
                  style={{
                    background: s.c,
                    border: `1px solid ${GOLD}25`,
                  }}
                />
                <p
                  className="mt-3 text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: MUTED }}
                >
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
        className="relative px-6 py-32 md:py-40"
        style={{ background: NIGHT }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="04"
            kicker="Website Experience"
            title="The Club&rsquo;s <em style='color:#e0c489;font-style:italic;font-weight:300'>digital headquarters.</em>"
            intro="One authoritative source for members, partners, government stakeholders, and the wider industry."
          />

          {/* framed master template */}
          <div className="relative mb-24">
            <div
              className="absolute -inset-4 md:-inset-6 rounded-sm pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${GOLD}22, transparent 60%)`,
              }}
            />
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                background: NIGHT,
                border: `1px solid ${GOLD}40`,
                boxShadow:
                  "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,163,90,0.1)",
              }}
            >
              {/* browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: `${GOLD}25`, background: INK }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "#febc2e" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "#28c840" }} />
                <span
                  className="ml-4 text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: MUTED }}
                >
                  accd.in &nbsp;·&nbsp; Air Cargo Club of Delhi
                </span>
              </div>
              <Image
                src={MASTER}
                alt="ACCD Website Master Template"
                width={2400}
                height={1500}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          {/* editorial grid */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                t: "Industry-leading homepage",
                d: "Events, advocacy, and member voices on a single screen — ACCD&rsquo;s leadership communicated at first glance.",
              },
              {
                t: "Members&rsquo; section",
                d: "Directory, leadership, committees, verified communication. Designed for trust.",
              },
              {
                t: "Events &amp; engagements",
                d: "Conferences, networking evenings, training programs, and trade interactions in one place.",
              },
              {
                t: "Industry insights",
                d: "The Club speaking to the industry — on policy, trade, and operational priorities.",
              },
              {
                t: "Mobile-first responsive",
                d: "Built for executives consuming content between meetings and airport visits.",
              },
              {
                t: "The digital office",
                d: "Engineered to feel less like a community page and more like the digital office of an industry body.",
              },
            ].map((it, i) => (
              <div key={it.t} className="flex gap-6">
                <span
                  className="font-mono text-[10px] tracking-[0.3em] pt-1.5"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="font-display text-[1.05rem] mb-2 leading-snug"
                    style={{ color: GOLD_SOFT }}
                    dangerouslySetInnerHTML={{ __html: it.t }}
                  />
                  <p
                    className="text-[0.92rem] leading-[1.75]"
                    style={{ color: MUTED }}
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
        className="relative px-6 py-32 md:py-40"
        style={{ background: INK }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="05"
            kicker="Social Media Strategy"
            title="Four pillars matched to the Club&rsquo;s <em style='color:#e0c489;font-style:italic;font-weight:300'>actual mandate</em>."
            intro="Not a generic agency content calendar. A publishing system designed for an industry body."
          />

          {/* refined creative grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-24">
            {INSTAGRAM.map((src, i) => (
              <div
                key={src}
                className="aspect-square overflow-hidden"
                style={{
                  background: INK,
                  border: `1px solid ${GOLD}25`,
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
                }}
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

          {/* pillars — editorial, no boxy cards */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              {
                n: "I",
                t: "Industry Authority",
                d: "Policy commentary, cargo industry data, customs and trade updates — positioning ACCD as a thought leader, not a noticeboard.",
              },
              {
                n: "II",
                t: "Member Spotlight",
                d: "Recognising member firms, leaders, and milestones. Strengthening the sense of belonging that defines the Club.",
              },
              {
                n: "III",
                t: "Events &amp; Engagements",
                d: "Pre-event anticipation, live coverage, and post-event recall — extending impact well beyond the venue.",
              },
              {
                n: "IV",
                t: "Behind the Cargo",
                d: "Humanising the industry — the operations, the people, the late nights at the airport. Engagement without losing stature.",
              },
            ].map((p) => (
              <div key={p.n} className="border-t pt-8" style={{ borderColor: `${GOLD}55` }}>
                <p
                  className="font-display text-xl mb-4"
                  style={{ color: GOLD_SOFT }}
                >
                  {p.n}
                </p>
                <h3
                  className="font-display text-[1.35rem] mb-3 tracking-[-0.005em]"
                  style={{ color: PAPER }}
                  dangerouslySetInnerHTML={{ __html: p.t }}
                />
                <p
                  className="text-[0.95rem] leading-[1.75] max-w-md"
                  style={{ color: MUTED }}
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
        className="relative px-6 py-32 md:py-40"
        style={{ background: NIGHT }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="06"
            kicker="Visual Design System"
            title="A documented system. <em style='color:#e0c489;font-style:italic;font-weight:300'>No drift.</em> No off-brand output."
            intro="The infrastructure that underpins everything ACCD will publish from this point forward."
          />

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[SHOT_1, SHOT_2].map((src) => (
              <div
                key={src}
                className="overflow-hidden"
                style={{
                  border: `1px solid ${GOLD}30`,
                  boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src={src}
                  alt="ACCD design system reference"
                  width={1600}
                  height={1000}
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-x-8 gap-y-10">
            {[
              {
                t: "Grid &amp; Layout",
                d: "Consistent structure across web, social, presentations, and print.",
              },
              {
                t: "Imagery Direction",
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
              <div key={it.t}>
                <GoldRule />
                <h3
                  className="font-display text-[1rem] mt-4 mb-2"
                  style={{ color: GOLD_SOFT }}
                  dangerouslySetInnerHTML={{ __html: it.t }}
                />
                <p
                  className="text-[0.88rem] leading-[1.7]"
                  style={{ color: MUTED }}
                >
                  {it.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 07 KEY DELIVERABLES ============ */}
      <section
        id="deliverables"
        className="relative px-6 py-32 md:py-40"
        style={{ background: INK }}
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            n="07"
            kicker="Key Deliverables"
            title="What is on the table."
            intro="Every deliverable is owned by ACCD — full rights, full source files, full handover."
          />

          <div className="mt-16">
            {[
              {
                w: "Brand Identity",
                d: "Refined logo system, palette, typography, voice guidelines.",
              },
              {
                w: "Website",
                d: "Full design and build of the ACCD digital headquarters.",
              },
              {
                w: "Social Media",
                d: "Strategy, content pillars, monthly publishing framework.",
              },
              {
                w: "Visual System",
                d: "Master template, presentation decks, event collateral templates.",
              },
              {
                w: "Member Communication",
                d: "Email templates, newsletter framework, official letter formats.",
              },
              {
                w: "Governance",
                d: "Brand usage guidelines for committees, partners, and members.",
              },
            ].map((row, i, arr) => (
              <div
                key={row.w}
                className="grid grid-cols-12 gap-4 md:gap-6 py-7 items-baseline"
                style={{
                  borderTop: `1px solid ${GOLD}30`,
                  borderBottom:
                    i === arr.length - 1 ? `1px solid ${GOLD}30` : "none",
                }}
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.35em]"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="col-span-10 md:col-span-4 font-display text-[1.15rem] tracking-[-0.005em]"
                  style={{ color: GOLD_SOFT }}
                >
                  {row.w}
                </h3>
                <p
                  className="col-span-12 md:col-span-7 text-[0.95rem] leading-[1.7]"
                  style={{ color: MUTED }}
                >
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
        className="relative px-6 py-32 md:py-40"
        style={{ background: NIGHT }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="08"
            kicker="Why This Works For ACCD"
            title="This is <em style='color:#e0c489;font-style:italic;font-weight:300'>not</em> a generic refresh."
            intro="Every decision was shaped by the realities of the air cargo industry and ACCD&rsquo;s specific position within it."
          />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              {
                t: "Executive-grade by default",
                d: "Reflects the seniority of ACCD&rsquo;s membership and the audiences it engages — ministries, regulators, airlines, freight forwarders, ground handlers, customs.",
              },
              {
                t: "Built for credibility, not virality",
                d: "Engineered to earn trust over years, not chase short-term reach.",
              },
              {
                t: "Operationally realistic",
                d: "Templates and systems designed for a Club secretariat — not a full-time marketing department.",
              },
              {
                t: "Industry-native",
                d: "Air cargo terminology, workflows, and stakeholder map are built into the structure — not bolted on.",
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
              <div key={it.t} className="border-l-2 pl-6" style={{ borderColor: GOLD }}>
                <h3
                  className="font-display text-[1.25rem] mb-3 tracking-[-0.005em]"
                  style={{ color: PAPER }}
                  dangerouslySetInnerHTML={{ __html: it.t }}
                />
                <p
                  className="text-[0.95rem] leading-[1.75] max-w-md"
                  style={{ color: MUTED }}
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
        className="relative px-6 py-32 md:py-40"
        style={{ background: INK }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            n="09"
            kicker="Future Opportunities"
            title="Once the foundation is live, the Club extends into <em style='color:#e0c489;font-style:italic;font-weight:300'>higher-impact</em> territory."
            intro="Each module builds on the system already delivered."
          />

          <div>
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
            ].map((it, i, arr) => (
              <div
                key={it.t}
                className="grid grid-cols-12 gap-4 md:gap-6 py-8 items-baseline"
                style={{
                  borderTop: `1px solid ${GOLD}30`,
                  borderBottom:
                    i === arr.length - 1 ? `1px solid ${GOLD}30` : "none",
                }}
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.35em]"
                  style={{ color: GOLD }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="col-span-10 md:col-span-4 font-display text-[1.2rem] tracking-[-0.005em]"
                  style={{ color: GOLD_SOFT }}
                  dangerouslySetInnerHTML={{ __html: it.t }}
                />
                <p
                  className="col-span-12 md:col-span-7 text-[0.95rem] leading-[1.75]"
                  style={{ color: MUTED }}
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
        className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 py-32"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${NIGHT} 0%, ${INK} 75%)`,
        }}
      >
        <div className="relative z-10 max-w-3xl text-center">
          <Image
            src={LOGO}
            alt="ACCD"
            width={160}
            height={160}
            className="mx-auto mb-12 opacity-95"
          />

          <div className="flex items-center justify-center gap-4 mb-12">
            <GoldRule width="w-10" />
            <span
              className="text-[10px] tracking-[0.5em] uppercase"
              style={{ color: GOLD }}
            >
              In closing
            </span>
            <GoldRule width="w-10" />
          </div>

          <p
            className="font-display font-light italic leading-[1.2] tracking-[-0.01em] text-[2rem] md:text-[3.25rem] mb-20"
            style={{ color: PAPER }}
          >
            &ldquo;Built for the industry that keeps India moving.&rdquo;
          </p>

          <div className="space-y-3 mb-20">
            <p
              className="text-[11px] tracking-[0.5em] uppercase"
              style={{ color: GOLD }}
            >
              4 Knotts Kreativ
            </p>
            <p
              className="text-[9px] tracking-[0.4em] uppercase"
              style={{ color: MUTED }}
            >
              Brand &middot; Digital &middot; Strategy
            </p>
          </div>

          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-3"
            style={{ color: MUTED }}
          >
            For the attention of
          </p>
          <p
            className="text-[11px] tracking-[0.4em] uppercase mb-16"
            style={{ color: GOLD_SOFT }}
          >
            The ACCD Executive Committee
          </p>

          <p
            className="text-[0.95rem] italic"
            style={{ color: MUTED }}
          >
            We look forward to taking this forward.
          </p>
        </div>

        <CornerMarks />
      </section>
    </div>
  );
}

function CornerMarks() {
  const mark = (corner: string) => (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${corner} h-5 w-5`}
      style={{
        borderColor: GOLD,
      }}
    />
  );
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute top-8 left-8 h-6 w-6"
        style={{ borderTop: `1px solid ${GOLD}`, borderLeft: `1px solid ${GOLD}` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-8 right-8 h-6 w-6"
        style={{ borderTop: `1px solid ${GOLD}`, borderRight: `1px solid ${GOLD}` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-8 h-6 w-6"
        style={{ borderBottom: `1px solid ${GOLD}`, borderLeft: `1px solid ${GOLD}` }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-8 h-6 w-6"
        style={{ borderBottom: `1px solid ${GOLD}`, borderRight: `1px solid ${GOLD}` }}
      />
      {mark("")}
    </>
  );
}
