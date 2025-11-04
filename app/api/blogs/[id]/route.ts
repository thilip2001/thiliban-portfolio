import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blog = await prisma.blog.findUnique({
      where: { id },
    });
    
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    
    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// PUT update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const excerpt = body.excerpt || 
      body.content.replace(/<[^>]*>/g, "").substring(0, 150);
    
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title: body.title,
        content: body.content,
        excerpt,
      },
    });
    
    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await prisma.blog.delete({
      where: { id },
    });
    
    return NextResponse.json({ message: "Blog deleted" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
