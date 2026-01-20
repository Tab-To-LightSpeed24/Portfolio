"use client";

import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;