import Link from "next/link";

// Components
import { SiteLogoFooterBottom, SiteLogoFooterMain } from "../site-logo";

// Contents
import { contentFooterMain, contentFooterBottom } from "@/content";

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
        <ul className="container grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:gap-x-4">
          <li className="flex flex-1 items-center gap-1 text-xs text-muted-foreground">
            <SiteLogoFooterBottom />© 2023
          </li>

          {contentFooterBottom?.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                aria-label={item.label}
                className="text-center text-xs text-muted-foreground hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
