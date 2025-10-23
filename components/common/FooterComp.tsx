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
      <WorkWithUs />
      <Footer />
    </div>
  );
}
