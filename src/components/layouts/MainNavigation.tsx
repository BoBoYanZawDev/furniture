import React from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { MainNavItem, NavItemOrg } from "@/types";
import { Icons } from "@/components/icons";

interface mainNavigationProps {
  items?: MainNavItem[];
  titleData?: NavItemOrg;
}

export default function MainNavigation({
  items,
  titleData,
}: mainNavigationProps) {
  let firstNavItem = items?.[0];
  console.log(items);
  return (
    <div className="hidden gap-6 lg:flex lg:items-center">
      <Link to="/" className="flex items-center space-x-2">
        <Icons.logo className="size-7" aria-hidden="true" />
        <span className="inline-block font-bold">{titleData?.title}</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {firstNavItem?.card && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {firstNavItem?.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex size-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        to="/"
                      >
                        <Icons.logo className="size-6" aria-hidden="true" />
                        <div className="mt-4 mb-2 text-lg font-medium">
                          {titleData?.title}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {titleData?.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {firstNavItem?.card.map((item) => (
                    <ListItem
                      key={item.title}
                      href={String(item.href)}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
          {firstNavItem?.menu && firstNavItem.menu.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link to={String(item.href)}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={String(href)}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
