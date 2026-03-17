import type { Product } from "@/types";
import { Icons } from "../icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { AspectRatio } from "../ui/aspect-ratio";
import { cn, formatPrice } from "@/lib/utils";

interface productProp extends React.HtmlHTMLAttributes<HTMLDivElement> {
  product: Product;
}

function ProductCard({ product, className }: productProp) {
  return (
    <Card
      className={cn("size-full overflow-hidden rounded-lg py-0", className)}
    >
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={String(product.images[0])}
              alt={product.name}
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(product.discount)}
              </span>
            )}
          </CardDescription>
        </CardContent>
      </Link>
      {/* cart btn */}
      <CardFooter className="p-4 pt-1">
        {product.status === "sold" ? (
          <Button
            size="sm"
            className="h-8 w-full rounded-sm font-bold"
            disabled={true}
            aria-label="Sold Out"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            className="bg-own h-8 w-full rounded-sm font-bold"
            size="sm"
            aria-label="Add To Cart"
          >
            <Icons.plus /> Add To Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
