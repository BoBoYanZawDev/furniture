import { posts } from "@/data/posts";
import { Link, useParams } from "react-router-dom";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import RichTextRenderer from "@/components/blogs/RichTextRenderer";

function BlogDetail() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id == postId);

  return (
    <div className="container mx-auto">
      <section className="flex flex-col justify-between lg:flex-row">
        <section className="w-full pe-14 lg:w-3/4">
          <Button variant="outline" asChild className="mt-8 mb-6">
            <Link to="/blogs">
              <Icons.arrowLeft /> All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-3 text-3xl font-extrabold">{post.title}</h2>
              <div className="text-sm">
                <span>
                  by
                  <span className="mx-1 font-semibold">{post.author}</span>on
                  <span className="ms-1 font-semibold">{post.updated_at}</span>
                </span>
              </div>
              <h3 className="my-6 text-base font-normal">{post.content}</h3>
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl"
              />
              <RichTextRenderer content={post.body} className="my-8" />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button variant="secondary">{tag}</Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-xl font-bold lg:mt-24">
              Post Not Found!
            </p>
          )}
        </section>

        {/* other blogs */}
        <section className="w-full lg:mt-24 lg:w-1/4">
          <div className="flex items-center gap-2 mb-8 text-base font-semibold">
            <Icons.layers />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {posts.map((otherPost) => (
              <Link
                to={`/blogs/${otherPost.id}`}
                key={otherPost.id}
                className="mb-6 flex items-start gap-2"
              >
                <img src={otherPost.image} alt={otherPost.title} className="rounded-xl w-1/4" />
                <div className="w-3/4 text-sm font-medium text-muted-foreground">
                  <p className="line-clamp-2">{otherPost.content}</p>
                  <i>... see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetail;
