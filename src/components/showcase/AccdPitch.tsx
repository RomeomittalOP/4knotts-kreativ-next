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
