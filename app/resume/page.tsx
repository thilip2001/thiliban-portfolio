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
            Frontend Developer with 3 years of experience in building scalable, performant 
            web apps using React, Next.js, TypeScript, and modern UI ecosystems. Recognized 
            for delivering 80+ features across CRM modules, improving operational efficiency, 
            and driving measurable business impact. Known for clean architecture, proactive 
            learning, and reliable execution.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Core Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">
                React.js, Next.js (App Router), TypeScript, JavaScript (ES6+)
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Styling & UI</h4>
              <p className="text-sm text-muted-foreground">
                Tailwind CSS, ShadCN, Radix UI, Emotion, Stitches
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">State & Data</h4>
              <p className="text-sm text-muted-foreground">
                Jotai, React Query, Redux Toolkit, React Hook Form, Zod
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools & Performance</h4>
              <p className="text-sm text-muted-foreground">
                Git, GitHub, Figma, Postman, Vercel, IndexedDB, Vitest, Agile/Scrum
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
          <div className="space-y-6">
            {/* PickYourTrail */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Software Development Engineer I – Frontend</h4>
                  <p className="text-primary">PickYourTrail | Chennai, Tamil Nadu</p>
                </div>
                <span className="text-sm text-muted-foreground">Dec 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Delivered 80+ frontend features across Cost Sheet, CUES, Refunds, Dashboards, Chat, and Vouchers modules</li>
                <li>Implemented real-time dashboards, AI insights (Score.AI, Sherpa), and customer profiling systems</li>
                <li>Migrated frontend stack to Next.js 15, Tailwind, ShadCN, and React Query</li>
                <li>Refactored major systems improving maintainability and scalability</li>
                <li>Introduced unit testing (Vitest) and authored internal technical documentation</li>
                <li>Awarded &quot;Rookie of the Year&quot; for outstanding technical contributions</li>
              </ul>
            </div>

            {/* SquareShift */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">React Developer – Intern</h4>
                  <p className="text-primary">SquareShift | Chennai, Tamil Nadu</p>
                </div>
                <span className="text-sm text-muted-foreground">Sep 2022 - Dec 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Built reusable UI components using React and Redux</li>
                <li>Collaborated with senior engineers on scalable architecture and performance optimization</li>
              </ul>
            </div>

            {/* Cognizant */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-semibold">Programmer Analyst Trainee – Intern</h4>
                  <p className="text-primary">Cognizant Technology Solutions | Chennai, Tamil Nadu</p>
                </div>
                <span className="text-sm text-muted-foreground">Jan 2022 - Sep 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Developed responsive user interfaces using JavaScript, Bootstrap, and CSS</li>
                <li>Contributed to Agile sprint cycles for internal tool enhancements</li>
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
              <p className="text-primary">Government College of Technology, Coimbatore</p>
              <p className="text-sm text-muted-foreground mt-1">CGPA: 8.1/10</p>
            </div>
            <span className="text-sm text-muted-foreground">2018 - 2022</span>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Achievements & Contributions</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Rookie of the Year – Outstanding Technical Contributions</li>
            <li>Internal blog author (React Hook Form + Zod, Jotai, React Query)</li>
            <li>Mentor for junior developers</li>
            <li>AI Hackathon contributor (Sherpa & Score.AI)</li>
            <li>80+ features delivered across key CRM modules</li>
            <li>Next.js migration leader (Next.js 13 → 15)</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
