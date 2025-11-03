"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

const skills = {
  "Languages & Frameworks": ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3"],
  "Styling & UI": ["Tailwind CSS", "Radix UI", "Shadcn UI", "Stitches", "Emotion"],
  "State & Data Management": ["Jotai", "Redux Toolkit", "React Query", "React Hook Form"],
  "Tools & Workflow": ["Git", "GitHub", "Figma", "Postman", "Vercel", "Netlify", "Agile/Scrum"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate frontend developer with expertise in modern web technologies
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex-shrink-0"
              >
                <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                  <Image
                    src="/images/profile.jpg"
                    alt="Thiliban Ravichandran"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Thiliban Ravichandran, a Frontend Developer with 3 years of experience building 
                high-performance, scalable web applications using React, Next.js, TypeScript, and modern 
                UI libraries. I have proven ability to deliver over 80 impactful features across complex 
                systems, improving efficiency, scalability, and user experience.
              </p>
              <p>
                Currently working at PickYourTrail, I led the migration of a large-scale internal CRM 
                from legacy architecture to Next.js, designed real-time financial visibility tools, and 
                developed an automated itinerary creation system that reduced manual effort by 80%. 
                I&apos;m skilled in translating business requirements into robust technical solutions and 
                collaborating across functions.
              </p>
              <p>
                I received the Rookie of the Year – Outstanding Technical Contributions award for 
                exceptional impact and performance. I also enjoy mentoring teammates and authoring 
                internal technical blogs to enhance team knowledge sharing.
              </p>
                </div>
                <div className="mt-8">
                  <Button size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4 text-center">
                        <div className="font-medium">{skill}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <Card>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-muted-foreground mt-1">
                  Your University • 2018 - 2022
                </p>
                <p className="mt-2 text-muted-foreground">
                  Focused on software engineering, web technologies, and data structures & algorithms.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
