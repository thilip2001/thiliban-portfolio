"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"],
  Frameworks: ["React", "Next.js", "Node.js", "Express"],
  "UI Libraries": ["Tailwind CSS", "ShadCN UI", "Material-UI", "Ant Design", "Styled Components"],
  "State Management": ["Redux", "Jotai", "Zustand", "Context API"],
  Tools: ["Git", "VS Code", "Figma", "Postman", "Docker"],
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
                I&apos;m Thiliban Ravichandran, a dedicated Frontend Developer with a strong passion 
                for creating exceptional user experiences. With expertise in React, Next.js, and 
                TypeScript, I specialize in building modern, performant, and accessible web applications.
              </p>
              <p>
                My journey in web development has been driven by a constant desire to learn and 
                master new technologies. I believe in writing clean, maintainable code and following 
                best practices to ensure scalability and performance.
              </p>
              <p>
                When I&apos;m not coding, I enjoy exploring new design trends, contributing to open-source 
                projects, and sharing my knowledge through blog posts and mentoring.
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
