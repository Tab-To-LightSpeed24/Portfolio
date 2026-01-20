"use client";

import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/80 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">

        <div className="flex gap-4">
          <a
            href="https://github.com/Tab-To-LightSpeed24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/kaushik-gunasekaran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:kaushik.vgs@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+917824042014"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;