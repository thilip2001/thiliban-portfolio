"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <FileQuestion className="w-24 h-24 mx-auto text-muted-foreground" />
        <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
        <p className="text-lg text-muted-foreground">
          The blog post you&apos;re looking for doesn&apos;t exist or has been deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
