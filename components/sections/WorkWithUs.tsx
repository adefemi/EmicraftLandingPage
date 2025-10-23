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
    <section id="work-with-us" className="py-20 lg:py-28 xl:py-32 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="bg-[#090909] relative overflow-hidden rounded-[20px] p-8 lg:p-12 xl:p-16 shadow-xl">
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

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Side - Content */}
                <motion.div
                  className="space-y-6 flex flex-col justify-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      Ready to transform your ideas into reality?
                    </h2>

                    <p className="text-lg text-white/90 font-medium leading-relaxed">
                      Get in touch with our team and let&apos;s discuss how we can
                      help your business grow.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4 pt-4">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0e9a8d] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="text-white text-base md:text-lg font-medium">
                        contact@emicrafttech.com
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0e9a8d] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span className="text-white text-base md:text-lg font-medium">
                        +234 903 256 9595
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0e9a8d] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <span className="text-white text-base md:text-lg font-medium">
                        Remote & On-site Services
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <form className="space-y-5">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your name"
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg focus:border-[#0e9a8d] focus:ring-[#0e9a8d] transition-colors"
                      />
                      <Input
                        type="email"
                        placeholder="Your email"
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 h-12 rounded-lg focus:border-[#0e9a8d] focus:ring-[#0e9a8d] transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <Select>
                      <SelectTrigger className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white py-6 rounded-lg focus:border-[#0e9a8d] focus:ring-[#0e9a8d] transition-colors [&>span]:text-white/60">
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

                    {/* Project Description */}
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 min-h-[120px] rounded-lg resize-none focus:border-[#0e9a8d] focus:ring-[#0e9a8d] transition-colors"
                    />

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#0e9a8d] hover:bg-[#028073] text-white h-12 rounded-full font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <IconSend size={20} />
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
