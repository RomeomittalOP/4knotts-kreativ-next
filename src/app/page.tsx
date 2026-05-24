import PresentationMenu from "@/components/presentation/PresentationMenu";
import { getProjectsWithAssets } from "@/lib/assets.server";

// Always read the latest files dropped into /public/projects on each request.
export const dynamic = "force-dynamic";

export default function Page() {
  const projects = getProjectsWithAssets();
  return <PresentationMenu projects={projects} />;
}
