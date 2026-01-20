"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "Durable Agent Orchestrator",
        description: "AI Systems · Orchestration. Engineered a LangGraph-inspired engine with FastAPI and PostgreSQL. Implemented durable execution for state consistency and cyclic logs, enabling reliable long-running AI tasks.",
        image: "/placeholder.svg",
        technologies: ["FastAPI", "PostgreSQL", "LangGraph", "Durable Execution", "State Management"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/Durable-Agent-Orchestrator",
    },
    {
        title: "CommunityClara AI",
        description: "Backend · Applied ML. High-performance moderation service delivering sub-100ms inference via async threading. Features Privacy-by-Isolation feedback loops and auto-tuning toxicity thresholds.",
        image: "/clara.png",
        technologies: ["FastAPI", "Transformers", "Async Optimization", "Privacy Engineering", "React"],
        liveLink: "https://community-clara.vercel.app/",
        githubLink: "https://github.com/Tab-To-LightSpeed24/CommunityClara",
    },
    {
        title: "ERIC – Multimodal Emotion Recognition",
        description: "Research · Multimodal ML. Architected a parallel Transformer Encoder system achieving 75.5% relative F1-score improvement. designed decoupled pipelines for high throughput.",
        image: "/eric.png",
        technologies: ["PyTorch", "Multimodal Fusion", "Transformers", "Research", "Ablation Studies"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/ERIC-Multimodal-Emotion-Recognition",
    },
    {
        title: "FloodShield TN",
        description: "Civic Tech · Full-Stack. Real-time disaster management platform with PostgreSQL RLS for data security. Uses Edge Functions for concurrent broadcasting during emergency loads.",
        image: "/floodshield.png",
        technologies: ["Supabase", "React", "PostgreSQL RLS", "Edge Functions", "Real-time"],
        liveLink: "https://flood-shield-tn.vercel.app/",
        githubLink: "https://github.com/Tab-To-LightSpeed24/FloodShield-TamilNadu",
    },
    {
        title: "Hiralyze (Smart Resume Screener)",
        description: "LLM · Extraction Pipeline. LLM-driven filtering system using structured parsing to normalize resume data. Optimized inference layer enables sub-second rank-and-justify operations.",
        image: "/hiralyze.png",
        technologies: ["LLM", "Structured Parsing", "FastAPI", "Evaluation", "React"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/Smart-Resume-Screener",
    },
    {
        title: "ProUBoard",
        description: "Frontend · Architecture. Interactive dashboard built with React 19 to manage complex workloads. Features a decoupled service layer to simulate API latency and test UI scalability.",
        image: "/prou.jpg",
        technologies: ["React 19", "TypeScript", "Architecture", "Simulation", "Tailwind CSS"],
        liveLink: "https://track3-fullstack-web.vercel.app/",
        githubLink: "https://github.com/Tab-To-LightSpeed24/ProUBoard",
    },
    {
        title: "Templa - AI Document Generator",
        description: "Full-Stack · AI Automation. Generates structured Word and PowerPoint documents using Gemini AI API and Firebase Auth.",
        image: "/templa.png",
        technologies: ["React", "Firebase", "Gemini API", "Automation", "Full-Stack"],
        githubLink: "https://github.com/Tab-To-LightSpeed24/Templa-AI-App",
    },
    {
        title: "TradeRadar",
        description: "FinTech · No-Code Platform. Market monitoring tool for building visual trading strategies with real-time Telegram alerts.",
        image: "/traderadar.png",
        technologies: ["React", "Real-time Analytics", "Telegram Bot API", "No-Code", "Fintech"],
        liveLink: "https://trader-radar-app.vercel.app/",
        githubLink: "https://github.com/Tab-To-LightSpeed24/TradeRadar",
    },
    {
        title: "Quantum Maze Solver",
        description: "Research · Algorithms. Benchmarking classical A* search against Quantum Grover's Algorithm to analyze theoretical vs. practical speedups.",
        image: "/quantum.png",
        technologies: ["Quantum Computing", "Grover's Algorithm", "A* Search", "Python", "Research"],
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
