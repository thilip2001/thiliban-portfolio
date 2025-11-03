"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin:0
          }
          
          * {
            box-sizing: border-box;
            background: white !important;
          }
          
          html, body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            width: 100% !important;
          }
          
          body > * {
            background: white !important;
          }
          
          header, footer, nav, .no-print {
            display: none !important;
          }
          
          .print-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
          }
          
          .resume-content {
            background: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 0.5rem 0.6rem !important;
            font-size: 9pt !important;
            line-height: 1.3 !important;
          }
          
          .resume-content h2 {
            font-size: 18pt !important;
            margin-bottom: 0.3rem !important;
            margin-top: 0 !important;
            color: black !important;
          }
          
          .resume-content h3 {
            font-size: 11pt !important;
            margin-bottom: 0.25rem !important;
            margin-top: 0.4rem !important;
            color: black !important;
            border-bottom: 1px solid #ddd;
            padding-bottom: 0.1rem;
          }
          
          .resume-content h4 {
            font-size: 10pt !important;
            margin-bottom: 0.1rem !important;
            color: black !important;
          }
          
          .resume-content p {
            font-size: 9pt !important;
            line-height: 1.3 !important;
            margin: 0.1rem 0 !important;
            color: #333 !important;
          }
          
          .resume-content ul {
            margin: 0.2rem 0 !important;
            padding-left: 1.2rem !important;
          }
          
          .resume-content li {
            font-size: 8.5pt !important;
            line-height: 1.3 !important;
            margin: 0.1rem 0 !important;
            color: #333 !important;
          }
          
          .resume-content > div {
            margin-bottom: 0.4rem !important;
            page-break-inside: avoid !important;
          }
          
          .resume-content .border-b {
            border-bottom: 1px solid #ddd !important;
            padding-bottom: 0.3rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          .resume-content {
            page-break-inside: auto !important;
          }
          
          .keep-together {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            margin-top: 0.6rem !important;
          }
          
          .mt-8 {
            margin-top: 1.5rem !important;
          }
          
          .resume-content > div:last-child,
          .resume-content > div:nth-last-child(2) {
            page-break-inside: avoid !important;
          }
          
          a {
            color: #0066cc !important;
            text-decoration: none;
            font-size: 9pt !important;
          }
          
          .flex {
            display: flex !important;
          }
          
          .grid {
            display: grid !important;
            gap: 0.3rem !important;
          }
          
          svg {
            width: 10px !important;
            height: 10px !important;
          }
        }
      `}</style>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 no-print"
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
        className="bg-card border rounded-lg p-8 md:p-12 space-y-8 resume-content print-container"
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
            Frontend Developer with 3+ years of hands-on experience building scalable, performant, 
            and user-friendly applications using Next.js, TypeScript, React Query, Jotai, and Zod. 
            Core contributor to Plato (internal CRM) delivering 80+ features across Sales, CX, Visa, 
            and Finance modules. Currently leading the modernization of PickYourTrail&apos;s main 
            product from React 16 to Next.js 15 with App Router. Recognized for clean architecture, 
            measurable business impact, and maintaining &lt;2% post-release bug rate. Passionate about 
            building reliable systems, mentoring developers, and driving technical excellence.
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
                  <h4 className="text-lg font-semibold">Senior Associate – Frontend Developer</h4>
                  <p className="text-primary">PickYourTrail | Chennai, Tamil Nadu</p>
                </div>
                <span className="text-sm text-muted-foreground">Dec 2022 - Present</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Plato (Internal CRM Platform):</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Delivered 80+ features across Sales, Cost Sheet, CX, AO, Visa, and Refund modules</li>
                  <li>Built AI-powered dashboards (Score.AI, Sherpa) for call analysis and performance insights</li>
                  <li>Developed CUES customer profiling and Plato Chat with AI summaries</li>
                  <li>Migrated LocalStorage → IndexedDB improving scalability and offline reliability</li>
                  <li>Created PDF vouchers (EJS + HTML) for multiple destinations ensuring compliance</li>
                  <li>Reduced itinerary creation time by 80% through Unity integration in Maggi</li>
                </ul>
                <p className="text-sm font-semibold text-muted-foreground mt-3">PickYourTrail (Main Product):</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Leading migration from React 16 to Next.js 15 with App Router, ShadCN, and Tailwind</li>
                  <li>Migrating Flight modules with modern architecture and improved performance</li>
                  <li>Leveraging React Query for robust data fetching and caching strategies</li>
                  <li>Enhanced developer productivity using GitHub Copilot and Cursor AI</li>
                </ul>
                <p className="text-sm font-semibold text-muted-foreground mt-3">Technical Leadership:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Introduced Vitest testing and maintained &lt;2% post-release bug rate</li>
                  <li>Awarded &quot;Rookie of the Year&quot; for outstanding technical contributions</li>
                  <li>Authored internal tech blogs and mentored junior developers</li>
                </ul>
              </div>
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
        <div className="keep-together">
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
        <div className="keep-together">
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
