import MainNavigation from "./MainNavigation"
import { siteConfig } from "@/configs/site"

function Header() {
  return (
    <header className="w-full border-b">
      <div className="container flex items-center h-16 mx-auto">
       <MainNavigation />
      </div>
    </header>
  )
}

export default Header
