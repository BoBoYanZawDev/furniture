import { Link } from "react-router-dom";
import { siteConfig } from "@/configs/site";
import { Icons } from "@/components/icons";

function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto">
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
            <Link to="/" className="flex items-center space-x-2">
              <Icons.logo className="size-7" aria-hidden="true" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="">Loop Menu</section>
        </section>
      </div>
      Footer
    </footer>
  );
}

export default Footer;
