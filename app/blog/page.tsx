"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenSquare, Calendar, Loader2, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { isAdminAtom } from "@/atoms/blogAtom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
  },
};

interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  createdAt: string;
  updatedAt: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch("/api/blogs");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await response.json();
  return data.blogs;
}

export default function BlogPage() {
  const [isAdmin] = useAtom(isAdminAtom);

  const { data: blogs = [], isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="flex items-center justify-center min-h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center py-20">
          <p className="text-red-500 text-lg">Failed to load blogs. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
          Thoughts, tutorials, and insights about web development, design patterns, and modern technologies
        </p>
        {isAdmin && (
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/blog/new">
              <PenSquare className="mr-2 h-4 w-4" />
              Write New Post
            </Link>
          </Button>
        )}
      </motion.div>

      {/* Blog List */}
      {blogs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {isAdmin ? "No blog posts yet. Start writing your first post!" : "No blog posts available at the moment. Check back soon!"}
          </p>
          {isAdmin && (
            <Button asChild>
              <Link href="/blog/new">Create First Post</Link>
            </Button>
          )}
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id} 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Link href={`/blog/${blog.id}`} className="block h-full">
                <Card className="h-full hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer group overflow-hidden">
                  <CardHeader className="space-y-4">
                    <CardTitle className="line-clamp-2 text-2xl group-hover:text-primary transition-colors leading-tight">
                      {blog.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={blog.createdAt}>
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </time>
                      <span className="text-xs opacity-60">•</span>
                      <Clock className="h-3.5 w-3.5" />
                      <span>{Math.ceil((blog.content.replace(/<[^>]*>/g, "").length / 200))} min read</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                      {blog.excerpt || blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}
                      {!blog.excerpt && blog.content.length > 150 && "..."}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                      Read more 
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
