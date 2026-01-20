"use client";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Import motion

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const isMobile = useIsMobile();

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div variants={navItemVariants}>
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-primary">Kaushik G</span>
          </Link>
        </motion.div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium pt-8">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} variants={navItemVariants} custom={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-2 py-1 text-foreground transition-colors hover:text-primary",
                          isActive && "text-primary font-bold"
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link, index) => (
              <motion.div key={link.name} variants={navItemVariants} custom={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "transition-colors hover:text-primary",
                      isActive ? "text-primary font-bold" : "text-muted-foreground"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;