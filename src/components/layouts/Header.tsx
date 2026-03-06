import MainNavigation from "./MainNavigation";
import { siteConfig } from "@/configs/site";

function Header() {
  const titleData = {
    title: siteConfig.name,
    description: siteConfig.description,
  };
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex h-16 items-center">
        <MainNavigation items={siteConfig.mainNav} titleData={titleData} />
      </nav>
    </header>
  );
}

export default Header;
