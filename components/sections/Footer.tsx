'use client';

import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandTwitterFilled, IconBrandXFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../common/Logo';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Development', href: '#' },
    { name: 'Cloud Solutions', href: '#' },
    { name: 'AI/ML', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'GitHub', href: '#', icon: 'github' },
];

export default function Footer() {
  return (
    <footer className="bg-black py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-16">
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and Description */}
          <div className="lg:max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <Logo variant="desktop" />
            </div>
            
            <p className="text-white/80 text-base leading-relaxed font-medium mb-6">
              We craft cutting-edge software and provide expert consultancy to drive your digital transformation.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#191919] rounded-full flex items-center justify-center hover:bg-[#0e9a8d] transition-colors duration-300 cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon === 'linkedin' && (
                    <IconBrandLinkedinFilled className="w-5 h-5 text-white" />
                  )}
                  {social.icon === 'twitter' && (
                    <IconBrandXFilled className="w-5 h-5 text-white" />
                  )}
                  {social.icon === 'github' && (
                    <IconBrandGithubFilled className="w-5 h-5 text-white" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 lg:gap-20">
            {/* Services Links */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 tracking-wider">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#d8d8d8] text-sm hover:text-[#0e9a8d] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold text-base mb-6 tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-[#d8d8d8] text-sm hover:text-[#0e9a8d] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Large EMICRAFT Logo */}
        <motion.div 
          className="border-t border-[#333] mt-16 pt-16 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
        </motion.div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#d8d8d8] text-sm">
            © {new Date().getFullYear()} <span className="font-bold text-white">EMICRAFT</span> Tech Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
