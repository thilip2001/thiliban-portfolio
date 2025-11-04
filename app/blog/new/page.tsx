"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TiptapEditor } from "@/components/ui/tiptap-editor";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface CreateBlogData {
  title: string;
  content: string;
  excerpt?: string;
}

async function createBlog(data: CreateBlogData) {
  const response = await fetch("/api/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create blog post");
  }

  return response.json();
}

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push("/blog");
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    // Extract excerpt from content (first 150 chars without HTML)
    const plainText = content.replace(/<[^>]*>/g, "");
    const excerpt = plainText.substring(0, 150) + (plainText.length > 150 ? "..." : "");

    mutation.mutate({
      title: title.trim(),
      content: content.trim(),
      excerpt,
    });
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



              {/* Content Editor */}
              <div className="space-y-2">
                <Label htmlFor="content">
                  Content <span className="text-destructive">*</span>
                </Label>
                <TiptapEditor
                  content={content}
                  onChange={setContent}
                  placeholder="Write your blog post content here... Use the toolbar to format your text."
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-12">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {mutation.isPending ? "Publishing..." : "Publish Post"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push("/blog")}
                  disabled={mutation.isPending}
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
