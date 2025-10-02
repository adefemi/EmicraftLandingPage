"use client";

import Image from "next/image";

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

export default function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[60px] relative shrink-0 w-full z-[4]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#090909] inset-0" />
      </div>
      
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[15px] py-[2px] relative rounded-[200px] shrink-0">
          <div aria-hidden="true" className="absolute border-[1.5px] border-neutral-100 border-solid inset-0 pointer-events-none rounded-[200px]" />
          <p className="font-['Satoshi:Bold',_sans-serif] leading-[26px] not-italic relative shrink-0 text-[11px] text-neutral-100 text-nowrap tracking-[0.11px] uppercase whitespace-pre">
            gallery
          </p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['Satoshi:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-center text-nowrap text-white tracking-[0.28px] whitespace-pre">
            Some Project Snapshots
          </p>
          <div className="content-stretch flex gap-[31.25px] items-start relative shrink-0">
            <div className="bg-white box-border content-stretch flex gap-[7.813px] items-center justify-center px-[11.719px] py-[6.25px] relative rounded-[156.25px] shrink-0 size-[25px]">
              <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[0.313px] border-solid inset-0 pointer-events-none rounded-[156.25px]" />
              <div className="relative shrink-0 size-[10.938px]">
                <svg className="w-[10.938px] h-[10.938px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="bg-white box-border content-stretch flex gap-[7.813px] items-center justify-center px-[11.719px] py-[6.25px] relative rounded-[156.25px] size-[25px]">
                  <div aria-hidden="true" className="absolute border-[#d8d8d8] border-[0.313px] border-solid inset-0 pointer-events-none rounded-[156.25px]" />
                  <div className="relative shrink-0 size-[10.938px]">
                    <svg className="w-[10.938px] h-[10.938px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full">
        {gallery.slice(0, 3).map((image, index) => (
          <div key={index} className="basis-0 bg-[#00413b] grow h-[300px] min-h-px min-w-px overflow-clip relative shrink-0">
            <div className="absolute inset-0">
              <Image
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}