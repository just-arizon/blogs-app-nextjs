// app/blogs/page.tsx
import Link from "next/link";
import { getBlogs } from "../services/blogs";

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) => {
  const { q } = await searchParams
  const allBlogs = getBlogs()
  const blogs = q
    ? allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(q.toLowerCase())
      )
    : allBlogs

  return (
    <div>
      <h1 className="font-semibold">Blog Listing</h1>

      <form action="/blogs">
        <input type="search" name="q" defaultValue={q} />
        <button type="submit">Search</button>
      </form>
      <br />
      <div>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}> {blog.title} </Link>
            by {blog.author} liked by <em><strong>{blog.likes}</strong></em> people
          </li>
        ))}
      </div>
    </div>
  )
}

export default Blogs;