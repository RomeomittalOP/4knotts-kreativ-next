"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";

/**
 * A dummy Instagram profile rendered at the phone's native screen size.
 * Auto-opens posts on a loop so a screen-recording looks alive.
 */
export default function InstagramMock({
  project,
  width,
  height,
  autoOpen = true,
  initialOpen = null,
}: {
  project: Project;
  width: number;
  height: number;
  autoOpen?: boolean;
  initialOpen?: number | null;
}) {
  const posts = project.instagramPosts ?? [];
  const handle =
    project.instagramHandle ??
    project.title.toLowerCase().replace(/[^a-z0-9]+/g, "") + ".official";
  const name = project.instagramName ?? project.title;
  const bio = project.instagramBio ?? project.shortIntro;
  const followers = project.instagramFollowers ?? stableFollowers(project.slug);
  const following = project.instagramFollowing ?? "318";
  const avatar = project.logoImage;

  // px scale relative to a 270-wide reference phone screen
  const u = width / 270;
  const px = (n: number) => Math.round(n * u);

  const [open, setOpen] = useState<number | null>(autoOpen ? null : initialOpen);
  const [cursor, setCursor] = useState(initialOpen ?? 0);

  // Auto-open / close loop
  useEffect(() => {
    if (!autoOpen) return;
    if (posts.length === 0) return;
    let alive = true;
    let t: ReturnType<typeof setTimeout>;

    const tick = (phase: "open" | "browse", idx: number) => {
      if (!alive) return;
      if (phase === "browse") {
        setOpen(null);
        setCursor(idx);
        t = setTimeout(() => tick("open", idx), 1400);
      } else {
        setOpen(idx);
        t = setTimeout(() => tick("browse", (idx + 1) % posts.length), 3200);
      }
    };
    t = setTimeout(() => tick("open", 0), 1600);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [posts.length, autoOpen]);

  return (
    <div
      style={{ width, height, background: "#000", color: "#fff" }}
      className="relative overflow-hidden font-sans"
    >
      {/* Status bar */}
      <div
        className="flex items-center justify-between font-semibold"
        style={{ height: px(26), paddingInline: px(14), fontSize: px(10) }}
      >
        <span>{currentTime()}</span>
        <div className="flex items-center" style={{ gap: px(4) }}>
          <Signal u={u} />
          <Wifi u={u} />
          <Battery u={u} />
        </div>
      </div>

      {/* Top bar */}
      <div
        className="flex items-center justify-between"
        style={{ height: px(40), paddingInline: px(12) }}
      >
        <div className="flex items-center" style={{ gap: px(5) }}>
          <span className="font-semibold" style={{ fontSize: px(15) }}>
            {handle}
          </span>
          <Caret u={u} />
        </div>
        <div className="flex items-center" style={{ gap: px(14) }}>
          <PlusBox u={u} />
          <Menu u={u} />
        </div>
      </div>

      {/* Scrollable profile body */}
      <div
        className="no-scrollbar"
        style={{ height: height - px(26) - px(40) - px(44), overflow: "hidden" }}
      >
        <motion.div
          animate={{ y: open !== null ? -px(40) : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Profile header */}
          <div style={{ padding: px(12) }}>
            <div className="flex items-center" style={{ gap: px(18) }}>
              <Avatar src={avatar} u={u} size={px(64)} ring />
              <div className="flex flex-1 justify-around">
                <Stat n={String(posts.length)} label="posts" px={px} />
                <Stat n={followers} label="followers" px={px} />
                <Stat n={following} label="following" px={px} />
              </div>
            </div>

            <div style={{ marginTop: px(10) }}>
              <div className="font-semibold" style={{ fontSize: px(11.5) }}>
                {name}
              </div>
              <div style={{ fontSize: px(11), color: "#b9b9c0", marginTop: px(2) }}>
                {project.tag}
              </div>
              <div
                style={{
                  fontSize: px(11),
                  color: "#e8e8ee",
                  marginTop: px(3),
                  lineHeight: 1.35,
                }}
              >
                {bio}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex" style={{ gap: px(6), marginTop: px(12) }}>
              <Btn label="Following" px={px} />
              <Btn label="Message" px={px} />
              <Btn label="Email" px={px} />
              <div
                className="grid place-items-center rounded-md"
                style={{
                  width: px(28),
                  height: px(28),
                  background: "#1c1c1f",
                }}
              >
                <Caret u={u} down />
              </div>
            </div>

            {/* Highlights */}
            <div className="flex" style={{ gap: px(14), marginTop: px(14) }}>
              {["Work", "Team", "Drops", "BTS"].map((h, i) => (
                <div key={h} className="flex flex-col items-center" style={{ gap: px(4) }}>
                  <div
                    className="grid place-items-center rounded-full"
                    style={{
                      width: px(46),
                      height: px(46),
                      background: "#141416",
                      border: `${Math.max(1, px(1))}px solid #2a2a2e`,
                      overflow: "hidden",
                    }}
                  >
                    {posts[i] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[i]}
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                      />
                    ) : null}
                  </div>
                  <span style={{ fontSize: px(9.5), color: "#d8d8de" }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div
            className="flex border-t"
            style={{ borderColor: "#1f1f22", marginTop: px(4) }}
          >
            <div
              className="flex flex-1 justify-center"
              style={{ paddingBlock: px(8), borderBottom: `${Math.max(1, px(1.4))}px solid #fff` }}
            >
              <Grid u={u} />
            </div>
            <div className="flex flex-1 justify-center" style={{ paddingBlock: px(8) }}>
              <Reels u={u} />
            </div>
            <div className="flex flex-1 justify-center" style={{ paddingBlock: px(8) }}>
              <Tagged u={u} />
            </div>
          </div>

          {/* Posts grid */}
          <div
            className="grid"
            style={{ gridTemplateColumns: "1fr 1fr 1fr", gap: px(1.5) }}
          >
            {posts.map((src, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  background: "#141416",
                  outline:
                    i === cursor && open === null
                      ? `${Math.max(1, px(1.4))}px solid #fff`
                      : "none",
                  outlineOffset: -px(1.4),
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`post ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
          <div style={{ height: px(20) }} />
        </motion.div>
      </div>

      {/* Bottom nav */}
      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t"
        style={{ height: px(44), borderColor: "#1f1f22", background: "#000" }}
      >
        <Home u={u} />
        <Search u={u} />
        <PlusBox u={u} />
        <Reels u={u} />
        <Avatar src={avatar} u={u} size={px(22)} />
      </div>

      {/* Post detail overlay */}
      <AnimatePresence>
        {open !== null && posts[open] && (
          <motion.div
            key={open}
            initial={{ x: width, opacity: 0.6 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: width, opacity: 0.6 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col"
            style={{ background: "#000", paddingTop: px(26) }}
          >
            {/* detail top bar */}
            <div
              className="flex items-center"
              style={{ height: px(40), paddingInline: px(10), gap: px(10) }}
            >
              <Back u={u} />
              <div className="flex flex-col">
                <span style={{ fontSize: px(8.5), color: "#b9b9c0" }}>
                  {handle}
                </span>
                <span className="font-semibold" style={{ fontSize: px(13) }}>
                  Posts
                </span>
              </div>
            </div>

            {/* post header */}
            <div
              className="flex items-center"
              style={{ paddingInline: px(10), paddingBlock: px(6), gap: px(8) }}
            >
              <Avatar src={avatar} u={u} size={px(28)} ring />
              <span className="font-semibold flex-1" style={{ fontSize: px(11.5) }}>
                {handle}
              </span>
              <Menu u={u} />
            </div>

            {/* image */}
            <div style={{ position: "relative", width, aspectRatio: "1 / 1", background: "#141416" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posts[open]}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* actions */}
            <div
              className="flex items-center"
              style={{ paddingInline: px(10), paddingTop: px(10), gap: px(14) }}
            >
              <Heart u={u} filled />
              <Comment u={u} />
              <Share u={u} />
              <div style={{ flex: 1 }} />
              <Bookmark u={u} />
            </div>

            <div style={{ paddingInline: px(10), paddingTop: px(8) }}>
              <div className="font-semibold" style={{ fontSize: px(11) }}>
                {likeCount(project.slug, open)} likes
              </div>
              <div style={{ fontSize: px(11), marginTop: px(3), lineHeight: 1.4 }}>
                <span className="font-semibold">{handle}</span>{" "}
                <span style={{ color: "#e8e8ee" }}>
                  {captionFor(open)} <span style={{ color: "#7a86c2" }}>#4knottskreativ #design</span>
                </span>
              </div>
              <div style={{ fontSize: px(9.5), color: "#8a8a90", marginTop: px(6) }}>
                {1 + (open % 6)} DAYS AGO
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- small pieces ---------- */

function Stat({ n, label, px }: { n: string; label: string; px: (n: number) => number }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold" style={{ fontSize: px(13) }}>{n}</span>
      <span style={{ fontSize: px(10), color: "#d8d8de" }}>{label}</span>
    </div>
  );
}

function Btn({ label, px }: { label: string; px: (n: number) => number }) {
  return (
    <div
      className="flex flex-1 items-center justify-center rounded-md font-semibold"
      style={{ height: px(28), background: "#1c1c1f", fontSize: px(10.5) }}
    >
      {label}
    </div>
  );
}

function Avatar({
  src,
  u,
  size,
  ring,
}: {
  src?: string;
  u: number;
  size: number;
  ring?: boolean;
}) {
  return (
    <div
      className="grid shrink-0 place-items-center rounded-full"
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg,#fff,#eee)",
        padding: Math.max(1, Math.round(2 * u)),
        boxShadow: ring
          ? `0 0 0 ${Math.max(1, Math.round(2 * u))}px #000, 0 0 0 ${Math.max(2, Math.round(3.5 * u))}px #d62976`
          : "none",
      }}
    >
      <div
        className="grid h-full w-full place-items-center overflow-hidden rounded-full"
        style={{ background: "#fff" }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt="avatar"
            style={{ width: "78%", height: "78%", objectFit: "contain" }}
          />
        ) : null}
      </div>
    </div>
  );
}

/* ---------- icons (stroke svgs) ---------- */
function ico(u: number, n = 22) {
  return {
    width: Math.round(n * u),
    height: Math.round(n * u),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}
const Caret = ({ u, down }: { u: number; down?: boolean }) => (
  <svg {...ico(u, 12)} style={down ? undefined : { transform: "none" }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const PlusBox = ({ u }: { u: number }) => (
  <svg {...ico(u, 20)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);
const Menu = ({ u }: { u: number }) => (
  <svg {...ico(u, 20)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
const Grid = ({ u }: { u: number }) => (
  <svg {...ico(u, 18)}>
    <rect x="3" y="3" width="18" height="18" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);
const Reels = ({ u }: { u: number }) => (
  <svg {...ico(u, 18)}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="m8 3 3 5M14 3l3 5M3 8h18M10 12l5 3-5 3z" />
  </svg>
);
const Tagged = ({ u }: { u: number }) => (
  <svg {...ico(u, 18)}>
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M9 11a3 3 0 1 1 6 0c0 2-3 3-3 5" />
  </svg>
);
const Home = ({ u }: { u: number }) => (
  <svg {...ico(u, 22)}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </svg>
);
const Search = ({ u }: { u: number }) => (
  <svg {...ico(u, 22)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3-3" />
  </svg>
);
const Heart = ({ u, filled }: { u: number; filled?: boolean }) => (
  <svg {...ico(u, 22)} fill={filled ? "#ff3040" : "none"} stroke={filled ? "#ff3040" : "currentColor"}>
    <path d="M12 21s-7-4.35-10-9a5 5 0 0 1 10-1 5 5 0 0 1 10 1c-3 4.65-10 9-10 9Z" />
  </svg>
);
const Comment = ({ u }: { u: number }) => (
  <svg {...ico(u, 22)}>
    <path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1 4.2A7.9 7.9 0 0 1 21 12Z" />
  </svg>
);
const Share = ({ u }: { u: number }) => (
  <svg {...ico(u, 22)}>
    <path d="m22 2-7 20-4-9-9-4z" />
  </svg>
);
const Bookmark = ({ u }: { u: number }) => (
  <svg {...ico(u, 22)}>
    <path d="M6 3h12v18l-6-4-6 4z" />
  </svg>
);
const Back = ({ u }: { u: number }) => (
  <svg {...ico(u, 22)}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);
const Signal = ({ u }: { u: number }) => (
  <svg width={Math.round(16 * u)} height={Math.round(11 * u)} viewBox="0 0 16 11" fill="currentColor">
    <rect x="0" y="7" width="3" height="4" rx="0.5" />
    <rect x="4.5" y="4.5" width="3" height="6.5" rx="0.5" />
    <rect x="9" y="2" width="3" height="9" rx="0.5" />
    <rect x="13" y="0" width="3" height="11" rx="0.5" />
  </svg>
);
const Wifi = ({ u }: { u: number }) => (
  <svg width={Math.round(15 * u)} height={Math.round(11 * u)} viewBox="0 0 15 11" fill="currentColor">
    <path d="M7.5 2C4.7 2 2.2 3.1.4 4.9l1.4 1.4C3.3 4.8 5.3 4 7.5 4s4.2.8 5.7 2.3l1.4-1.4C12.8 3.1 10.3 2 7.5 2Z" />
    <path d="M7.5 6c-1.4 0-2.7.6-3.6 1.5l1.4 1.4c.6-.6 1.4-.9 2.2-.9s1.6.3 2.2.9l1.4-1.4C10.2 6.6 8.9 6 7.5 6Z" />
    <circle cx="7.5" cy="10" r="1.2" />
  </svg>
);
const Battery = ({ u }: { u: number }) => (
  <svg width={Math.round(24 * u)} height={Math.round(11 * u)} viewBox="0 0 24 11" fill="none">
    <rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" opacity="0.5" />
    <rect x="2" y="2" width="15" height="7" rx="1.2" fill="currentColor" />
    <rect x="21.5" y="3.5" width="1.8" height="4" rx="0.9" fill="currentColor" opacity="0.6" />
  </svg>
);

/* ---------- helpers ---------- */
function currentTime() {
  return "9:41";
}
function stableFollowers(slug: string) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const n = 3200 + (h % 22000);
  return n >= 10000 ? (n / 1000).toFixed(1) + "k" : n.toLocaleString();
}
function likeCount(slug: string, i: number) {
  let h = i + 7;
  for (const c of slug) h = (h * 17 + c.charCodeAt(0)) >>> 0;
  return (240 + (h % 1800)).toLocaleString();
}
const CAPTIONS = [
  "Behind the scenes of our latest drop.",
  "Designed with intent. Crafted with care.",
  "New work, fresh off the press.",
  "Details that make the difference.",
  "Swipe through the process →",
  "Proud of how this one turned out.",
  "A little preview of what's coming.",
  "Made for the everyday.",
];
function captionFor(i: number) {
  return CAPTIONS[i % CAPTIONS.length];
}
