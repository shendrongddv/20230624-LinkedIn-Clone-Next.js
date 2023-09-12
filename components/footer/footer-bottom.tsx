import Link from "next/link";

// Components
import { SiteLogoFooterBottom } from "../site-logo";

// Contents
import { contentFooterBottom } from "@/content";
import SelectLanguage from "../lang-select";

export const FooterBottom = () => {
  return (
    <>
      <div className="md:flex md:shrink-0 md:flex-col md:gap-2">
        <div className="flex items-center gap-1">
          <SiteLogoFooterBottom />© 2023
        </div>
        <SelectLanguage />
      </div>

      <ul className="text-xs text-muted-foreground md:flex md:flex-1 md:flex-wrap md:gap-2">
        {contentFooterBottom?.map((item) => (
          <li key={item.id}>
            <Link href={item.url} aria-label={item.label}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
