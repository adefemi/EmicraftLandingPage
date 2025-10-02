'use client';

import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandTwitterFilled, IconBrandXFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    <footer className="bg-black py-16">
      <div className="h-20"/>
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-start justify-between gap-8">
          {/* Logo and Description */}
          <motion.div 
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.svg" alt="EMICRAFT" width={50} height={45} />
              <div className="text-white">
                <div className="font-bold text-lg tracking-wider">EMICRAFT</div>
                <div className="text-sm tracking-widest">TECH SOLUTIONS LIMITED</div>
              </div>
            </div>
            
            <p className="text-white text-base leading-relaxed max-w-lg font-medium">
              We craft cutting-edge software and provide expert consultancy to drive your digital transformation.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#191919] rounded-full flex items-center justify-center hover:bg-[#292929] transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    {social.icon === 'linkedin' && (
                      <IconBrandLinkedinFilled
                        className="w-5 h-5 text-white"
                      />
                    )}
                    {social.icon === 'twitter' && (
                      <IconBrandXFilled
                        className="w-5 h-5 text-white"
                      />
                    )}
                    {social.icon === 'github' && (
                      <IconBrandGithubFilled
                        className="w-5 h-5 text-white"
                      />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

         <div className="flex items-start justify-between gap-8 w-2/6">
           {/* Services Links */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-base mb-6 tracking-wider">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-[#d8d8d8] text-sm hover:text-[#0e9a8d] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-base mb-6 tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-[#d8d8d8] text-sm hover:text-[#0e9a8d] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
         </div>
        </div>

        {/* Large EMICRAFT Logo */}
        <motion.div 
          className="border-t border-[#333] mt-12 pt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-8xl md:text-9xl lg:text-[12rem] font-bold mb-12"
            style={{
              background: 'linear-gradient(135deg, #e5e7eb 0%, #6b7280 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            EMICRAFT
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#d8d8d8] text-sm">
            © {new Date().getFullYear()} <span className="font-bold text-white">EMICRAFT</span> Tech Solutions Limited. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
