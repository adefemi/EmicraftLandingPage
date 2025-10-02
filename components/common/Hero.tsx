"use client";

import Lottie from "lottie-react";

import heroJson from "@/lib/json/hero_json.json";

interface HeroProps {
  children: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return (
    <section className="relative h-[700px] bg-[#090909] overflow-hidden">
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 z-0">
        <Lottie
          animationData={heroJson}
          loop={true}
          autoplay={true}
          className="w-[230%] h-[230%] -translate-x-1/4 -translate-y-1/4 scale-110"
        />
      </div>

      {/* Background Blur Overlay */}
      <div className="absolute inset-0 z-[5] bg-black/20 backdrop-blur-sm" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url('/c870ebc796824af6a4d39d09ff997a11a932c7e3.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full pt-20">{children}</div>
    </section>
  );
}
