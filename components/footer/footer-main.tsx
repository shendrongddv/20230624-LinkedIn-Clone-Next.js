import Link from "next/link";

// Components
import { SiteLogoFooterMain } from "../site-logo";
import { FooterBottom } from "./footer-bottom";

// Contents
import { contentFooterMain } from "@/content";

const FooterMain = () => {
  return (
    <footer>
      {/* Footer Main */}
      <div className="bg-slate-100 px-4 py-16">
        <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
          <div className="grid sm:col-span-2 md:col-span-1">
            <SiteLogoFooterMain />
          </div>

          {contentFooterMain?.map((item) => (
            <div key={item.id} className="space-y-3">
              <h4 className="text-sm font-semibold opacity-80">
                {item.heading}
              </h4>

              <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                {item.subMenu?.map((level2) => (
                  <li key={level2.id}>
                    <Link
                      href={level2.url}
                      aria-label={level2.label}
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      {level2.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="px-4 py-6">
        <div className="container md:flex md:justify-between md:gap-4">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
