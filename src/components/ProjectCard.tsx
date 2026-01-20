"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full bg-white border-zinc-200">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black">{title}</CardTitle>
        <CardDescription className="text-zinc-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 pt-0">
        {githubLink && (
          <Button asChild variant="outline" className="flex items-center gap-2">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        )}
        {liveLink && (
          <Button asChild className="flex items-center gap-2">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="h-4 w-4" /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;