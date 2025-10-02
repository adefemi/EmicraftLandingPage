"use client";

import Image from "next/image";

interface ChallengeSolutionProps {
  challenges: string[];
  solutions: string[];
  challengeImage: string;
  solutionImage: string;
}

// Reusable section component with direction prop
interface SectionProps {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  direction: 'ltr' | 'rtl';
}

function Section({ title, content, image, imageAlt, direction }: SectionProps) {
  const isLtr = direction === 'ltr';
  
  return (
    <div className="flex gap-10 items-start">
      {/* Image */}
      <div className={`w-80 h-56 relative ${isLtr ? 'order-1' : 'order-2'}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className={`flex-1 flex flex-col gap-1 ${isLtr ? 'order-2' : 'order-1'}`}>
        <h3 className="text-3xl font-bold text-black">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function ChallengeSolution({ 
  challenges, 
  solutions, 
  challengeImage, 
  solutionImage 
}: ChallengeSolutionProps) {
  return (
    <div className="flex flex-col gap-16">
      {/* The Challenge Section */}
      <Section
        title="The Challenge"
        content={challenges.length > 0 ? challenges[0] : "Lorem ipsum dolor sit amet consectetur. Et odio sed ac at nec nulla magna ultrices imperdiet. Iaculis feugiat arcu metus maecenas massa ac sollicitudin dictum. At vivamus lorem faucibus netus sed. Faucibus nisi velit libero cursus vel vestibulum lectus ut eu. Odio pellentesque non vel volutpat. Iaculis quam tempus blandit maecenas eu ultrices nisi eget. Id dolor ipsum nunc lectus neque sollicitudin dui. Urna volutpat pharetra vitae non proin. Non feugiat et purus duis."}
        image={challengeImage}
        imageAlt="Project challenge"
        direction="ltr"
      />

      {/* Our Solution Section */}
      <Section
        title="Our Solution"
        content={solutions.length > 0 ? solutions[0] : "Lorem ipsum dolor sit amet consectetur. Et odio sed ac at nec nulla magna ultrices imperdiet. Iaculis feugiat arcu metus maecenas massa ac sollicitudin dictum. At vivamus lorem faucibus netus sed. Faucibus nisi velit libero cursus vel vestibulum lectus ut eu. Odio pellentesque non vel volutpat. Iaculis quam tempus blandit maecenas eu ultrices nisi eget. Id dolor ipsum nunc lectus neque sollicitudin dui. Urna volutpat pharetra vitae non proin. Non feugiat et purus duis."}
        image={solutionImage}
        imageAlt="Project solution"
        direction="rtl"
      />
    </div>
  );
}