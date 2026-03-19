import { Icons } from "@/components/icons";
import { Link } from "react-router-dom";
import type { User } from "@/types";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface userProps {
  user?: User;
}

function AuthDropDown({ user }: userProps) {
  if (!user) {
    return (
      <>
        <Button asChild size="sm" variant="outline">
          <Link to="/sign-in">
            Sign In
            <span className="sr-only">Sign In</span>
          </Link>
        </Button>
      </>
    );
  }

  const initName = `${user.firstName.charAt(0) ?? ""} ${user.lastName.charAt(0) ?? ""}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage src={user.imageUrl} alt={initName} />
            <AvatarFallback>{initName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-muted-foreground text-sm leading-none">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/dashboard">
              <Icons.dashboard className="mr-2 size-4" aria-hidden="true" />
              Dashboard
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings">
              <Icons.gear className="mr-2 size-4" aria-hidden="true" />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to="/login">
              <Icons.exit className="mr-2 size-4" aria-hidden="true" />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AuthDropDown;
