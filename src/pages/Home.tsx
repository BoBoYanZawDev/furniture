import { Link, useLoaderData } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import CarouselCard from "@/components/products/CarouselCard";
// import { products } from "@/data/products";
import Title from "@/components/Title";
import BlogCard from "@/components/blogs/BlogCard";
// import { posts } from "@/data/posts";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { postsQuery, productsQuery } from "@/api/query";
import { Skeleton } from "@/components/ui/skeleton";
function Home() {
  // const { productsData, postsData } = useLoaderData();
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts,
    refetch: refreshProducts,
  } = useQuery(productsQuery("?limit=8"));
  const {
    data: postsData,
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
    error: errorPosts,
    refetch: refreshPosts,
  } = useQuery(postsQuery("?limit=3"));

  if (isLoadingProducts || isLoadingPosts) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (isErrorProducts || isErrorPosts) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-500 text-center">
            Error: {errorProducts?.message || errorPosts?.message}
          </p>
          <Button
          className="mt-4 "
            onClick={() => {
              refreshProducts();
              refreshPosts();
            }}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const products = productsData.products;
  const posts = postsData.posts;
  const recentBlogs = posts.slice(0, 3);
  const featProduct = products.slice(0, 4);
  return (
    <div className="container mx-auto">
      {/* hero section */}
      <section className="flex flex-col justify-between lg:flex-row">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-20 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="text-own mb-4 text-4xl font-extrabold lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          <div className="space-x-2">
            <Button
              asChild
              className="rounded-full bg-orange-300 px-8 py-6 text-base font-bold hover:bg-orange-400"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border px-8 py-6 text-base font-bold"
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/* Image Section */}
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
      </section>

      {/*product Carousel */}
      <CarouselCard products={products} />

      {/* blogs section */}
      <section className="production-section">
        <Title
          title="Featured Products"
          href="/products"
          sideText="View All Products"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featProduct.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      {/* blogs section */}
      <section className="blog-section">
        <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
        <BlogCard posts={recentBlogs} />
      </section>
    </div>
  );
}

export default Home;
