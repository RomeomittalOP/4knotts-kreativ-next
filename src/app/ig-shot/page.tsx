import InstagramMock from "@/components/showcase/InstagramMock";
import { getProjectWithAssets } from "@/lib/assets.server";

// Temporary route just for capturing clean images of the Instagram main page.
export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug = "vriksh" } = await searchParams;
  const p = getProjectWithAssets(slug);
  if (!p) return null;
  return (
    <main className="grid min-h-screen w-full place-items-center bg-[#0a0a0b] p-10">
      <div className="overflow-hidden rounded-[36px] border border-white/10 shadow-2xl">
        <InstagramMock project={p} width={440} height={920} autoOpen={false} />
      </div>
    </main>
  );
}
