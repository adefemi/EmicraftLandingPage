import { motion } from "framer-motion";
import { Logo } from "./Logo";

const HeroLogo = () => {
  return (
    <motion.div
      className="relative -mt-24 lg:-mt-36 mb-12 py-2 sm:py-4 lg:py-6 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Logo variant="hero" />
    </motion.div>
  );
};

export default HeroLogo;
