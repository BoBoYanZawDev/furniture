import { Link } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import CarouselCard from "@/components/products/CarouselCard";
import { products } from "@/data/products";
function Home() {
  return (
    <div className="container mx-auto">
      {/* hero section */}
      <div className="flex flex-col justify-between lg:flex-row ">
        {/* Text Section */}
        <div className="my-8 text-center lg:mt-20 lg:mb-0 lg:text-left lg:w-2/5">
          <h1 className="mb-4 text-4xl font-extrabold lg:mb-8 lg:text-6xl text-own">
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
      </div>

      {/* Carousel */}
      <CarouselCard products={products}/>
    </div>
  );
}

export default Home;
