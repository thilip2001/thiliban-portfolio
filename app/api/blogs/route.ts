import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract excerpt from content (first 150 chars without HTML tags)
    const excerpt = body.excerpt || 
      body.content.replace(/<[^>]*>/g, "").substring(0, 150);
    
    const newBlog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        excerpt,
      },
    });
    
    return NextResponse.json({ blog: newBlog }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
