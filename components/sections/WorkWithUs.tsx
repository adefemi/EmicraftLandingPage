"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { IconSend } from "@tabler/icons-react";

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="py-20 min-h-[400px] bg-[#090909] relative overflow-hidden container mx-auto px-4 lg:px-16 backdrop-blur-[5px] rounded-[20px] p-8 lg:p-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/41d15aef537c8bc38d51eff5719289ff5fff7dab.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px]" />
      </div>

      <div className=" relative z-10">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Side - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ready to transform your ideas into reality?
                </motion.h2>

                <motion.p
                  className="text-lg text-white/90 font-medium tracking-[0.16px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Get in touch with our team and let&apos;s discuss how we can
                  help your business grow.
                </motion.p>
              </div>

              {/* Contact Information */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium tracking-[0.16px]">
                    contact@emicrafttech.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium tracking-[0.16px]">
                    +2349032569595
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium tracking-[0.16px]">
                    Remote & On-site Services
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      placeholder="Enter your name"
                      className="bg-white/15 backdrop-blur-[5px] border-[#686868] text-white placeholder:text-white/70 h-[50px] rounded-lg"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/15 backdrop-blur-[5px] border-[#686868] text-white placeholder:text-white/70 h-[50px] rounded-lg"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <Select>
                    <SelectTrigger className="w-full bg-white/15 backdrop-blur-[5px] border-[#686868] text-white h-[50px] rounded-lg">
                      <SelectValue placeholder="What service do you need?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="mobile-development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="desktop-development">
                        Desktop Development
                      </SelectItem>
                      <SelectItem value="cloud-devops">
                        Cloud & DevOps
                      </SelectItem>
                      <SelectItem value="ai-ml">
                        AI & Machine Learning
                      </SelectItem>
                      <SelectItem value="consulting">
                        Strategy & Consulting
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Project Description */}
                <div className="relative">
                  <Textarea
                    placeholder="Tell us about your project"
                    className="bg-white/15 backdrop-blur-[5px] border-[#686868] text-white placeholder:text-white/70 min-h-[85px] rounded-lg resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#0e9a8d] hover:bg-[#028073] text-white h-[45px] rounded-full font-medium tracking-[0.16px]"
                >
                  <IconSend size={20} color="white" />
                  Send message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
