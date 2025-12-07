"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "ProUBoard",
        description: "Dashboard · UX · Architecture. Business dashboard for task & workload management with role-based access, simulated backend latency, and browser persistence. Built with React 19.",
        image: "/placeholder.svg",
        technologies: ["React 19", "TypeScript", "Tailwind CSS", "Context API", "LocalStorage"],
        liveLink: "https://track3-fullstack-web.vercel.app/",
    },
    {
        title: "Templa - AI Document Generator",
        description: "AI-Powered · Full-Stack · Automation. Web app to generate and refine Word & PPT docs using Gemini AI. Features Firebase Auth, project management, and docx/pptx export.",
        image: "/placeholder.svg",
        technologies: ["React", "Firebase", "Gemini API", "Generative AI", "Node.js"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/Templa-AI-App",
    },
    {
        title: "CommunityClara AI",
        description: "Backend · Applied ML · Privacy. Built a production-style moderation backend using FastAPI + PostgreSQL, optimized for sub-100ms response times. Implemented toxicity detection and federated learning prototype.",
        image: "/placeholder.svg",
        technologies: ["FastAPI", "PostgreSQL", "Transformers", "Privacy", "Federated Learning"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/CommunityClara",
    },
    {
        title: "ERIC – Multimodal Emotion Recognition",
        description: "Multimodal ML · Research-grade. Built a pipeline on MELD dataset combining RoBERTa, Wav2Vec2.0, and ResNet-18. Improved test F1 from 31.3% → 54.9% with context-aware Transformer.",
        image: "/placeholder.svg",
        technologies: ["PyTorch", "RoBERTa", "Wav2Vec2.0", "ResNet-18", "Multimodal ML"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/ERIC-Multimodal-Emotion-Recognition",
    },
    {
        title: "Hiralyze",
        description: "LLM · Full-Stack · Evaluation. LLM-driven evaluation system that extracts resume data, infers JD requirements, and computes weighted match scores with explanations.",
        image: "/placeholder.svg",
        technologies: ["LLM", "React", "TypeScript", "Evaluation", "Embeddings"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/Hiralyze",
    },
    {
        title: "FloodShield Tamil Nadu",
        description: "Full-Stack · Realtime · Civic Tech. Disaster management platform using Supabase (PostgreSQL + RLS) and Edge Functions. Built admin dashboards and community issue-tracking workflows.",
        image: "/placeholder.svg",
        technologies: ["Supabase", "PostgreSQL", "Realtime", "Civic Tech", "Edge Functions"],
        liveLink: "https://flood-shield-tn.vercel.app/",
    },
    {
        title: "TradeRadar",
        description: "Realtime Analytics · Serverless. Real-time trading analytics engine that streams/processes market data. Serverless backend with Deno Edge Functions + Supabase.",
        image: "/placeholder.svg",
        technologies: ["Realtime Analytics", "Serverless", "Deno", "Supabase", "Trading"],
        liveLink: "https://trader-radar-app.vercel.app/",
    },
    {
        title: "Quantum Search vs A*",
        description: "Research · Algorithms · Data. Benchmarked quantum-inspired search vs classical A* on large graph datasets. Built reproducible experiment pipelines.",
        image: "/placeholder.svg",
        technologies: ["Algorithms", "Quantum Search", "Benchmarking", "Research"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/Quantum-Advantage-in-Maze-Pathfinding",
    },
];

const ProjectsSection = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-background text-foreground" id="projects">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">Featured Projects</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A selection of my work in Full-Stack Engineering and Applied AI.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
