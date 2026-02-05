import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";

function MainNavigation() {
  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/">Home</Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96 p-2">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built with Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[220px] gap-1 p-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="#"
                      className="hover:bg-muted flex items-center gap-2 rounded-md p-2"
                    >
                      <CircleAlertIcon className="h-4 w-4" />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="#"
                      className="hover:bg-muted flex items-center gap-2 rounded-md p-2"
                    >
                      <CircleDashedIcon className="h-4 w-4" />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      to="#"
                      className="hover:bg-muted flex items-center gap-2 rounded-md p-2"
                    >
                      <CircleCheckIcon className="h-4 w-4" />
                      Done
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/docs">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link to={href} className="hover:bg-muted block rounded-md p-2">
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default MainNavigation;
