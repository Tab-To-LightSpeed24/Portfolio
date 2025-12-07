"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center min-h-[calc(100vh-128px)]">
      <h1 className="text-5xl font-bold mb-6 text-primary">Contact Me</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Reach out if you have any questions or opportunities. I'd love to connect!
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        <a
          href="mailto:kaushik.vgs@gmail.com"
          className="flex items-center gap-2 text-lg text-blue-500 hover:text-blue-700 underline"
        >
          <Mail className="h-5 w-5" /> kaushik.vgs@gmail.com
        </a>
        <a
          href="tel:+917824042014"
          className="flex items-center gap-2 text-lg text-blue-500 hover:text-blue-700 underline"
        >
          <Phone className="h-5 w-5" /> +91 78240 42014
        </a>
      </div>
    </div>
  );
};

export default Contact;