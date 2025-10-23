'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  motionProps?: any;
  style?: React.CSSProperties | any;
}

export function NavLink({
  href,
  children,
  className = "",
  onClick,
  motionProps = {},
  style
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const finalStyle = isActive(href) 
    ? { ...style, color: '#0e9a8d' }
    : style;

  const hasCustomStyle = style && style.color;
  const defaultColorClass = hasCustomStyle 
    ? "" 
    : isActive(href) ? "text-[#0e9a8d]" : "text-white";

  const link = (
    <Link
      href={href}
      className={`hover:text-[#0e9a8d] transition-colors ${defaultColorClass} ${className}`.trim()}
      onClick={onClick}
      style={finalStyle}
    >
      {children}
    </Link>
  );

  if (motionProps && Object.keys(motionProps).length > 0) {
    return <motion.div {...motionProps}>{link}</motion.div>;
  }

  return link;
}
