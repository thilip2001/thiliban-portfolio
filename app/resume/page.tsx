"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  const handleDownload = () => {
    // In a real app, this would trigger PDF download
    alert("Resume download would be triggered here!");
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
        <Button onClick={handleDownload} size="lg" className="mt-4">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </motion.div>

      {/* Resume Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border rounded-lg p-8 md:p-12 space-y-8"
      >
        {/* Personal Info */}
        <div className="text-center pb-6 border-b">
          <h2 className="text-3xl font-bold mb-2">Thiliban Ravichandran</h2>
          <p className="text-xl text-muted-foreground mb-4">
            Frontend Developer | React • Next.js • TypeScript
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 90250 30376</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>thilip2017@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com/in/thiliban-ravichandran-aa12051ba"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/thilip2001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            Passionate Frontend Developer with 3+ years of experience building
            modern, responsive web applications. Expert in React, Next.js, and
            TypeScript with a strong focus on performance optimization, accessibility,
            and user experience. Proven track record of delivering high-quality
            solutions and mentoring junior developers.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Languages & Core</h4>
              <p className="text-sm text-muted-foreground">
                JavaScript, TypeScript, HTML5, CSS3, Python
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frameworks & Libraries</h4>
              <p className="text-sm text-muted-foreground">
                React, Next.js, Node.js, Express, Framer Motion
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">UI & Styling</h4>
              <p className="text-sm text-muted-foreground">
                Tailwind CSS, ShadCN UI, Material-UI, Styled Components
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">State Management & Tools</h4>
              <p className="text-sm text-muted-foreground">
                Redux, Jotai, Zustand, Git, Docker, Figma
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          <div className="space-y-6">
            {/* Experience 1 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Senior Frontend Developer</h4>
                  <p className="text-primary">Tech Solutions Inc.</p>
                </div>
                <span className="text-sm text-muted-foreground">Jan 2023 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Led migration from Create React App to Next.js, improving performance by 40%</li>
                <li>Implemented comprehensive design system using ShadCN UI</li>
                <li>Mentored team of 5 junior developers in React best practices</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Frontend Developer</h4>
                  <p className="text-primary">Digital Innovations Ltd.</p>
                </div>
                <span className="text-sm text-muted-foreground">Jun 2021 - Dec 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Built responsive e-commerce platform handling 100k+ monthly users</li>
                <li>Improved accessibility scores from 65 to 95 (Lighthouse)</li>
                <li>Implemented real-time features using WebSockets and React Query</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Junior Frontend Developer</h4>
                  <p className="text-primary">StartUp Ventures</p>
                </div>
                <span className="text-sm text-muted-foreground">Jan 2020 - May 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Developed reusable React components for company component library</li>
                <li>Implemented responsive designs using CSS Grid and Flexbox</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold">
                Bachelor of Engineering (B.E.)
              </h4>
              <p className="text-primary">Government College of Technology</p>
              <p className="text-sm text-muted-foreground mt-1">CGPA: 8.1/10</p>
            </div>
            <span className="text-sm text-muted-foreground">2018 - 2022</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
