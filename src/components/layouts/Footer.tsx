import { Link } from "react-router-dom";
import { siteConfig } from "@/configs/site";
import { Icons } from "@/components/icons";
import NewsLetterForm from "../new-letter";

function Footer() {
  const footerNav = siteConfig.footerNav || [];
  return (
    <footer className="ml-4 w-full border-t lg:ml-0">
      <div className="container mx-auto pt-6 pb-8 lg:py-6">
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <section>
            <Link to="/" className="flex items-center space-x-2">
              <Icons.logo className="size-7" aria-hidden="true" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4">
            {footerNav.map((data) => (
              <div key={data.title} className="space-y-3">
                <h4 className="font-medium">{data.title}</h4>
                <ul className="space-y-4">
                  {data.items.map((itemData) => (
                    <li key={itemData.title}>
                      <Link
                        to={itemData.href}
                        className="text-muted-foreground hover:text-foreground text-sm"
                        target={itemData.external ? "_blank" : undefined}
                      >
                        {itemData.title}
                        <span className="sr-only">{itemData.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
          <NewsLetterForm />
          </section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
