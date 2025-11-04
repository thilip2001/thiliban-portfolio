"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { TiptapEditor } from "@/components/ui/tiptap-editor";
import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UpdateBlogData {
  title: string;
  content: string;
  excerpt?: string;
}

interface EditBlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function fetchBlog(id: string): Promise<Blog> {
  const response = await fetch(`/api/blogs/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog post");
  }
  const data = await response.json();
  return data.blog;
}

async function updateBlog(id: string, data: UpdateBlogData) {
  const response = await fetch(`/api/blogs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to update blog post");
  }
  return response.json();
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin access
  useState(() => {
    const adminKey = localStorage.getItem("adminKey");
    if (adminKey !== "thiliban-admin-2024") {
      router.push("/blog");
    } else {
      setIsAdmin(true);
    }
  });

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlog(id),
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize form fields when blog data loads (only once)
  if (blog && !isInitialized) {
    setTitle(blog.title);
    setContent(blog.content);
    setIsInitialized(true);
  }

  const updateMutation = useMutation({
    mutationFn: (data: UpdateBlogData) => updateBlog(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog", id] });
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      router.push(`/blog/${id}`);
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

    // Extract excerpt from content
    const plainText = content.replace(/<[^>]*>/g, "");
    const excerpt = plainText.substring(0, 150) + (plainText.length > 150 ? "..." : "");

    updateMutation.mutate({
      title: title.trim(),
      content: content.trim(),
      excerpt,
    });
  };

  if (isLoading || !isAdmin) {
    return (
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !blog) {
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
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  disabled={updateMutation.isPending}
                >
                  {updateMutation.isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="mr-2 h-4 w-4" />
                  )}
                  {updateMutation.isPending ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => router.push(`/blog/${id}`)}
                  disabled={updateMutation.isPending}
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
