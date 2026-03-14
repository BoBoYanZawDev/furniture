import type { Product } from "@/types";
import { Icons } from "../icons";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";

interface productProp {
  product: Product;
}

function ProductCard({ product }: productProp) {
  return (
    <Card className="relative size-full overflow-hidden rounded-lg">
      <Link to={`products/${product.id}`} aria-label={product.name}>
        <CardHeader className="">
          <img
            src={String(product.images[0])}
            alt={product.name}
            className="relative z-20 aspect-video w-full object-cover"
          />
        </CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </Link>
      <CardFooter>
        <Button className="w-full">Add To Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
