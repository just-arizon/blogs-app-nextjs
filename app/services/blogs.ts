import { eq, desc } from "drizzle-orm"
import { db } from "../../db"
import { blogs } from "../../db/schema"

export const getBlogs = async () => {
  return db.query.blogs.findMany({
    orderBy: desc(blogs.likes),
  })
}

export const addBlog = async (title: string, author: string, url: string) => {
  await db.insert(blogs).values({ title, author, url, likes: 0 })
}

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  })
}

export const likeBlog = async (id: number) => {
  const blog = await getBlogById(id) // reuse the function you already have

  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes + 1 })
      .where(eq(blogs.id, id))
  }
}