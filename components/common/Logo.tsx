import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  variant?: 'desktop' | 'mobile' | 'hero';
}

const LOGO_SIZES = {
  desktop: { width: 130, height: 130 },
  mobile: { width: 40, height: 36 },
  hero: { width: 150, height: 150 }
};

export function Logo({ variant = 'desktop' }: LogoProps) {
  const size = LOGO_SIZES[variant];

  if (variant === 'mobile') {
    return (
      <Image
        src="/logo.svg"
        alt="EMICRAFT"
        width={size.width}
        height={size.height}
        priority
      />
    );
  }

  if (variant === 'hero') {
    return (
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Image
            src="/logo.svg"
            alt="EMICRAFT"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20">
        <Image
          src="/logo.svg"
          alt="EMICRAFT"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}
