"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useAtom } from "jotai";
import { blogsAtom } from "@/atoms/blogAtom";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewBlogPage() {
  const [blogs, setBlogs] = useAtom(blogsAtom);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const newBlog = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      createdAt: new Date(),
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    setBlogs([newBlog, ...blogs]);
    router.push("/blog");
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Create New Post</h1>
        <p className="text-xl text-muted-foreground">
          Share your thoughts and insights
        </p>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Blog Post Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="Enter your blog post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  placeholder="React, TypeScript, Web Development"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              {/* Content Editor */}
              <div className="space-y-2">
                <Label htmlFor="content">
                  Content <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog post content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={12}
                  required
                  className="resize-y"
                />
                <p className="text-xs text-muted-foreground">
                  Note: Rich text editor temporarily replaced with textarea due to React 19 compatibility.
                  Content will be displayed as plain text.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-12">
                <Button type="submit" size="lg" className="flex-1">
                  Publish Post
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push("/blog")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
