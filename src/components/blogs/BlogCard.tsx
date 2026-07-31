import type { postProps } from "@/types";
import { getImageUrl } from "@/lib/imageUrl";
import { Link } from "react-router";

function BlogCard({ posts }: postProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={getImageUrl(post.image)}
            alt={post.title}
            className="mb-4 w-full rounded-2xl"
          />
          <h3 className="me-4 line-clamp-1 font-semibold">{post.title}</h3>
          <div className="me-4 mt-2 text-sm">
            <span>
              by
              <span className="mx-1 font-semibold">{post.author.fullName}</span>on
              <span className="ms-1 font-semibold">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
