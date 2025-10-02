import React from "react";
interface ProjectKeyFeaturesProps {
  features: string[];
}
export default function ProjectKeyFeatures({ features }: ProjectKeyFeaturesProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-black">Key features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-5 h-5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="#0e9a8d"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-gray-600 text-base">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
