import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { MainNavItem, NavItemOrg } from "@/types";
import { Icons } from "@/components/icons";
import { ScrollArea } from "../ui/scroll-area";

interface mainNavigationProps {
  items?: MainNavItem[];
  titleData?: NavItemOrg;
}

function MobileNavigation({ items, titleData }: mainNavigationProps) {
  let firstNavItem = items?.[0];
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-6">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-4 pt-9 max-w-screen">
          <SheetClose asChild>
            <Link to="/" className="flex items-center">
              <Icons.logo className="mr-2 size-6" aria-hidden="true" />
              <span className="inline-block font-bold">{titleData?.title}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="h-[calc(100vh - 8rem)] my-4 pb-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-slate-100/60 px-1">{firstNavItem?.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {firstNavItem?.card?.map((item) => (
                      <SheetClose asChild>
                        <Link
                          key={item.title}
                          to={String(item.href)}
                          className="text-foreground/70 block rounded-md px-3 py-2 text-sm font-medium"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2">
              {firstNavItem?.menu?.map((item2) => (
                <SheetClose asChild>
                  <Link
                    key={item2.title}
                    to={String(item2.href)}
                    className="block rounded-md py-2 px-1 text-sm font-medium bg-slate-100/60"
                  >
                    {item2.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
