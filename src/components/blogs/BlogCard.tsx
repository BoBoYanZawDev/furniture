import type { Post } from "@/types";
import { Link } from "react-router";

interface postProps {
  posts: Post[];
}

function BlogCard({ posts }: postProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt={post.title}
            className="mb-4 w-full rounded-2xl"
          />
          <h3 className="me-4 line-clamp-1 font-semibold">{post.title}</h3>
          <div className="me-4 mt-2 text-sm">
            <span>
              by 
              <span className="font-semibold mx-1">{post.author}</span>on
              <span className="font-semibold ms-1">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
