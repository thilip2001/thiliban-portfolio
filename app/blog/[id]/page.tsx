"use client";

import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { blogsAtom } from "@/atoms/blogAtom";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, ArrowLeft, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params);
  const [blogs, setBlogs] = useAtom(blogsAtom);
  const router = useRouter();
  const blog = blogs.find((b) => b.id === id);

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

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter((b) => b.id === id));
      router.push("/blog");
    }
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

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t" />

        {/* Content */}
        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Actions */}
        <div className="border-t pt-8 flex gap-4">
          <Button asChild variant="outline">
            <Link href={`/blog/edit/${blog.id}`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Post
            </Link>
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Post
          </Button>
        </div>
      </motion.article>
    </div>
  );
}
