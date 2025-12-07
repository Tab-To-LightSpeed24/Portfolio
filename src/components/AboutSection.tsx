"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24" id="about">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        About Me
      </motion.h1>

      {/* About Content */}
      <motion.section
        className="mb-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>
            I’m a final-year Computer Science student at Vellore Institute of Technology, working at the intersection of full-stack engineering and applied machine learning.
          </p>
          <p>
            On the engineering side, I design and ship scalable backend services, real-time dashboards, and data-driven web applications using Python (FastAPI), TypeScript/React, and PostgreSQL/Supabase. On the AI side, I work with PyTorch, Transformers, and LLM orchestration to build real-time inference services, multimodal pipelines (text, audio, video), and evaluation workflows.
          </p>
          <p>
            I care about low-latency design, clean abstractions, and privacy-preserving systems—from federated learning prototypes to Row-Level Security (RLS) in production-style backends. My projects range from disaster management platforms and trading analytics engines to LLM-powered candidate screening and real-time community moderation systems.
          </p>
        </div>
      </motion.section>

      <Separator className="my-12 max-w-4xl mx-auto opacity-20" />

      {/* Education */}
      <motion.section
        className="mb-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-8 text-primary-foreground">Education</h2>
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="border-l-2 border-primary/20 pl-6 py-1">
            <h3 className="text-xl font-bold text-foreground">Vellore Institute of Technology</h3>
            <p className="text-lg text-muted-foreground mt-1">B.Tech. Computer Science</p>
            <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground/80">
              <span>CGPA: 7.75</span>
              <span>Expected May 2026</span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="border-l-2 border-primary/20 pl-6 py-1">
            <h3 className="text-xl font-medium text-foreground">Chennai Public School</h3>
            <p className="text-lg text-muted-foreground mt-1">Grade 12</p>
            <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground/80">
              <span>89.6%</span>
              <span>June 2022</span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="border-l-2 border-primary/20 pl-6 py-1">
            <h3 className="text-xl font-medium text-foreground">Chennai Public School</h3>
            <p className="text-lg text-muted-foreground mt-1">Grade 10</p>
            <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground/80">
              <span>94.4%</span>
              <span>June 2020</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Separator className="my-12 max-w-4xl mx-auto opacity-20" />

      {/* Certifications */}
      <motion.section
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold mb-8 text-black">Certifications</h2>
        <div className="flex flex-wrap gap-4">
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="px-4 py-2 text-base border-primary/30 text-black bg-primary/5">
              OCI Foundations Associate
            </Badge>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="px-4 py-2 text-base border-primary/30 text-black bg-primary/5">
              OCI Generative AI Professional (2025)
            </Badge>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSection;