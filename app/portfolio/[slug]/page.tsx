"use client";

import { useParams } from "next/navigation";
import ProjectDetail from "@/components/portfolio/ProjectDetail";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  return <ProjectDetail slug={slug} />;
}
