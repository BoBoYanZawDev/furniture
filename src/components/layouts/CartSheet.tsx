import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { cartItems } from "@/data/carts";
import { Link } from "react-router";
import CartItem from "../carts/CartItem";
import { ScrollArea } from "../ui/scroll-area";
import { formatPrice } from "@/lib/utils";
function CartSheet() {
  const itemCount = 4;
  const amountTotal = 190;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Open cart"
        >
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 size-6 justify-center rounded-full p-2.5"
          >
            {itemCount}
          </Badge>
          <Icons.cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full md:max-w-lg">
        <SheetHeader className="pb-1">
          <SheetTitle>
            {" "}
            {itemCount > 0 ? `Cart - ${itemCount}` : "Empty Cart"}
          </SheetTitle>
        </SheetHeader>
        <Separator />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-4 h-[68vh] px-5 pb-8">
              <div className="flex-1 space-y-4">
                {cartItems.map((item) => (
                  <CartItem cart={item} />
                ))}
              </div>
            </ScrollArea>
            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5 px-5 text-sm">
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>{formatPrice(amountTotal.toFixed(2))}</span>
                </div>
              </div>
              {/* footer */}
              <SheetFooter className="pt-0">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link to="/checkout" aria-label="Check Out">
                      {" "}
                      Continue to checkout
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.cart className="text-muted-foreground mb-4 size-16" />
            <div className="text-muted-foreground text-xl font-medium">
              Your cart is empty
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartSheet;
