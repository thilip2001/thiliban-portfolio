"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PenSquare, Calendar, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Thoughts, tutorials, and insights about web development
        </p>
        <Button asChild size="lg">
          <Link href="/blog/new">
            <PenSquare className="mr-2 h-4 w-4" />
            Write New Post
          </Link>
        </Button>
      </motion.div>

      {/* Blog List */}
      {blogs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground text-lg mb-6">
            No blog posts yet. Start writing your first post!
          </p>
          <Button asChild>
            <Link href="/blog/new">Create First Post</Link>
          </Button>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {blogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Link href={`/blog/${blog.id}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {blog.excerpt || blog.content.replace(/<[^>]*>/g, "").substring(0, 150)}
                      {!blog.excerpt && blog.content.length > 150 && "..."}
                    </p>
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
