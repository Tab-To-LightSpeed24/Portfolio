"use client";

import React from "react";
import AboutSection from "@/components/AboutSection"; // New import

const About = () => {
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-128px)]">
      <AboutSection />
    </div>
  );
};

export default About;