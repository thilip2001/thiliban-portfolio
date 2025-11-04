"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Edit, Trash2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { isAdminAtom } from "@/atoms/blogAtom";
import { toast } from "sonner";

interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface BlogPostPageProps {
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

async function deleteBlog(id: string) {
  const response = await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete blog post");
  }
  return response.json();
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isAdmin] = useAtom(isAdminAtom);

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlog(id),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Blog post deleted successfully!");
      router.push("/blog");
    },
    onError: (error) => {
      toast.error("Failed to delete blog post", {
        description: error.message,
      });
    },
  });

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) {
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
            The blog post you&apos;re looking for doesn&apos;t exist or has been deleted.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
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
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </motion.div>

      {/* Blog Post */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" />

        {/* Content */}
        <div
          className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Actions - Only for Admin */}
        {isAdmin && (
          <div className="border-t pt-8 flex gap-4">
            <Button asChild variant="outline">
              <Link href={`/blog/edit/${blog.id}`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit Post
              </Link>
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="mr-2 h-4 w-4" />
              )}
              {deleteMutation.isPending ? "Deleting..." : "Delete Post"}
            </Button>
          </div>
        )}
      </motion.article>
    </div>
  );
}
