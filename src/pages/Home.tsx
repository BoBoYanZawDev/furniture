import { Link } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import CarouselCard from "@/components/products/CarouselCard";
import { products } from "@/data/products";
import Title from "@/components/Title";
import BlogCard from "@/components/blogs/BlogCard";
import { posts } from "@/data/posts";
function Home() {
  const recentBlogs = posts.slice(0, 3);
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
      <section className="blog-section">
        <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
        <BlogCard posts={recentBlogs} />
      </section>
    </div>
  );
}

export default Home;
