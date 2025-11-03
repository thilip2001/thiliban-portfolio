"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TiptapEditor } from "@/components/ui/tiptap-editor";
import { useAtom } from "jotai";
import { blogsAtom } from "@/atoms/blogAtom";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = use(params);
  const [blogs, setBlogs] = useAtom(blogsAtom);
  const router = useRouter();
  const blog = blogs.find((b) => b.id === id);

  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [tags, setTags] = useState(blog?.tags?.join(", ") || "");

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
          <p className="text-lg text-muted-foreground">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedBlog = {
      ...blog,
      title,
      content,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    setBlogs(blogs.map((b) => (b.id === id ? updatedBlog : b)));
    router.push(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Button asChild variant="ghost">
          <Link href={`/blog/${id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Post
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Edit Blog Post</h1>
              <p className="text-muted-foreground">
                Update your blog post content
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title..."
                  required
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="React, TypeScript, Next.js..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <div className="border rounded-md p-4">
                  <TiptapEditor
                    content={content}
                    onChange={setContent}
                    placeholder="Write your blog content..."
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push(`/blog/${id}`)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
