import BlogPostList from "@/components/blogs/BlogPostList"
import { posts } from "@/data/posts"

function Blog() {
  return (
    <div className="container mx-auto">
      <h1 className="mt-6 font-bold text-2xl text-center md:text-left">Latest Blog Posts</h1>
      <BlogPostList posts={posts}/>
    </div>
  )
}

export default Blog
