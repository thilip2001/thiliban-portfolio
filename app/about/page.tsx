"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const skills = {
  "Frontend": ["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  "Styling & UI": ["Tailwind CSS", "ShadCN", "Radix UI", "Emotion", "Stitches", "React Virtuoso"],
  "State & Data": ["Jotai", "React Query", "Redux Toolkit", "React Hook Form", "Zod"],
  "Tools & Performance": ["Git", "GitHub", "Figma", "Postman", "Vercel", "IndexedDB", "Vitest", "Agile/Scrum"],
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
                className="shrink-0"
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
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a <strong>Frontend Developer at PickYourTrail</strong> with 3+ years of hands-on experience 
                building scalable, performant, and user-friendly applications using Next.js, TypeScript, React Query, 
                Jotai, and Zod.
              </p>
              <p>
                I&apos;ve been a <strong>core contributor to our internal CRM (Plato)</strong>, a mission-critical 
                platform used by Sales, CX, Visa, and Finance teams to manage customer journeys, trails, costs, and 
                operations. I&apos;ve delivered 80+ impactful features across critical business modules such as Cost 
                Sheet, Sales Metrics, Refunds, Vouchers, Dashboards, and Chat, helping the platform scale and improve 
                user experience across multiple departments.
              </p>
              <p>
                Currently, I&apos;m working on <strong>migrating the main PickYourTrail product from React 16 to 
                Next.js 15</strong>, leveraging ShadCN, Tailwind CSS, and React Query for a modern, modular architecture. 
                This includes migrating Flight Listing and Flight Details modules using App Router and refactoring legacy 
                code for better maintainability and performance.
              </p>
              <p>
                I&apos;m passionate about building reliable systems that enhance productivity for internal teams, drive 
                performance improvements, and deliver measurable business value. I focus on writing clean, modular, and 
                maintainable code, and I&apos;m constantly exploring better ways to enhance user experience, performance, 
                and developer efficiency.
              </p>
              <p>
                My work has directly improved:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Financial transparency</strong> through real-time cost and margin dashboards</li>
                <li><strong>Team productivity</strong> through automation and optimized workflows (80% reduction in itinerary creation time)</li>
                <li><strong>Platform stability</strong> with &lt;2% post-release bug rate across major deliveries</li>
                <li><strong>Scalability</strong> through modern architecture migrations (Next.js 15, ShadCN, IndexedDB)</li>
                <li><strong>Developer efficiency</strong> using GitHub Copilot and Cursor AI for faster development</li>
              </ul>
              <p>
                I also actively contribute to team knowledge sharing through internal tech blogs, mentoring junior 
                developers, and participating in frontend guild sessions. I take pride in being a reliable, fast, 
                and quality-driven developer — someone who delivers not just features, but solutions that matter.
              </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Engineering (B.E.)</h3>
                <p className="text-primary text-lg mt-1">Government College of Technology, Coimbatore</p>
                <p className="text-muted-foreground mt-2">CGPA: 8.1/10</p>
              </div>
              <span className="text-muted-foreground font-medium">2018 - 2022</span>
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
    </div>
  );
}
