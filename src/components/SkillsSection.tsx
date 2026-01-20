"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "AI Orchestration & ML",
    skills: [
      "Agentic Workflows (LangGraph)",
      "Durable Execution",
      "Human-in-the-Loop (HITL)",
      "PyTorch & Transformers",
      "Multimodal Fusion",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "FastAPI (Async/Await)",
      "PostgreSQL (RLS, Row-Level Security)",
      "Supabase & Edge Functions",
      "Redis Persistence",
      "System Architecture",
      "Low-Latency Design",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "State Management",
    ],
  },
  {
    title: "Concepts & Security",
    skills: [
      "Zero-Trust Security",
      "Distributed Systems",
      "Model Benchmarking",
      "Ablation Studies",
      "Privacy Engineering",
    ],
  },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background text-foreground" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">
            Core Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive technical toolkit spanning full-stack development, machine learning, and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary/5 p-6 rounded-xl border border-secondary/10 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium bg-secondary/50 hover:bg-secondary text-black transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;