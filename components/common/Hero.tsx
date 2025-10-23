"use client";

import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import heroJson from "@/lib/json/hero_json.json";

interface HeroProps {
  children: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <section
      className="relative h-screen max-h-[90vh] sm:max-h-[80vh] lg:max-h-[70vh] bg-[#090909] overflow-hidden"
    >
      {/* Lottie Background Animation */}
      <div
        className="absolute inset-0 z-0"
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={heroJson}
          loop={true}
          autoplay={true}
          className="w-[230%] h-[230%] -translate-x-1/4 -translate-y-1/4"
        />
      </div>

      {/* Background Blur Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 top-0 inset-0 z-[5] bg-black/20 backdrop-blur-sm transition-transform duration-300 ease-out"
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-10 mix-blend-soft-light transition-transform duration-300 ease-out"
        style={{ backgroundImage: `url('/c870ebc796824af6a4d39d09ff997a11a932c7e3.png')` }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center w-full pb-4 sm:pb-6 lg:pb-8">{children}</div>
    </section>
  );
}
