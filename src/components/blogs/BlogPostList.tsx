import { getImageUrl } from "@/lib/imageUrl";
import type { postProps } from "@/types";
import { Link } from "react-router";

function BlogPostList({ posts }: postProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={getImageUrl(post.image)}
            alt={post.title}
            decoding="async"
            loading="lazy"
            className="mb-4 w-full rounded-xl"
          />
          <h2 className="line-clamp-1 text-xl font-extrabold">{post.title}</h2>
          <h3 className="my-2 line-clamp-3 text-base font-normal">
            {post.content}
          </h3>
          <div className="mt-2 text-sm">
            <span>
              by
              <span className="mx-1 font-semibold">{post.author.fullName}</span>on
              <span className="ms-1 font-semibold">{post.updatedAt}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPostList;
