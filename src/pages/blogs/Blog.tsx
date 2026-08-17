import { infinitePostsQuery } from "@/api/query";
import BlogPostList from "@/components/blogs/BlogPostList";
import EmptyData from "@/components/empty-data";
import ErrorResult from "@/components/ErrorResult";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useInfiniteQuery } from "@tanstack/react-query";
// import { posts } from "@/data/posts"

function Blog() {
  const {
    status,
    data: postData,
    error,
    isFetching,
    isFetchingNextPage,
    // isFetchingPreviousPage,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
  } = useInfiniteQuery(infinitePostsQuery());

  const posts = postData?.pages.flatMap((page) => page.posts) ?? [];

  if (status === "pending") {
    return <RouteLoadingFallback />;
  } else if (status === "error") {
    return <ErrorResult message={(error as Error).message} />;
  }

  if (posts.length === 0 || posts.every((item) => item === undefined)) {
    return <EmptyData message="No posts found." />;
  }

  return (
    <div className="container mx-auto mb-7">
      <h1 className="mt-6 text-center text-2xl font-bold md:text-left">
        Latest Blog Posts
      </h1>
      <BlogPostList posts={posts} />
      <div className="mt-8 flex justify-center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          variant={!hasNextPage ? "ghost" : "secondary"}
        >
          {isFetchingNextPage ? (<Spinner />) : hasNextPage ? "Load More" : "Nothing more to load"}
        </Button>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? (
          <p>Background Updating...</p>
        ) : null}
      </div>
    </div>
  );
}

export default Blog;
