"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AwardBanner } from "@/components/award-banner";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "TypeScript Expert",
  "UI/UX Enthusiast",
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AwardBanner />
      <div className="container mx-auto px-4 py-20 mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Thiliban Ravichandran
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="h-12 flex items-center"
          >
            <span className="text-xl md:text-2xl text-muted-foreground">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: currentRole === index ? 1 : 0,
                    y: currentRole === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute ${
                    currentRole === index ? "block" : "hidden"
                  }`}
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Frontend Developer with 3+ years of experience building scalable, performant applications 
            using Next.js, TypeScript, React Query, and modern UI libraries. Core contributor to Plato 
            (internal CRM) and currently leading the migration of PickYourTrail&apos;s main product to Next.js 15.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <Link href="/resume">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read Blogs</Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/thilip2001"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border bg-card hover:bg-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/thiliban-ravichandran-aa12051ba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border bg-card hover:bg-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
          >
            <Image
              src="/images/profile.jpg"
              alt="Thiliban Ravichandran"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Years Experience", value: "3+" },
          { label: "Features Delivered", value: "80+" },
          { label: "Bug Rate", value: "<2%" },
          { label: "Efficiency Gain", value: "80%" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="text-center p-6 rounded-lg border bg-card"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
}
