import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { withAssets } from "@/lib/assets.server";
import ShowcaseClient from "./ShowcaseClient";

type Params = { slug: string };

// Always read the latest files dropped into /public/projects on each request.
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Presentation not found" };
  return {
    title: `${project.title} — Presentation`,
    description: project.shortIntro,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = withAssets(projects[idx]);
  const next = withAssets(projects[(idx + 1) % projects.length]);
  const prev = withAssets(projects[(idx - 1 + projects.length) % projects.length]);

  return (
    <main className="relative">
      <ShowcaseClient project={project} prev={prev} next={next} />
    </main>
  );
}
