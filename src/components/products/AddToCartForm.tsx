import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const qtySchema = z.object({
  qty: z.number().min(0),
});
interface addToCartFormProps {
  canBuy: boolean;
}

export default function AddToCartForm({ canBuy }: addToCartFormProps) {
  const form = useForm<z.infer<typeof qtySchema>>({
    resolver: zodResolver(qtySchema),
    defaultValues: {
      qty: 1,
    },
  });

  function onSubmit(values: z.infer<typeof qtySchema>) {
    console.log(values);
    // Call api
    toast.success("Product is added to cart successfully.");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-w-[160px] flex-col gap-4"
      >
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            type="button"
            className="size-8 shrink-0 rounded-l-lg rounded-r-none"
          >
            <Icons.minus className="size-3" aria-hidden="true" />
            <span className="sr-only">Remove Item</span>
          </Button>
          <FormField
            control={form.control}
            name="qty"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="sr-only">qty</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    {...field}
                    className="h-8 w-16 rounded-none border-x-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant="outline"
            size="icon"
            type="button"
            className="size-8 shrink-0 rounded-l-none rounded-r-lg"
          >
            <Icons.plus className="size-3" aria-hidden="true" />
            <span className="sr-only">Add One Item</span>
          </Button>
        </div>
        <div className="flex items-center space-x-2.5">
          <Button
            className={cn("bg-own w-full font-bold", !canBuy && "bg-slate-400")}
            type="button"
            aria-label="Buy Now"
            size="sm"
          >
            Buy Now
          </Button>
          <Button
            variant={canBuy ? "outline" : "default"}
            type="button"
            aria-label="Add To Cart"
            size="sm"
            className="w-full font-semibold"
          >
            Add To Cart
          </Button>
        </div>
      </form>
    </Form>
  );
}
