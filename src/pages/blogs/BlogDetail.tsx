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
        <section className="w-full lg:w-3/4 pe-14">
          <Button variant="outline" asChild className="mb-6 mt-8">
            <Link to="/blogs">
              <Icons.arrowLeft /> All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="text-3xl font-extrabold mb-3">{post.title}</h2>
              <div className="text-sm">
                <span>
                  by
                  <span className="mx-1 font-semibold">{post.author}</span>on
                  <span className="ms-1 font-semibold">{post.updated_at}</span>
                </span>
              </div>
              <h3 className="text-base font-normal my-6">{post.content}</h3>
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl"
              />
              <RichTextRenderer content={post.body} className="my-8"/>
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
        <section className="w-full lg:w-1/4 lg:mt-24">Other</section>
      </section>
    </div>
  );
}

export default BlogDetail;
