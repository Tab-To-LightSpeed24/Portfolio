"use client";

import { motion } from "framer-motion";
import { Circle, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

function HeroSection() {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <HeroGeometric>
            <div className="max-w-4xl mx-auto">
                {/* Badge above heading */}
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-6 flex justify-center"
                >
                    <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm md:text-base font-medium rounded-full bg-white/10 text-white/70 border border-white/20 backdrop-blur-sm"
                    >
                        Chennai · Full-Stack & Applied ML Engineer
                    </Badge>
                </motion.div>

                <motion.div
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                            Kaushik G
                        </span>
                        <br />
                        <span
                            className={cn(
                                "text-2xl sm:text-4xl md:text-5xl block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                            )}
                        >
                            Full-Stack & Applied ML Engineer
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <p className="text-xl md:text-2xl text-white/80 font-light mb-4">
                        I build scalable backend systems, data-driven web apps, and real-time AI pipelines using Python, TypeScript, and modern ML/LLM stacks.
                    </p>

                </motion.div>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                >
                    <Button asChild size="lg" className="px-8 py-6 text-lg rounded-full">
                        <Link to="/projects">View Projects</Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="px-8 py-6 text-lg rounded-full">
                        <a href="mailto:kaushik.vgs@gmail.com">Contact Me</a>
                    </Button>
                </motion.div>
            </div>
        </HeroGeometric>
    );
}

export default HeroSection;