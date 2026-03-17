import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import React from "react";
import { Link, useParams } from "react-router";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Icons } from "@/components/icons";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import Rating from "@/components/products/Rating";
import AddToFavourite from "@/components/products/AddToFavourite";

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const moreProduct = products
    .filter((product) => product.id !== productId)
    .slice(0, 4);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  return (
    <div className="container mx-auto">
      <Button asChild variant="outline" className="mt-8">
        <Link to="/products">
          <Icons.arrowLeft /> All Products
        </Link>
      </Button>
      <section className="my-6 flex flex-col gap-8 md:flex-row md:gap-16">
        <Carousel plugins={[plugin.current]} className="w-full md:w-1/2">
          <CarouselContent>
            {product?.images.map((image) => (
              <CarouselItem key={image}>
                <div className="p-1">
                  <img
                    src={image}
                    alt={product.name}
                    className="size-full rounded-md object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product?.name}</h2>
            <p className="text-muted-foreground text-base">
              {formatPrice(Number(product?.price))}
            </p>
          </div>
          <Separator className="my-1.5" />
          <p className="text-muted-foreground text-base">
            {product?.inventory && product?.inventory > 0
              ? product?.inventory + " in stock"
              : "Out Of Stock"}
          </p>
          <div className="flex items-center justify-between">
            <Rating rating={Number(product?.rating)} />
            <AddToFavourite />
          </div>
        </div>
      </section>
      <section className="space-y-6 overflow-hidden">
        <h2 className="line-clamp-1 text-2xl font-bold">
          More Products From Furniture Shop
        </h2>

        <ScrollArea className="pb-8">
          <div className="flex gap-4">
            {moreProduct.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                className="min-w-[260px]"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </div>
  );
}

export default ProductDetail;
