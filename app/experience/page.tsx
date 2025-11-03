"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    duration: "Jan 2023 - Present",
    description:
      "Leading frontend development initiatives, architecting scalable solutions, and mentoring junior developers.",
    highlights: [
      "Led migration from Create React App to Next.js, improving performance by 40%",
      "Implemented comprehensive design system using ShadCN UI and Tailwind CSS",
      "Reduced bundle size by 35% through code splitting and lazy loading",
      "Mentored team of 5 junior developers in React best practices",
    ],
  },
  {
    company: "Digital Innovations Ltd.",
    role: "Frontend Developer",
    duration: "Jun 2021 - Dec 2022",
    description:
      "Developed and maintained multiple client-facing applications using React and TypeScript.",
    highlights: [
      "Built responsive e-commerce platform handling 100k+ monthly users",
      "Implemented real-time features using WebSockets and React Query",
      "Improved accessibility scores from 65 to 95 (Lighthouse)",
      "Collaborated with UX team to implement Figma designs pixel-perfectly",
    ],
  },
  {
    company: "StartUp Ventures",
    role: "Junior Frontend Developer",
    duration: "Jan 2020 - May 2021",
    description:
      "Contributed to building MVP products and learning modern web development practices.",
    highlights: [
      "Developed reusable React components for company component library",
      "Implemented responsive designs using CSS Grid and Flexbox",
      "Participated in code reviews and learned industry best practices",
      "Fixed 50+ bugs and improved code quality across multiple projects",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          My professional journey in frontend development
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-12 md:pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

            <Card
              className="cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-semibold mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.duration}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-accent rounded-full transition-colors">
                    {expandedIndex === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-semibold mb-3">Impact Highlights:</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
