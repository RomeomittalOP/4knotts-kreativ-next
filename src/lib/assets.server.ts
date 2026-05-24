import "server-only";
import fs from "node:fs";
import path from "node:path";
import { projects, type Project, type GalleryItem } from "./data";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"]);
const RATIOS: GalleryItem["ratio"][] = ["wide", "square", "square", "wide"];

function isImage(file: string) {
  return IMAGE_EXT.has(path.extname(file).toLowerCase());
}

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/** Read everything dropped into /public/projects/<slug>/ */
function discover(slug: string) {
  const root = path.join(process.cwd(), "public", "projects", slug);
  const rootFiles = safeReadDir(root);

  const logoFile = rootFiles.find(
    (f) => isImage(f) && /^logo\./i.test(f)
  );
  const coverFile = rootFiles.find(
    (f) => isImage(f) && /^cover\./i.test(f)
  );

  // Screen-recording videos: preview.mp4 (laptop), preview-mobile.mp4 (phone)
  const videoFile = rootFiles.find((f) => /^preview\.(mp4|webm|mov|m4v)$/i.test(f));
  const videoMobileFile = rootFiles.find((f) =>
    /^preview-mobile\.(mp4|webm|mov|m4v)$/i.test(f)
  );

  const galleryFiles = safeReadDir(path.join(root, "gallery"))
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const previewFiles = safeReadDir(path.join(root, "preview"))
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const instagramFiles = safeReadDir(path.join(root, "instagram"))
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return {
    logoImage: logoFile ? `/projects/${slug}/${logoFile}` : undefined,
    coverImage: coverFile ? `/projects/${slug}/${coverFile}` : undefined,
    galleryImages: galleryFiles.map((f) => `/projects/${slug}/gallery/${f}`),
    previewImages: previewFiles.map((f) => `/projects/${slug}/preview/${f}`),
    previewVideo: videoFile ? `/projects/${slug}/${videoFile}` : undefined,
    previewVideoMobile: videoMobileFile
      ? `/projects/${slug}/${videoMobileFile}`
      : undefined,
    instagramPosts: instagramFiles.map(
      (f) => `/projects/${slug}/instagram/${f}`
    ),
  };
}

/**
 * Merge any discovered files onto a project. Explicit values in data.ts always
 * win; discovery only fills in what hasn't been set by hand.
 */
export function withAssets(project: Project): Project {
  const found = discover(project.slug);

  // Gallery: if real images exist (and data.ts didn't already set src on them),
  // attach them in order, preserving labels/captions/ratios where available.
  let gallery = project.gallery;
  const dataHasSrc = project.gallery.some((g) => g.src);
  if (!dataHasSrc && found.galleryImages.length > 0) {
    // Real photos dropped in /gallery: uniform tiles, no placeholder labels
    // (the demo labels like "Landing" don't match the user's actual images).
    gallery = found.galleryImages.map((src, i) => {
      return {
        ratio: RATIOS[i % RATIOS.length],
        theme: project.accent,
        src,
      } satisfies GalleryItem;
    });
  }

  return {
    ...project,
    logoImage: project.logoImage ?? found.logoImage,
    coverImage: project.coverImage ?? found.coverImage,
    previewVideo: project.previewVideo ?? found.previewVideo,
    previewVideoMobile: project.previewVideoMobile ?? found.previewVideoMobile,
    instagramPosts:
      project.instagramPosts && project.instagramPosts.length > 0
        ? project.instagramPosts
        : found.instagramPosts.length > 0
        ? found.instagramPosts
        : undefined,
    previewImages:
      project.previewImages && project.previewImages.length > 0
        ? project.previewImages
        : found.previewImages.length > 0
        ? found.previewImages
        : undefined,
    gallery,
  };
}

export function getProjectsWithAssets(): Project[] {
  return projects.map(withAssets);
}

export function getProjectWithAssets(slug: string): Project | undefined {
  const p = projects.find((x) => x.slug === slug);
  return p ? withAssets(p) : undefined;
}
