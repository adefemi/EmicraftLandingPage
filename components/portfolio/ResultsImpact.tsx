"use client";

import FlipCard from "@/components/ui/flip-card";

interface ResultsImpactProps {
  results?: {
    userSatisfaction?: number;
    appStoreRating?: number;
    activeUsers?: number;
  };
}

export default function ResultsImpact({ results }: ResultsImpactProps) {
  const defaultResults = {
    userSatisfaction: 89,
    appStoreRating: 4.8,
    activeUsers: 5000
  };

  const finalResults = { ...defaultResults, ...results };

  // Define the statistics items in an array
  const statisticsItems = [
    {
      id: 1,
      value: `${finalResults.userSatisfaction}%`,
      label: "User Satisfaction",
      description: "Client satisfaction rate"
    },
    {
      id: 2,
      value: finalResults.appStoreRating.toString(),
      label: "App Store Rating",
      description: "Average app store rating"
    },
    {
      id: 3,
      value:
        finalResults.activeUsers >= 1000
          ? `${Math.floor(finalResults.activeUsers / 1000)}K+`
          : `${finalResults.activeUsers}+`,
      label: "Active Users",
      description: "Total active users"
    }
  ];

  return (
    <div className="bg-neutral-100 px-16 py-10">
      <div className="flex flex-col gap-5 items-start w-full">
        <div className="px-4 py-1 border border-[#0095cf] rounded-full">
          <span className="text-xs font-bold text-[#0095cf] uppercase tracking-wide">
            featured
          </span>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-3xl font-bold text-black">
            Results & Impacts
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            The Djuix.io app was launched in June 2024 and has since become a popular app in the App Store. It has been downloaded over 100,000 times and has a rating of 4.8 out of 5.
          </p>
        </div>
      </div>

      {/* Statistics Cards using FlipCard */}
      <div className="flex gap-5 items-center w-full mt-8">
        {statisticsItems.map((item) => (
          <div key={item.id} className="flex-1">
            <FlipCard
              className="h-[200px]"
              frontContent={
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <div className="text-5xl font-bold text-[#0e9a8d] mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-600 text-base text-center">
                    {item.label}
                  </div>
                </div>
              }
              backContent={
                <div className="flex flex-col items-center justify-center h-full p-6 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      {item.label}
                    </h3>
                    <p className="text-white/80 text-base mb-4">
                      {item.description}
                    </p>
                    <div className="text-3xl font-bold">{item.value}</div>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
