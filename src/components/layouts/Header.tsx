import MainNavigation from "./MainNavigation";
import { siteConfig } from "@/configs/site";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";

function Header() {
  const titleData = {
    title: siteConfig.name,
    description: siteConfig.description,
  };
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between">
          <MainNavigation items={siteConfig.mainNav} titleData={titleData} />
          <MobileNavigation items={siteConfig.mainNav} titleData={titleData} />
        <div className="flex items-center space-x-4 me-8 lg:me-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
