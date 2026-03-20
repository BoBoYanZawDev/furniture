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

const qtySchema = z.object({
  qty: z.number().min(0),
});

export default function EditTable() {
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
        className="flex w-full flex-row justify-between"
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
        <div className="">
          <Button
            type="button"
            aria-label="Delete Cart Item"
            size="icon"
            variant="outline"
          >
            <Icons.trash className="size-3" aria-hidden="true" />
            <span className="sr-only">Delete Item</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
