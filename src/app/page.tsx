import PresentationMenu from "@/components/presentation/PresentationMenu";
import { getProjectsWithAssets } from "@/lib/assets.server";

export default function Page() {
  const projects = getProjectsWithAssets();
  return <PresentationMenu projects={projects} />;
}
