"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "PickYourTrail",
    role: "Senior Associate – Frontend Developer",
    location: "Chennai, Tamil Nadu",
    duration: "Dec 2022 - Present",
    description:
      "Core frontend team member contributing to both Plato (internal CRM) and the main PickYourTrail product. Leading modernization efforts and delivering high-impact features across multiple business-critical modules.",
    highlights: [
      "🏗️ PLATO (Internal CRM Platform) - Mission-critical platform for Sales, CX, Visa, and Finance teams:",
      "• Delivered 80+ high-impact features across Sales, Cost Sheet, CX, AO, Visa, and Refund modules",
      "• Built complex dashboards (Sales Metrics, AO, CX Leads, Dialer, Post-Feedback, Collection) for data visibility",
      "• Designed CUES (Customer Profiling) - data-driven system showing repeat customers and engagement metrics",
      "• Developed Plato Chat with trail-based threads, AI summaries, and responsive UI",
      "• Revamped Cost Sheet module with live margin preview, refund flows, TCS handling, and real-time tracking",
      "• Delivered Unity Itinerary integration in Maggi, reducing itinerary creation time by 80%",
      "• Migrated LocalStorage → IndexedDB, solving data loss and improving offline reliability",
      "• Built PDF Vouchers (EJS + HTML) for Dubai, Bali, Singapore ensuring compliance and accuracy",
      "• Implemented AI dashboards (Score.AI, Sherpa) for call transcription, scoring, and Sales coaching insights",
      "• Introduced Vitest unit testing for long-term maintainability and confidence in releases",
      "",
      "🌍 PICKYOURTRAIL (Customer-Facing Platform) - Modernization Initiative:",
      "• Leading migration from React 16 to Next.js 15 with App Router, ShadCN, and Tailwind",
      "• Migrating Flight Listing and Flight Details modules with modern architecture",
      "• Refactoring legacy code for improved maintainability and performance",
      "• Integrating ShadCN and Tailwind for consistent, accessible UI components",
      "• Leveraging React Query for robust data fetching and caching strategies",
      "• Enhancing developer productivity with GitHub Copilot and Cursor AI",
      "• Collaborating with backend teams to improve API efficiency and page load performance",
      "",
      "� IMPACT METRICS:",
      "• Maintained <2% post-release bug rate across major deliveries",
      "• Reduced manual effort by 80% through automation features",
      "• Improved load time and UX through critical component refactors",
      "",
      "🏆 ACHIEVEMENTS & LEADERSHIP:",
      "• Rookie of the Year – Outstanding Technical Contributions award",
      "• Authored internal tech blogs (Zod + React Hook Form, React Query, Jotai state management)",
      "• Mentored junior developers in React, debugging, and code optimization",
      "• Participated in frontend guild sessions for tech sharing and upskilling",
      "• AI Hackathon contributor (85% of Sherpa UI, complete Score.AI Dashboard)",
    ],
  },
  {
    company: "SquareShift.co",
    role: "React Developer – Intern",
    location: "Chennai, Tamil Nadu",
    duration: "Sep 2022 - Dec 2022",
    description:
      "Built and optimized UI components for startup applications, collaborating directly with founders.",
    highlights: [
      "Built and optimized UI components using React and Redux",
      "Collaborated with founders and senior engineers to design scalable product features",
      "Contributed to building responsive and performant user interfaces",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst Trainee – Intern",
    location: "Chennai, Tamil Nadu",
    duration: "Jan 2022 - Sep 2022",
    description:
      "Developed responsive user interfaces for internal tools and contributed to workflow enhancements.",
    highlights: [
      "Developed responsive user interfaces using JavaScript, Bootstrap, HTML, and CSS",
      "Participated in Agile sprints and contributed to UI improvements",
      "Enhanced workflow efficiency through optimized interface designs",
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
                    {exp.location && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.location}
                      </p>
                    )}
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
                      {exp.highlights.map((highlight, idx) => {
                        // Check if the line starts with an emoji or is a section header
                        const startsWithEmoji = /^[\u{1F300}-\u{1F9FF}]/u.test(highlight);
                        const isEmptyLine = highlight.trim() === "";
                        
                        if (isEmptyLine) {
                          return <div key={idx} className="h-2" />;
                        }
                        
                        return (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            {!startsWithEmoji && (
                              <span className="text-primary mt-1">•</span>
                            )}
                            <span className={startsWithEmoji ? "font-semibold" : ""}>
                              {highlight}
                            </span>
                          </li>
                        );
                      })}
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
