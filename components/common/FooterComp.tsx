"use client";
import { usePathname } from "next/navigation";
import Footer from "../sections/Footer";
import Testimonials from "../sections/Testimonials";
import Tools from "../sections/Tools";
import WorkWithUs from "../sections/WorkWithUs";

export default function FooterComp() {
  const pathname = usePathname();
  const shouldUse = pathname === "/portfolio" ? "tools" : "testimonial";
  return (
    <div>
      {shouldUse === "testimonial" && <Testimonials />}
      {shouldUse === "tools" && <Tools />}
      <div className="relative py-40 bg-[#f5f5f5]">
        <div className="px-4 lg:px-16 absolute top-0">
          <WorkWithUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
