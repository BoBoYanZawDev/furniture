import { Button } from "../ui/button";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

interface FavouriteProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  productId: string;
  rating: number;
  // isFavourite: boolean;
}

function AddToFavourite({
  productId,
  rating,
  className,
  ...props
}: FavouriteProp) {
  return (
    <div>
      <Button
        title="Favourite"
        variant="secondary"
        size="icon"
        className={cn("size-8 shrink-0", className)}
        {...props}
      >
        <Icons.heart className="size-4" />
      </Button>
    </div>
  );
}

export default AddToFavourite;
