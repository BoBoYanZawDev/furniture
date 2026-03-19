import MainNavigation from "./MainNavigation";
import { siteConfig } from "@/configs/site";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";
import AuthDropDown from "@/components/layouts/AuthDropDown";
import { User } from "@/data/user";
import CartSheet from "@/components/layouts/CartSheet";
function Header() {
  const titleData = {
    title: siteConfig.name,
    description: siteConfig.description,
  };
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/90 dark:bg-black/90">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <MainNavigation items={siteConfig.mainNav} titleData={titleData} />
        <MobileNavigation items={siteConfig.mainNav} titleData={titleData} />
        <div className="me-8 flex items-center space-x-4 lg:me-0">
          <CartSheet />
          <ModeToggle />
          <AuthDropDown user={User} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
