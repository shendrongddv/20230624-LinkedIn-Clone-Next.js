import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";

// Components
import { SiteLogoNavbar } from "../site-logo";

const HeaderMain = () => {
  return (
    <header className="sticky left-0 top-0 z-30 w-full border-b bg-white p-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Site Logo */}
          <SiteLogoNavbar />

          {/* Col */}
          <div className="hidden items-center justify-center gap-2 divide-x md:flex">
            <div className="flex items-center justify-center gap-2">
              {/* # */}
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "rounded-full",
                  }),
                )}
              >
                Bergabung Sekarang
              </Link>

              {/* # */}
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "rounded-full",
                  }),
                )}
              >
                Login
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 pl-2">
              {/* # */}
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                    className: "rounded-full",
                  }),
                )}
              >
                Bergabung Sekarang
              </Link>

              {/* # */}
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "rounded-full",
                  }),
                )}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
