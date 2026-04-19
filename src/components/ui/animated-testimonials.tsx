"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Quote, Star } from "lucide-react";
import type { ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  link?: string;
}

export interface AnimatedTestimonialsProps {
  title?: ReactNode;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

export function AnimatedTestimonials({
  title,
  subtitle,
  badgeText,
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((c) => (c + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [autoRotateInterval, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <div
      ref={sectionRef}
      className={`w-full ${className ?? ""}`}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left: heading + dots */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
          {badgeText && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#E5B21A]/10 text-[#E5B21A] w-fit border border-[#E5B21A]/20">
              <Star className="h-3 w-3 fill-[#E5B21A]" />
              {badgeText}
            </div>
          )}
          {title && (
            <h2
              className="text-4xl md:text-5xl font-light text-[#F9FAFB] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[#9CA3AF] text-base leading-relaxed max-w-sm">{subtitle}</p>
          )}

          {/* Dot navigation */}
          <div className="flex items-center gap-2.5 pt-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#E5B21A]"
                    : "w-2 bg-[#F9FAFB]/15 hover:bg-[#F9FAFB]/30"
                }`}
                aria-label={`Reseña ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: animated card */}
        <motion.div
          variants={itemVariants}
          className="relative min-h-[320px] md:min-h-[380px]"
        >
          {/* Decorative corners */}
          <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-xl bg-[#E5B21A]/5 pointer-events-none" />

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 30,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ zIndex: activeIndex === index ? 10 : 0 }}
            >
              <div
                className="h-full flex flex-col rounded-2xl border border-white/5 p-8"
                style={{ background: "linear-gradient(135deg, #141208 0%, #0f0f0f 100%)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#E5B21A] text-[#E5B21A]" />
                    ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote className="absolute -top-1 -left-1 h-7 w-7 text-[#E5B21A]/15 rotate-180" />
                  <p className="relative z-10 text-[#F9FAFB]/85 text-base leading-relaxed italic font-light pl-2">
                    "{testimonial.content}"
                  </p>
                </div>

                <Separator className="mb-5 bg-white/5" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-11 w-11 border border-[#E5B21A]/20">
                    {testimonial.avatar && (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    )}
                    <AvatarFallback className="bg-[#1a1508] text-[#E5B21A] font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3
                      className="text-[#F9FAFB] font-semibold text-base"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-[#9CA3AF] text-xs mt-0.5">
                      {testimonial.role}
                      {testimonial.company ? ` · ${testimonial.company}` : ""}
                    </p>
                  </div>
                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E5B21A]/50 hover:text-[#E5B21A] text-xs transition-colors"
                    >
                      Ver →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
