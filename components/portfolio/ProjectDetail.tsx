"use client";

import PillButton from "@/components/ui/pill-button";
import Link from "next/link";
import { projects } from "../../lib/constant/projects";
import ChallengeSolution from "./ChallengeSolution";
import ProjectGallery from "./ProjectGallery";
import ProjectHero from "./ProjectHero";
import ProjectKeyFeatures from "./ProjectKeyFeatures";
import ProjectOverview from "./ProjectOverview";
import ResultsImpact from "./ResultsImpact";

interface ProjectDetailProps {
  slug: string;
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link href="/portfolio">
            <PillButton size="md">Back to Portfolio</PillButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container space-y-5">
      <div className="">
        <ProjectHero project={project} />

        <div className="px-16 py-8">
          <ProjectOverview project={project} />
        </div>

        <div className="px-16 py-8">
          <ChallengeSolution
            challenges={project.challenges}
            solutions={project.solutions}
            challengeImage={project.challengeImage}
            solutionImage={project.solutionImage}
          />
        </div>

        <div className="px-16 py-8">
          <ProjectKeyFeatures features={project.features} />
        </div>

        <div className="">
          <ProjectGallery gallery={project.gallery} title={project.title} />
        </div>

        <div className="">
          <ResultsImpact results={project.results} />
        </div>
      </div>
    </div>
  );
}
